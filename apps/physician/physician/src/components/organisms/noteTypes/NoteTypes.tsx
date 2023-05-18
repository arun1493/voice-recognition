import {
  Dialog,
  Icon,
  Modal,
  ModalContent,
  ModalHeader,
  ScreenSize,
  Text,
  useBreakpointIncludes
} from "@suki-web/suki-ui";
import store from "store2";
import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { batch, useDispatch, useSelector } from "react-redux";
import { FunctionComponent, useEffect, useState } from "react";
import { ClientEmitEventTypes } from "@suki-web/suki-business";

import {
  StyledCenterContent,
  StyledEmptyContainer,
  StyledNoteTypeList,
  StyledNoteTypeListItem
} from "./noteTypes.styled";
import {
  getAllNoteTypes,
  noteTypesActions,
  selectAllNoteTypes,
  selectIsFromPatientList,
  selectNoteTypesStatus,
  selectPatientId
} from "../../../redux/noteTypes";
import { Note } from "../../../types";
import { useSocket } from "../../../socket";
import { getRoute } from "../../../helpers";
import { noteTypeReader } from "../../../readers";
import { useNavigatorOnline } from "../../../hooks";
import { toastsActions } from "../../../redux/toast";
import { modalsActions } from "../../../redux/modals";
import { noteActions, selectCompositionId } from "../../../redux/note";
import { EMPTY_STRING, LOCAL_STORE, Pages, SESSION_STORE, TOAST_TYPES, USER_REQUEST_TYPE } from "../../../constants";

type CreateNotePayload = {
  appointmentId?: string;
  compositionId: string;
  fromPatientList: boolean;
  noteTypeId: string;
  patientId?: string;
  requestType: string;
};

const NoteTypes: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOffline } = useNavigatorOnline();

  const { transmitEvent } = useSocket();
  const noteTypes: Array<Note> = useSelector(selectAllNoteTypes);
  const compositionId = useSelector(selectCompositionId);
  const isFromPatientList = useSelector(selectIsFromPatientList);
  const { isFetched, isLoading: isNoteTypesLoading } = useSelector(selectNoteTypesStatus);

  const patientId = useSelector(selectPatientId);

  const [isModalClosed, setIsModalClosed] = useState(false);

  const { XXS, XS } = ScreenSize;
  const isSmallScreen = useBreakpointIncludes(XXS, XS);
  const modalWidth = isSmallScreen ? 344 : 448;
  const modalHeight = 334;
  const modalContentHeight = 278;

  /**
   * TODO: [Rohit] Add description
   */

  const handleClose = () => {
    batch(() => {
      dispatch(modalsActions.hideNoteTypesModal());
      dispatch(noteActions.setCompositionId(EMPTY_STRING));
    });

    transmitEvent({
      type: ClientEmitEventTypes.USER_REQUEST,
      data: { compositionId: compositionId, requestType: USER_REQUEST_TYPE.CANCEL_CREATE_NOTE }
    });
  };

  const onNoteTypeClick = (noteTypeId: string) => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.s2.createNote"), type: TOAST_TYPES.ERROR }));
      return;
    }

    if (!compositionId || !noteTypeId || isModalClosed) {
      return;
    }

    const createNotePayload: CreateNotePayload = {
      compositionId,
      noteTypeId,
      fromPatientList: isFromPatientList,
      requestType: USER_REQUEST_TYPE.CREATE_NOTE_WITH_NOTETYPE
    };

    if (patientId) {
      createNotePayload.patientId = patientId;
      createNotePayload.requestType = USER_REQUEST_TYPE.CREATE_NOTE_WITH_NOTETYPE_PATIENT;
    }

    const appointmentId = store.get(LOCAL_STORE.APPOINTMENT_ID);

    store.remove(LOCAL_STORE.APPOINTMENT_ID);

    if (appointmentId) {
      createNotePayload.appointmentId = appointmentId;
    }

    transmitEvent({
      type: ClientEmitEventTypes.USER_REQUEST,
      data: createNotePayload
    });
  };

  useEffect(() => {
    if (_isEmpty(compositionId)) {
      transmitEvent({
        type: ClientEmitEventTypes.USER_REQUEST,
        data: { fromPatientList: isFromPatientList, requestType: USER_REQUEST_TYPE.CREATE_NOTE }
      });
    }

    dispatch(noteTypesActions.setNoteTypesLoadingStatus(true));
    dispatch(getAllNoteTypes());

    return () => {
      store.session.remove(SESSION_STORE.CREATE_NEW_NOTE_USING_KEYBOARD);
    };
  }, []);

  const handleGoToSettings = () => {
    const noteTypesRoute = getRoute(Pages.NoteTypes);
    noteTypesRoute && navigate(noteTypesRoute);

    batch(() => {
      dispatch(modalsActions.hideNoteTypesModal());
      dispatch(noteActions.setCompositionId(EMPTY_STRING));
    });
  };

  const renderNoteType = (noteType: Note, idx: number) => {
    const noteTypeId = noteTypeReader.id(noteType);
    const noteTypeName = noteTypeReader.name(noteType);

    return (
      <StyledNoteTypeListItem
        data-cy={`which-note-type-item-${idx}`}
        key={noteTypeId}
        onClick={() => onNoteTypeClick(noteTypeId)}
      >
        <Text cursor="pointer" size="md">
          {noteTypeName}
        </Text>
      </StyledNoteTypeListItem>
    );
  };

  const handleModalIsClosed = () => setIsModalClosed(true);

  const isLoading = _isEmpty(compositionId) || isNoteTypesLoading;

  const markedUpBtnProps = {
    end: {
      onClick: handleGoToSettings,
      text: t("modals.noteTypes.emptyNoteTypes.buttonLabel")
    }
  };

  if (isLoading) {
    return (
      <Modal
        height={modalHeight}
        onClose={handleClose}
        onModalClose={handleModalIsClosed}
        position="mc"
        testId="which-note-type-modal"
        width={modalWidth}
      >
        <ModalHeader height={56} title={t("modals.noteTypes.title")} />
        <ModalContent hasPadding={false} height={modalContentHeight}>
          <StyledCenterContent>
            <Icon data-cy="loader-icon" icon="loader" />
          </StyledCenterContent>
        </ModalContent>
      </Modal>
    );
  }

  if (_isEmpty(noteTypes)) {
    return (
      <Dialog
        buttonProps={markedUpBtnProps}
        isOpen={true}
        key="empty-note-types"
        onClose={handleClose}
        title={t("modals.noteTypes.emptyNoteTypes.title")}
      >
        <StyledEmptyContainer>
          <Text>{t("modals.noteTypes.emptyNoteTypes.descriptionLine1")}</Text>
          <Text>{t("modals.noteTypes.emptyNoteTypes.descriptionLine2")}</Text>
        </StyledEmptyContainer>
      </Dialog>
    );
  }

  return (
    <Modal
      height={modalHeight}
      onClose={handleClose}
      onModalClose={handleModalIsClosed}
      position="mc"
      testId="which-note-type-modal"
      width={modalWidth}
    >
      <ModalHeader height={56} title={t("modals.noteTypes.title")} />
      <ModalContent hasPadding={false} height={modalContentHeight}>
        <StyledNoteTypeList data-testid="notetypes-list">{_map(noteTypes, renderNoteType)}</StyledNoteTypeList>
      </ModalContent>
    </Modal>
  );
};

export default NoteTypes;

export { NoteTypes };
