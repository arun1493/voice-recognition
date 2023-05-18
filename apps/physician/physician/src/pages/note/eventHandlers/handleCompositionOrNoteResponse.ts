import store from "store2";
import i18n from "i18next";
import { batch } from "react-redux";
import _isEmpty from "lodash/isEmpty";
import { EMPTY_OBJECT } from "@suki-web/suki-business";

import { Composition } from "../../../types";
import { noteActions } from "../../../redux/note";
import { isSecondaryEmr } from "../../../helpers";
import { toastsActions } from "../../../redux/toast";
import { modalsActions } from "../../../redux/modals";
import { handleAddPatientToScheduleOrList } from "../helpers";
import { SocketEventHandlerAdditionalProps } from "../../../socket";
import { compositionReader, metadataReader } from "../../../readers";
import { LOCAL_STORE, SESSION_STORE, STATE_ITEM_LOADING_STATUS, TOAST_TYPES } from "../../../constants";

type CompositionOrNoteType = "composition" | "note";

// TODO[Rohit] Finalize data structure for note response
interface CompositionOrNoteResponse {
  composition: Composition;
  compositionOrNote: CompositionOrNoteType;
  note: any;
}

function handleCompositionOrNoteResponse(
  payload: CompositionOrNoteResponse,
  { dispatch, getReduxStoreState }: SocketEventHandlerAdditionalProps
): void {
  const { composition } = payload;
  const metadata = compositionReader.metadata(composition);
  const isPartialDictationComposition = metadataReader.partialDictationComposition(metadata);
  const emrType = metadataReader.emrType(metadata) || store.get(LOCAL_STORE.EMR_TYPE);
  const isEmr = isSecondaryEmr(emrType);

  const { note } = getReduxStoreState();
  const { isNewNote } = note;

  dispatch(noteActions.initialComposition(composition));
  dispatch(noteActions.setLoadingStatus(STATE_ITEM_LOADING_STATUS.LOADED));

  if (!isPartialDictationComposition && !_isEmpty(metadata)) {
    handleAddPatientToScheduleOrList(metadata, dispatch, isEmr, isNewNote);
  }
}

function handleCompositionUpdatedResponse(
  payload: CompositionOrNoteResponse,
  { dispatch, getReduxStoreState }: SocketEventHandlerAdditionalProps
): void {
  const { composition = EMPTY_OBJECT } = payload;
  const sectionsS2 = compositionReader.sections(composition);
  const metadata = compositionReader.metadata(composition);
  const isPartialDictationComposition = metadataReader.partialDictationComposition(metadata);
  const emrType = metadataReader.emrType(metadata) || store.get(LOCAL_STORE.EMR_TYPE);

  const isEmr = isSecondaryEmr(emrType);

  dispatch(noteActions.setS2Sections(sectionsS2));

  const { modals, note } = getReduxStoreState();
  const { isNewNote } = note;
  const { noteRefresh } = modals;
  const { isActive } = noteRefresh;

  // Check if the note refresh modal is open and it is a EMR
  if (isEmr && isActive) {
    batch(() => {
      dispatch(noteActions.setNotePulledFromEmr(true));
      dispatch(modalsActions.hideNoteRefreshModal());
      dispatch(toastsActions.add({ message: i18n.t("modals.noteRefresh.success"), type: TOAST_TYPES.CONFIRMATION }));
    });
  }

  if (!_isEmpty(metadata)) {
    dispatch(noteActions.updateMetadata(metadata));
    !isPartialDictationComposition && handleAddPatientToScheduleOrList(metadata, dispatch, isEmr, isNewNote);
  }
}

export { handleCompositionOrNoteResponse, handleCompositionUpdatedResponse };
