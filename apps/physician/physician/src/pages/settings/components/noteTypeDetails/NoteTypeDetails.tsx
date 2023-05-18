import store from "store2";
import _get from "lodash/get";
import _map from "lodash/map";
import { AxiosError } from "axios";
import _filter from "lodash/filter";
import _isEmpty from "lodash/isEmpty";
import _truncate from "lodash/truncate";
import { useClickAway } from "react-use";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { EMPTY_OBJECT, V2_DEFAULT_CONTENT } from "@suki-web/suki-business";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { Dialog, DialogButton, Icon, NavigationIcon, StyledHeaderIconButton, Text } from "@suki-web/suki-ui";

import {
  ErrorDialogs,
  LOCAL_STORE,
  Pages,
  QUERY_NAMES,
  SETTINGS_MODES,
  TOAST_DURATION,
  TOAST_TYPES
} from "../../../../constants";
import {
  StyledAddSectionButton,
  StyledAddSectionContainer,
  StyledCenter,
  StyledCenterContainer,
  StyledCenterContent,
  StyledContainer,
  StyledContent,
  StyledContentContainer,
  StyledFooter,
  StyledNameInput
} from "../../settings.styled";
import { Section } from "../section";
import { queryClient } from "../../../../app";
import { NoteSection } from "../../../../types";
import { PreviewContent } from "../previewContent";
import { sectionReader } from "../../../../readers";
import { agentActions } from "../../../../redux/agent";
import { toastsActions } from "../../../../redux/toast";
import { modalsActions } from "../../../../redux/modals";
import { getAllSections } from "../../../../api/sections";
import { PageHeader } from "../../../../components/molecules";
import { generateDestinations, getRoute } from "../../../../helpers";
import { selectIsEditMode, settingsActions } from "../../../../redux/settings";
import { getErrorMessage, isInvalidNoteTypeContent, isInvalidRule, reorder } from "../../helpers";
import { createNoteType, deleteNoteType, getNoteTypeById, updateNoteType } from "../../../../api";

type NoteTypeState = {
  isCreatingOrUpdating: boolean;
  isDragging: boolean;
  isNewSectionBeingCreated: boolean;
  isReadOnly: boolean;
  noteTypeName: string;
  sectionIdToDelete: null | number;
  sectionOptionsOpen: null | number;
  showDeleteModal: boolean;
};

const initialNoteTypeState = {
  isCreatingOrUpdating: false,
  isDragging: false,
  isNewSectionBeingCreated: false,
  isReadOnly: false,
  noteTypeName: "",
  sectionIdToDelete: null,
  sectionOptionsOpen: null,
  showDeleteModal: false
};

const renderNoteTypeSections =
  (
    isReadOnly: boolean,
    allSectionOptions: NoteSection[],
    openSectionSelection: (e: Event, blockId: number) => void,
    onUniCodeCharacters: () => void,
    sectionOptionsOpen: null | number,
    onSelectSection: (noteTypeSectionIdx: number, section: NoteSection, activeSectionId: string) => void,
    noteTypeSections: NoteSection[],
    sectionOptionsRef: any,
    handleDeleteSection: (e: React.MouseEvent<HTMLElement>, sectionId: string) => void,
    updateNoteTypeSections: (sections: NoteSection[]) => void
  ) =>
  (section: NoteSection, sectionIndex: number) => {
    const sectionContent = sectionReader.sectionContent(section);
    const sectionId = sectionReader.sectionId(section);
    const sectionName = sectionReader.sectionName(section);
    const pbcSectionFlag = sectionReader.pbcSectionFlag(section);

    return (
      <Draggable draggableId={sectionId} index={sectionIndex} key={sectionId}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Section
              allSectionOptions={allSectionOptions}
              isDraggable={snapshot?.isDragging}
              isReadOnly={isReadOnly}
              key={sectionId}
              onDeleteSection={handleDeleteSection}
              onSelectSection={onSelectSection}
              onUniCodeCharacters={onUniCodeCharacters}
              openSectionSelection={openSectionSelection}
              pbcSectionFlag={pbcSectionFlag}
              sectionContent={sectionContent}
              sectionId={sectionId}
              sectionIndex={sectionIndex}
              sectionName={sectionName}
              sectionOptionsOpen={sectionOptionsOpen}
              sectionOptionsRef={sectionOptionsRef}
              sections={noteTypeSections}
              updateSections={updateNoteTypeSections}
            />
          </div>
        )}
      </Draggable>
    );
  };

