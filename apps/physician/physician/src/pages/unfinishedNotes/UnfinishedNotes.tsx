import {
  Dialog,
  Icon,
  NavigationIcon,
  ScreenSize,
  StyledHeaderIconButton,
  Text,
  useBreakpointIncludes,
  useScrollTop
} from "@suki-web/suki-ui";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { batch, useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FunctionComponent, useEffect, useRef, useState } from "react";

import {
  ListContainer,
  StyledCenterContent,
  StyledContainer,
  StyledContent,
  StyledEmptyPlaceHolder,
  StyledGradient
} from "./unfinishedNotes.styled";
import { queryClient } from "../../app";
import { Composition } from "../../types";
import { useNavigatorOnline } from "../../hooks";
import { agentActions } from "../../redux/agent";
import { toastsActions } from "../../redux/toast";
import { tooltipActions } from "../../redux/tooltip";
import { selectUserDetails } from "../../redux/user";
import { ListPanel } from "../../components/organisms";
import { PageHeader } from "../../components/molecules";
import { PAGES, Pages, QUERY_NAMES, TOAST_TYPES } from "../../constants";
import { deleteComposition, getUnfinishedCompositions } from "../../api";
import { convertHTMLToText, getAge, getFullName, getRoute, isHTMLString } from "../../helpers";
import { appointmentReader, compositionReader, metadataReader, patientReader, sectionReader } from "../../readers";

const UnfinishedNotes: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [itemId, setItemId] = useState("");
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [scrollTop, scrollProps] = useScrollTop();
  const userDetails = useSelector(selectUserDetails);

  const { isOffline } = useNavigatorOnline();

  const { isRefetching, isLoading, data } = useQuery([QUERY_NAMES.UNFINISHED_NOTES], getUnfinishedCompositions, {
    enabled: !_isEmpty(userDetails),
    refetchOnMount: "always"
  });

  const compositions = _get(data, "data.results");
  const [hasScrollBar, setHasScrollBar] = useState(false);

  const unfinishedNotesCount = _get(data, "data.count");
  const unfinishedNotesCountLabel = unfinishedNotesCount ? ` (${unfinishedNotesCount})` : "";
  const isSmallScreen = useBreakpointIncludes(ScreenSize.XXS);

  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const mutation = useMutation(deleteComposition, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_NAMES.UNFINISHED_NOTES]);
    }
  });

  useEffect(() => {
    batch(() => {
      dispatch(agentActions.setBottom());
      dispatch(tooltipActions.setIsWithDelay(true));
    });
  }, []);

  const onMouseLeave = () => dispatch(tooltipActions.setIsWithDelay(true));

  const onNoteClick = (noteId: string) => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.s2.openNote"), type: TOAST_TYPES.ERROR }));
      return;
    }
    const noteRoute = getRoute(Pages.Note, { noteId });
    if (noteRoute) {
      navigate(noteRoute, { state: { from: Pages.UnfinishedNotes } });
    }
  };

  const handleDeleteComposition = (id: string, isPartialDictationComposition: boolean) => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.s2.deleteNote"), type: TOAST_TYPES.ERROR }));
      return;
    }

    if (isPartialDictationComposition) {
      dispatch(
        toastsActions.add({
          message: t("modals.deleteModal.deletePartialDictationCompositionError"),
          type: TOAST_TYPES.ERROR
        })
      );
      return;
    }
    setDeleteDialogOpen(true);
    setItemId(id);
  };

  const handleDialogCancel = () => setDeleteDialogOpen(false);

  const onDeleteItem = () => {
    mutation.mutate(itemId);
    handleDialogCancel();
  };

  const markedUpBtnProps = {
    end: { text: t("modals.deleteModal.button.delete"), onClick: onDeleteItem },
    start: { text: t("modals.deleteModal.button.cancel"), onClick: handleDialogCancel }
  };

  const isDataLoading = isRefetching || isLoading;

  useEffect(() => {
    const contentHeight = _get(contentRef, "current.clientHeight", 0);
    const listHeight = _get(listRef, "current.clientHeight", 0);
    setHasScrollBar(contentHeight < listHeight);
  }, [contentRef, isDataLoading, listRef]);

  const renderNotes = () => {
    return compositions.map((composition: Composition) => {
      const createdAt = compositionReader.createdAt(composition);
      const id = compositionReader.compositionId(composition);
      const metadata = compositionReader.metadata(composition);

      const patient = metadataReader.patient(metadata);
      const status = metadataReader.status(metadata);
      const appointment = metadataReader.appointment(metadata);
      const isPartialDictationComposition = metadataReader.partialDictationComposition(metadata);

      const dateOfService = appointmentReader.startsAt(appointment);

      const age = getAge(patientReader.personDateOfBirth(patient));
      const gender = patientReader.personGender(patient)?.charAt(0);
      const person = patientReader.person(patient);

      const fullName = person ? getFullName(person) : t("pages.unfinishedNotes.unknownPatient");

      return (
        <ListPanel
          age={age}
          createdAt={createdAt}
          dateOfService={dateOfService}
          fullName={fullName}
          gender={gender}
          isDisabled={_isEmpty(person)}
          key={id}
          onClick={() => onNoteClick(id)}
          onDelete={() => handleDeleteComposition(id, isPartialDictationComposition)}
          status={status}
          type={PAGES.UNFINISHED_NOTES}
        />
      );
    });
  };

  const renderContent = () => {
    if (isDataLoading) {
      return (
        <StyledCenterContent>
          <Icon data-cy="loader-icon" icon="loader" size="lg" />
        </StyledCenterContent>
      );
    }

    if (_isEmpty(compositions)) {
      return (
        <StyledCenterContent>
          <Text>{t("pages.unfinishedNotes.noUnfinishedNotes")}</Text>
        </StyledCenterContent>
      );
    }
    return (
      <>
        {!isDataLoading && (
          <Dialog
            buttonProps={markedUpBtnProps}
            isOpen={isDeleteDialogOpen}
            key="delete-unfinished-notes-modal"
            onClose={handleDialogCancel}
          >
            <Text>{t("modals.deleteModal.deleteNoteTitle")}</Text>
          </Dialog>
        )}
        {renderNotes()}
      </>
    );
  };

  const onBack = () => navigate(-1);

  const renderBackButton = () => {
    return (
      isSmallScreen && (
        <StyledHeaderIconButton position="left">
          <NavigationIcon icon="back" onClick={onBack} size="2xs" testId="header-back-button" />
        </StyledHeaderIconButton>
      )
    );
  };

  return (
    <StyledContainer>
      <StyledContent>
        <PageHeader
          hasBorderBottom={scrollTop > 0}
          renderActions={renderBackButton}
          title={t("pages.unfinishedNotes.title") + unfinishedNotesCountLabel}
        />
        <ListContainer {...scrollProps} hasScrollBar={hasScrollBar} onMouseLeave={onMouseLeave} ref={contentRef}>
          <div>
            <div ref={listRef}>{renderContent()}</div>
            <StyledEmptyPlaceHolder />
          </div>
        </ListContainer>
        <StyledGradient />
      </StyledContent>
    </StyledContainer>
  );
};

export { UnfinishedNotes };

export default UnfinishedNotes;