const NoteTypeDetails: FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sectionOptionsRef = useRef(null);

  const [noteTypeState, setNoteTypeState] = useState<NoteTypeState>(initialNoteTypeState);
  const [noteTypeSections, setNoteTypeSections] = useState<NoteSection[]>([]);
  const hasAnyChangesRef = useRef(false);
  const isEditMode = useSelector(selectIsEditMode);

  const {
    isCreatingOrUpdating,
    isDragging,
    isNewSectionBeingCreated,
    isReadOnly,
    noteTypeName,
    sectionIdToDelete,
    sectionOptionsOpen,
    showDeleteModal
  } = noteTypeState;

  const { noteTypeId } = useParams<{ noteTypeId: string }>();
  const isAddNewNoteType = noteTypeId === "add-note-type";
  const modalHeaderTitle = isAddNewNoteType
    ? t("modals.noteTypeDetails.addNoteType.title")
    : isEditMode
    ? t("modals.noteTypeDetails.editNoteType.title")
    : "";

  const { data, isLoading, isRefetching, refetch } = useQuery([QUERY_NAMES.NOTE_TYPES, noteTypeId], () =>
    noteTypeId && !isAddNewNoteType ? getNoteTypeById(noteTypeId) : EMPTY_OBJECT
  );

  const {
    data: allSections,
    isLoading: allSectionsLoading,
    isRefetching: allSectionsRefetch
  } = useQuery([QUERY_NAMES.SECTIONS], getAllSections);

  const noteTypeData = _get(data, "data.results[0]", EMPTY_OBJECT);
  const isLoadingData = isRefetching || isLoading;

  useEffect(() => {
    dispatch(agentActions.setIsHidden(true));

    return () => {
      dispatch(agentActions.setIsHidden(false));
    };
  }, []);

  useEffect(() => {
    if (noteTypeData) {
      const { sections, name } = noteTypeData;
      if (!_isEmpty(sections)) {
        setNoteTypeSections(sections);
      }
      setNoteTypeState({
        ...noteTypeState,
        noteTypeName: name
      });
    }

    dispatch(agentActions.setBottom());
  }, [noteTypeData, data]);

  useEffect(() => {
    if (!isEditMode) {
      hasAnyChangesRef.current = false;
      refetch();
    }
  }, [isEditMode, refetch]);

  useClickAway(sectionOptionsRef, () => {
    setNoteTypeState({
      ...noteTypeState,
      sectionOptionsOpen: null
    });
  });

  const openSectionSelection = (e: any, blockId: number) => {
    const isDeleteSectionButton = e?.target?.classList?.contains("delete-section-button");
    if (isDeleteSectionButton) {
      return;
    }
    setNoteTypeState({
      ...noteTypeState,
      sectionOptionsOpen: blockId
    });
  };

  const handleClose = (navigateToPreviewScreen: boolean) => {
    if (navigateToPreviewScreen) {
      handleEditMode(false);
    } else {
      const noteTypesRoute = getRoute(Pages.NoteTypes);
      noteTypesRoute && navigate(noteTypesRoute);
    }
  };

  const filterProblemBasedSection = (activeSectionId: string) => (section: NoteSection) =>
    sectionReader.pbcSectionFlag(section) && sectionReader.sectionId(section) !== activeSectionId;

  const hasMoreThanOneProblemSection = (sectionList: NoteSection[], activeSectionId: string) => {
    return _filter(sectionList, filterProblemBasedSection(activeSectionId)).length === 1;
  };

  const onSelectSection = (noteTypeSectionIdx: number, section: NoteSection, activeSectionId: string) => {
    const sectionList = [...noteTypeSections];
    const newSection = {
      id: section.id,
      name: section.name,
      navigationKeywords: [],
      content: V2_DEFAULT_CONTENT,
      pbcSectionFlag: section.pbcSectionFlag,
      plainText: ""
    };

    if (newSection.pbcSectionFlag) {
      if (hasMoreThanOneProblemSection(sectionList, activeSectionId)) {
        dispatch(
          toastsActions.add({
            message: t("modals.noteTypeDetails.rules.onlyOnePbcAllowed"),
            type: TOAST_TYPES.ERROR
          })
        );
        return;
      }
    }

    sectionList[noteTypeSectionIdx] = newSection;
    setNoteTypeSections(sectionList);
    setNoteTypeState({
      ...noteTypeState,
      sectionOptionsOpen: null,
      isNewSectionBeingCreated: false
    });
  };

  const handleAddSection = () => {
    const sectionList = [...noteTypeSections];
    const newSection: NoteSection = {
      id: "new-section",
      name: "n/a",
      navigationKeywords: [],
      content: V2_DEFAULT_CONTENT,
      pbcSectionFlag: false,
      plainText: ""
    };

    sectionList.push(newSection);

    setNoteTypeSections(sectionList);
    setNoteTypeState({
      ...noteTypeState,
      sectionOptionsOpen: sectionList.length - 1,
      isNewSectionBeingCreated: true
    });
  };

  const handleStartDrag = () => {
    setNoteTypeState({
      ...noteTypeState,
      isDragging: true
    });
  };

  const handleDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(noteTypeSections, result?.source?.index, result?.destination?.index);

    setNoteTypeSections(items);
    setNoteTypeState({
      ...noteTypeState,
      isDragging: false
    });
  };

  const handleNoteTypeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    hasAnyChangesRef.current = true;
    const noteTypeName = e.target.value;
    if (noteTypeName?.length > 255) {
      dispatch(
        toastsActions.add({
          message: t("modals.noteTypeDetails.editNoteType.mutationResponse.invalidLength"),
          type: TOAST_TYPES.ERROR
        })
      );
      setNoteTypeState({
        ...noteTypeState,
        noteTypeName: _truncate(noteTypeName, { length: 255, omission: "" })
      });
      return;
    }

    setNoteTypeState({
      ...noteTypeState,
      noteTypeName: noteTypeName
    });
  };

  const handleMutationResponse = (isCreate: boolean, isDelete = false) => {
    let responseTitle = t("modals.noteTypeDetails.editNoteType.mutationResponse.title");
    let responseError = t("modals.noteTypeDetails.editNoteType.mutationResponse.error");

    if (isCreate) {
      responseTitle = t("modals.noteTypeDetails.addNoteType.mutationResponse.title");
      responseError = t("modals.noteTypeDetails.addNoteType.mutationResponse.error");
    }

    if (isDelete) {
      responseTitle = t("modals.noteTypeDetails.deleteNoteType.mutationResponse.title");
      responseError = t("modals.noteTypeDetails.deleteNoteType.mutationResponse.error");
    }

    return {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_NAMES.NOTE_TYPES]);
        dispatch(
          toastsActions.add({
            message: responseTitle,
            type: TOAST_TYPES.CONFIRMATION
          })
        );
        handleClose(!isCreate && !isDelete);
      },
      onError: (error: AxiosError) => {
        const errorMessage = getErrorMessage(error);
        dispatch(
          toastsActions.add({
            message: errorMessage || responseError,
            type: TOAST_TYPES.ERROR,
            duration: TOAST_DURATION.MEDIUM
          })
        );
        if (_isEmpty(errorMessage)) {
          handleClose(!isCreate && !isDelete);
        }
      },
      onSettled: () => {
        setNoteTypeState({
          ...noteTypeState,
          isCreatingOrUpdating: false,
          isReadOnly: false
        });
      }
    };
  };

  const createMutation = useMutation(createNoteType, handleMutationResponse(true));
  const updateMutation = useMutation(updateNoteType, handleMutationResponse(false));
  const deleteMutation = useMutation(deleteNoteType, handleMutationResponse(false, true));

  const filterNewSection = (section: NoteSection) => sectionReader.sectionId(section) !== "new-section";

  const handleCreateNoteType = () => {
    const isError = isInvalidRule(t, dispatch, noteTypeName, noteTypeSections, isNewSectionBeingCreated);

    if (!isError) {
      setNoteTypeState({
        ...noteTypeState,
        isCreatingOrUpdating: true,
        isReadOnly: true
      });

      const userId = store.get(LOCAL_STORE.USER_ID);
      const sections = _filter(noteTypeSections, filterNewSection);

      createMutation.mutate({
        userId: userId,
        name: noteTypeName,
        destinations: generateDestinations(),
        sections: sections,
        source: "USER"
        // TODO[Rohit]: Not sure what this is required for but may be for EMR's => emrNoteType: newEmrNoteType,
      });
    }
  };

  const handleUpdateNoteType = () => {
    const isError = isInvalidRule(t, dispatch, noteTypeName, noteTypeSections, isNewSectionBeingCreated);

    if (!isError) {
      setNoteTypeState({
        ...noteTypeState,
        isCreatingOrUpdating: true,
        isReadOnly: true
      });

      const userId = store.get(LOCAL_STORE.USER_ID);
      const sections = _filter(noteTypeSections, filterNewSection);

      updateMutation.mutate({
        id: noteTypeId,
        userId: userId,
        name: noteTypeName,
        destinations: generateDestinations(),
        sections: sections,
        source: "USER"
        // TODO[Rohit]: Not sure what this is required for but may be for EMR's => emrNoteType: newEmrNoteType,
      });
    }
  };

  const handleSaveNoteType = () => {
    if (isInvalidNoteTypeContent(noteTypeSections)) {
      const message = t("modals.noteTypeDetails.mutationResponse.errors.longSectionContent");
      dispatch(toastsActions.add({ message, type: TOAST_TYPES.ERROR }));
      return;
    }
    return isAddNewNoteType ? handleCreateNoteType() : handleUpdateNoteType();
  };

  const handleDialogCancel = () => {
    setNoteTypeState({
      ...noteTypeState,
      showDeleteModal: false,
      sectionIdToDelete: null
    });
  };

  const handleDeleteNoteType = () => {
    deleteMutation.mutate(noteTypeId as string);
  };

  const handleDeleteNoteTypeSection = () => {
    typeof sectionIdToDelete === "number" && deleteSectionAtIndex(sectionIdToDelete);
  };

  const markedUpBtnProps = {
    end: { onClick: handleDeleteNoteTypeSection, text: t("modals.deleteModal.button.delete") },
    hasCloseBtn: false,
    start: { onClick: handleDialogCancel, text: t("modals.deleteModal.button.cancel") }
  };

  const deleteSectionAtIndex = (sectionId: number) => {
    const sectionList = [...noteTypeSections];
    const deletedSection = sectionList.splice(sectionId, 1);

    setNoteTypeSections(sectionList);

    let newState = {
      ...noteTypeState,
      showDeleteModal: false
    };

    if (isNewSectionBeingCreated && deletedSection?.[0]?.id === "new-section") {
      newState = {
        ...newState,
        isNewSectionBeingCreated: false
      };
    }

    setNoteTypeState(newState);
  };

  const handleDeleteSection = (e: React.MouseEvent<HTMLElement>, sectionId: string) => {
    e.stopPropagation();
    const sectionList = [...noteTypeSections];
    const idxToDelete = sectionList.findIndex((section) => section.id === sectionId);
    const sectionToDelete = sectionList[idxToDelete];
    const contentToDelete = sectionToDelete?.content || "";

    if (V2_DEFAULT_CONTENT !== contentToDelete) {
      setNoteTypeState({
        ...noteTypeState,
        showDeleteModal: true,
        sectionIdToDelete: idxToDelete
      });
    } else {
      deleteSectionAtIndex(idxToDelete);
    }
  };

  const updateNoteTypeSections = (sections: NoteSection[]) => {
    if (isInvalidNoteTypeContent(sections)) {
      const message = t("modals.noteTypeDetails.mutationResponse.errors.longSectionContent");
      dispatch(toastsActions.add({ message, type: TOAST_TYPES.ERROR }));
    }
    hasAnyChangesRef.current = true;
    if (sectionReader.sectionContent(sections[0]) !== sectionReader.sectionContent(noteTypeSections[0])) {
      setNoteTypeSections(sections);
    }
  };

  const handleEditMode = (isEditMode: boolean) => {
    dispatch(settingsActions.setEditMode(isEditMode));
  };

  const onClose = () => {
    if (hasAnyChangesRef.current) {
      dispatch(modalsActions.showErrorModal({ type: ErrorDialogs.UNSAVED_CHANGES, isAddNew: isAddNewNoteType }));
      return;
    }

    if (isEditMode && !isAddNewNoteType) {
      handleEditMode(false);
    } else {
      navigate(-1);
    }
  };

  const renderCloseButton = () => {
    return (
      <StyledHeaderIconButton position="right">
        <NavigationIcon icon="close" onClick={onClose} size="xs" testId="header-close-button" />
      </StyledHeaderIconButton>
    );
  };

  const handleUniCodeCharacters = () => {
    // Do not remove commented lines
    // [Rohit]: https://sukiai.atlassian.net/browse/DIGI-1457
    // dispatch(
    //   toastsActions.add({
    //     message: t("components.quillEditor.unicodeFormatting.message"),
    //     type: TOAST_TYPES.CONFIRMATION
    //   })
    // );
  };

  if (_isEmpty(noteTypeData) && !isAddNewNoteType) {
    return (
      <StyledContainer>
        <StyledContent>
          <PageHeader renderActions={renderCloseButton} title={modalHeaderTitle} />
          <StyledCenterContent>
            <Icon icon="loader" size="lg" />
          </StyledCenterContent>
        </StyledContent>
      </StyledContainer>
    );
  }

  if (!isLoadingData && !isAddNewNoteType && !isEditMode) {
    return (
      <StyledContainer>
        <StyledContent>
          <PageHeader renderActions={renderCloseButton} title={modalHeaderTitle} />
          <PreviewContent
            allSectionOptions={allSections}
            isActionDisabled={!noteTypeData.userId}
            name={noteTypeName}
            onDelete={handleDeleteNoteType}
            onEdit={handleEditMode}
            sections={noteTypeSections}
            type={SETTINGS_MODES.NOTE_TYPES}
          />
        </StyledContent>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledContent>
        <PageHeader renderActions={renderCloseButton} title={modalHeaderTitle} />

        {isLoadingData || allSectionsLoading ? (
          <StyledCenterContent>
            <Icon icon="loader" size="lg" />
          </StyledCenterContent>
        ) : (
          <>
            <StyledContentContainer>
              <StyledCenter>
                <StyledNameInput
                  hasBorder={true}
                  isDisabled={isReadOnly}
                  onChange={handleNoteTypeNameChange}
                  placeholder={t("modals.noteTypeDetails.noteTypeInputPlaceholder")}
                  type="text"
                  value={noteTypeName}
                />
                {/*
                  TODO[Rohit]: Replace it with a tooltip at later point
                  <StyledNameTip>{t("modals.noteTypeDetails.noteTypeInputNameTip")}</StyledNameTip>
                */}
              </StyledCenter>

              <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleStartDrag}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{ paddingBottom: isDragging ? 200 : 0 }}
                    >
                      {!_isEmpty(noteTypeSections) &&
                        _map(
                          noteTypeSections,
                          renderNoteTypeSections(
                            isReadOnly,
                            allSections,
                            openSectionSelection,
                            handleUniCodeCharacters,
                            sectionOptionsOpen,
                            onSelectSection,
                            noteTypeSections,
                            sectionOptionsRef,
                            handleDeleteSection,
                            updateNoteTypeSections
                          )
                        )}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>

              {!isDragging && !isNewSectionBeingCreated && !isReadOnly && (
                <StyledAddSectionContainer>
                  <StyledAddSectionButton onClick={handleAddSection}>
                    {t("modals.noteTypeDetails.addSection")}
                  </StyledAddSectionButton>
                </StyledAddSectionContainer>
              )}
            </StyledContentContainer>

            <StyledFooter>
              <StyledCenterContainer>
                <DialogButton
                  disabled={isCreatingOrUpdating}
                  onClick={handleSaveNoteType}
                  text={t("modals.noteTypeDetails.save")}
                >
                  {t("modals.noteTypeDetails.save")}
                </DialogButton>
                {isCreatingOrUpdating && <Icon icon="loader" size="sm" />}
              </StyledCenterContainer>
            </StyledFooter>
          </>
        )}
      </StyledContent>

      {!isLoading && !allSectionsLoading && !isRefetching && !allSectionsRefetch && (
        <Dialog
          buttonProps={markedUpBtnProps}
          isOpen={showDeleteModal}
          key="delete-note-type-section"
          onClose={handleDialogCancel}
        >
          <Text>{t("modals.noteTypeDetails.deleteNoteType.title")}</Text>
        </Dialog>
      )}
    </StyledContainer>
  );
};

export { NoteTypeDetails };

export default NoteTypeDetails;
