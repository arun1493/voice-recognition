import store from "store2";
import _get from "lodash/get";
import _map from "lodash/map";
import {
  ClientEmitEventTypes,
  EMPTY_OBJECT,
  isEmptySectionContent,
  Paths,
  V2_DEFAULT_CONTENT
} from "@suki-web/suki-business";
import { AxiosError } from "axios";
import _isEqual from "lodash/isEqual";
import _isEmpty from "lodash/isEmpty";
import _truncate from "lodash/truncate";
import { useClickAway } from "react-use";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { batch, useDispatch, useSelector } from "react-redux";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { DialogButton, Icon, NavigationIcon, StyledHeaderIconButton } from "@suki-web/suki-ui";

import {
  ANY_SECTION,
  ErrorDialogs,
  LOCAL_STORE,
  QUERY_NAMES,
  SETTINGS_MODES,
  TOAST_TYPES,
  USER_REQUEST_TYPE
} from "../../../constants";
import {
  StyledCenter,
  StyledCenterContainer,
  StyledCenterContent,
  StyledContentContainer,
  StyledFooter,
  StyledNameInput
} from "./scriptDetails.styled";
import { queryClient } from "../../../app";
import { useSocket } from "../../../socket";
import { PageHeader } from "../../molecules";
import { NoteSection } from "../../../types";
import { sectionReader } from "../../../readers";
import { agentActions } from "../../../redux/agent";
import { toastsActions } from "../../../redux/toast";
import { modalsActions } from "../../../redux/modals";
import { getAllSections } from "../../../api/sections";
import { Section } from "../../../pages/settings/components/section";
import { compositionReader, metadataReader } from "../../../readers";
import { selectIsEditMode, settingsActions } from "../../../redux/settings";
import { getErrorMessage, isInvalidRule } from "../../../pages/settings/helpers";
import { PreviewContent } from "../../../pages/settings/components/previewContent";
import { selectActiveSectionId, selectCurrentComposition } from "../../../redux/note";
import { createScript, deleteScript, getScriptById, updateScript } from "../../../api";

type ScriptState = {
  isCreatingOrUpdating: boolean;
  isReadOnly: boolean;
  scriptName: string;
  sectionOptionsOpen: null | number;
};

const initialScriptState = {
  isCreatingOrUpdating: false,
  isReadOnly: false,
  scriptName: "",
  sectionOptionsOpen: null
};

interface ScriptDetailsProps {
  scriptId: string;
  isEmbedded?: boolean;
}

const renderScriptSection =
  (
    isAddNewScript: boolean,
    isReadOnly: boolean,
    allSectionOptions: NoteSection[],
    onUniCodeCharacters: () => void,
    openSectionSelection: (e: Event, blockId: number) => void,
    sectionOptionsOpen: null | number,
    onSelectSection: (noteTypeSectionIdx: number, section: NoteSection, sectionContent: string) => void,
    scriptSections: NoteSection[],
    sectionOptionsRef: any,
    updateScriptSections: (sections: NoteSection[]) => void
  ) =>
  (section: NoteSection, sectionIndex: number) => {
    const { content = "", name = "", sectionId = "" } = section;

    const foundSection = allSectionOptions?.find((section) => section.id === sectionId);
    const sectionName = foundSection?.name || name;

    return (
      <Section
        allSectionOptions={allSectionOptions}
        isAddNewScript={isAddNewScript}
        isNoteType={false}
        isReadOnly={isReadOnly}
        key={sectionId}
        onSelectSection={onSelectSection}
        onUniCodeCharacters={onUniCodeCharacters}
        openSectionSelection={openSectionSelection}
        sectionContent={content}
        sectionId={sectionId}
        sectionIndex={sectionIndex}
        sectionName={sectionName}
        sectionOptionsOpen={sectionOptionsOpen}
        sectionOptionsRef={sectionOptionsRef}
        sections={scriptSections}
        updateSections={updateScriptSections}
      />
    );
  };

const ScriptDetails: FunctionComponent<ScriptDetailsProps> = ({ scriptId, isEmbedded = false }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { transmitEvent } = useSocket();

  const sectionOptionsRef = useRef(null);
  const hasAnyChangesRef = useRef(false);

  const [scriptState, setScriptState] = useState<ScriptState>(initialScriptState);
  const [scriptSections, setScriptSections] = useState<NoteSection[]>([
    {
      content: "",
      id: "",
      name: t("modals.scriptDetails.selectSection"),
      navigationKeywords: [],
      pbcSectionFlag: false,
      plainText: "",
      sectionId: ""
    }
  ]);

  const [allSections, setAllSections] = useState<NoteSection[]>([]);
  const composition = useSelector(selectCurrentComposition);
  const activeSectionId = useSelector(selectActiveSectionId);
  const isEditMode = useSelector(selectIsEditMode);

  const metadata = compositionReader.metadata(composition);
  const compositionId = compositionReader.compositionId(composition);
  const noteTypeId = metadataReader.noteTypeId(metadata);
  const isNotePage = location.pathname.includes(Paths.Note);

  const onClose = () => {
    if (hasAnyChangesRef.current) {
      dispatch(
        modalsActions.showErrorModal({
          isAddNew: isAddNewScript,
          type: ErrorDialogs.UNSAVED_CHANGES
        })
      );
      return;
    }

    if (isEditMode && !isAddNewScript) {
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

  const deleteScriptMutation = useMutation(deleteScript, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_NAMES.SCRIPTS]);
      batch(() => {
        dispatch(
          toastsActions.add({
            message: t("modals.scriptDetails.scriptDeletingSuccess"),
            type: TOAST_TYPES.CONFIRMATION
          })
        );
        handleClose(false);
      });
    },
    onError: () => {
      dispatch(toastsActions.add({ message: t("modals.scriptDetails.scriptDeletingFailed"), type: TOAST_TYPES.ERROR }));
    }
  });

  const { isCreatingOrUpdating, isReadOnly, scriptName, sectionOptionsOpen } = scriptState;

  const isAddNewScript = scriptId === "add-script";
  const modalHeaderTitle = isAddNewScript
    ? t("modals.scriptDetails.addScript.title")
    : isEditMode
    ? t("modals.scriptDetails.editScript.title")
    : "";

  const { data, isLoading, isRefetching, refetch } = useQuery([QUERY_NAMES.SCRIPTS, scriptId], () =>
    scriptId && !isAddNewScript ? getScriptById(scriptId) : EMPTY_OBJECT
  );

  const { data: allSectionsData, isLoading: allSectionsLoading } = useQuery([QUERY_NAMES.SECTIONS], getAllSections);

  const scriptData = _get(data, "data.results[0]", EMPTY_OBJECT);

  const isLoadingData = isRefetching || isLoading;

  useEffect(() => {
    dispatch(agentActions.setIsHidden(true));

    return () => {
      dispatch(agentActions.setIsHidden(false));
      dispatch(settingsActions.setEditMode(false));
    };
  }, []);

  useEffect(() => {
    if (!_isEmpty(scriptData)) {
      const { blocks, tags } = scriptData;
      const scriptName = _get(tags, "[0].name.value", "");
      if (!_isEmpty(blocks)) {
        setScriptSections(blocks);
      }
      setScriptState({
        ...scriptState,
        scriptName: scriptName
      });
    }

    const anySection = {
      ...ANY_SECTION,
      name: t("modals.scriptDetails.anySectionDictation")
    };

    if (!_isEmpty(allSectionsData)) {
      setAllSections([anySection, ...allSectionsData]);
    }

    dispatch(agentActions.setBottom());
  }, [scriptData, allSectionsData, data]);

  useClickAway(sectionOptionsRef, () => {
    setScriptState({
      ...scriptState,
      sectionOptionsOpen: null
    });
  });

  useEffect(() => {
    if (!isEditMode) {
      hasAnyChangesRef.current = false;
      refetch();
    }
  }, [isEditMode]);

  const openSectionSelection = (e: any, blockId: number) => {
    const isDeleteSectionButton = e?.target?.classList?.contains("delete-section-button");
    if (isDeleteSectionButton) {
      return;
    }
    setScriptState({
      ...scriptState,
      sectionOptionsOpen: blockId
    });
  };

  const handleClose = (navigateToPreviewScreen: boolean) => {
    if (isNotePage && !navigateToPreviewScreen) {
      dispatch(modalsActions.hideScriptDetailsModal());
      dispatch(modalsActions.showScriptsListModal());
    } else if (navigateToPreviewScreen) {
      handleEditMode(false);
    } else {
      navigate(-1);
    }
  };

  const handleDeleteScript = () => {
    deleteScriptMutation.mutate(scriptId);
  };

  const onSelectSection = (scriptSectionIdx: number, section: NoteSection, sectionContent: string) => {
    const sectionList = [...scriptSections];
    sectionList[scriptSectionIdx] = {
      id: "",
      sectionId: section.id,
      name: section.name,
      navigationKeywords: [],
      content: sectionContent || V2_DEFAULT_CONTENT,
      pbcSectionFlag: section.pbcSectionFlag,
      plainText: ""
    };
    setScriptSections(sectionList);
    setScriptState({
      ...scriptState,
      sectionOptionsOpen: null
    });
  };

  const handleScriptNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    hasAnyChangesRef.current = true;
    const scriptName = e.target.value;
    if (scriptName?.length > 255) {
      dispatch(
        toastsActions.add({
          message: t("modals.scriptDetails.editScript.mutationResponse.invalidLength"),
          type: TOAST_TYPES.ERROR
        })
      );
      setScriptState({
        ...scriptState,
        scriptName: _truncate(scriptName, { length: 255, omission: "" })
      });
      return;
    }

    setScriptState({
      ...scriptState,
      scriptName: scriptName
    });
  };

  const handleMutationResponse = (isCreate: boolean) => {
    let responseTitle = t("modals.scriptDetails.editScript.mutationResponse.title");
    let responseError = t("modals.scriptDetails.editScript.mutationResponse.error");

    if (isCreate) {
      responseTitle = t("modals.scriptDetails.addScript.mutationResponse.title");
      responseError = t("modals.scriptDetails.addScript.mutationResponse.error");
    }

    return {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_NAMES.SCRIPTS]);
        dispatch(
          toastsActions.add({
            message: responseTitle,
            type: TOAST_TYPES.CONFIRMATION
          })
        );
        handleClose(!isCreate);
      },
      onError: (error: AxiosError) => {
        const errorMessage = getErrorMessage(error, true);
        dispatch(
          toastsActions.add({
            message: errorMessage || responseError,
            type: TOAST_TYPES.ERROR
          })
        );
        if (_isEmpty(errorMessage)) {
          handleClose(!isCreate);
        }
      },
      onSettled: () => {
        setScriptState({
          ...scriptState,
          isCreatingOrUpdating: false,
          isReadOnly: false
        });
      }
    };
  };

  const createMutation = useMutation(createScript, handleMutationResponse(true));
  const updateMutation = useMutation(updateScript, handleMutationResponse(false));

  const handleCreateScript = () => {
    const isError = isInvalidRule(t, dispatch, scriptName, scriptSections, false, true);

    if (isError) return;

    const emptySections = scriptSections.some((section: NoteSection | any) => {
      const a = JSON.parse(section.content);
      const b = JSON.parse(V2_DEFAULT_CONTENT);
      return isEmptySectionContent(a) || _isEqual(a, b);
    });

    if (emptySections) {
      dispatch(
        toastsActions.add({
          message: t("modals.scriptDetails.rules.addContent"),
          type: TOAST_TYPES.ERROR
        })
      );
    }

    if (!isError && !emptySections) {
      setScriptState({
        ...scriptState,
        isCreatingOrUpdating: true,
        isReadOnly: true
      });

      const userId = store.get(LOCAL_STORE.USER_ID);
      const organizationId = store.get(LOCAL_STORE.ORGANIZATION_ID);
      createMutation.mutate({
        blocks: scriptSections,
        name: scriptName,
        organizationId: organizationId,
        source: "USER",
        tags: [{ name: { value: scriptName }, type: "MACRO_NAME" }],
        userId: userId
      });
    }
  };

  const handleUpdateScript = () => {
    const isError = isInvalidRule(t, dispatch, scriptName, scriptSections, false, true);

    const emptySections = scriptSections.some((section: any) => {
      const a = JSON.parse(section.content);
      const b = JSON.parse(V2_DEFAULT_CONTENT);
      return isEmptySectionContent(a) || _isEqual(a, b);
    });

    if (emptySections) {
      dispatch(
        toastsActions.add({
          message: t("modals.scriptDetails.rules.addContent"),
          type: TOAST_TYPES.ERROR
        })
      );
    }

    if (!isError && !emptySections) {
      setScriptState({
        ...scriptState,
        isCreatingOrUpdating: true,
        isReadOnly: true
      });

      const { tags } = scriptData;
      const newTags = [...tags];
      newTags[0].name.value = scriptName;

      const userId = store.get(LOCAL_STORE.USER_ID);
      updateMutation.mutate({
        blocks: scriptSections,
        id: scriptId,
        source: "USER",
        tags: newTags,
        userId: userId
      });
    }
  };

  const handleSaveScript = () => {
    return isAddNewScript ? handleCreateScript() : handleUpdateScript();
  };

  const updateScriptSections = (sections: NoteSection[]) => {
    hasAnyChangesRef.current = true;
    if (sectionReader.sectionContent(sections[0]) !== sectionReader.sectionContent(scriptSections[0])) {
      setScriptSections(sections);
    }
  };

  const handleEditMode = (isEditMode: boolean) => {
    dispatch(settingsActions.setEditMode(isEditMode));
  };

  const handleInsert = () => {
    transmitEvent({
      type: ClientEmitEventTypes.USER_REQUEST,
      data: {
        compositionId,
        notetypeId: noteTypeId,
        scriptId,
        sectionId: activeSectionId,
        requestType: USER_REQUEST_TYPE.CLICK_INSERT_SCRIPT
      }
    });
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

  if (_isEmpty(scriptData) && !isAddNewScript) {
    return (
      <>
        {!isEmbedded && <PageHeader renderActions={renderCloseButton} title={modalHeaderTitle} />}
        <StyledCenterContent>
          <Icon icon="loader" size="lg" />
        </StyledCenterContent>
      </>
    );
  }

  if (!isLoadingData && !isAddNewScript && !isEditMode) {
    return (
      <>
        {!isEmbedded && <PageHeader renderActions={renderCloseButton} title={modalHeaderTitle} />}
        <PreviewContent
          allSectionOptions={allSections}
          isActionDisabled={!scriptData.userId}
          isEmbedded={isEmbedded}
          name={scriptName}
          onDelete={handleDeleteScript}
          onEdit={handleEditMode}
          onInsert={handleInsert}
          sections={scriptSections}
          type={SETTINGS_MODES.SCRIPTS}
        />
      </>
    );
  }

  return (
    <>
      {!isEmbedded && <PageHeader renderActions={renderCloseButton} title={modalHeaderTitle} />}

      {isLoadingData || allSectionsLoading ? (
        <StyledCenterContent>
          <Icon icon="loader" size="lg" />
        </StyledCenterContent>
      ) : (
        <>
          <StyledContentContainer isEmbedded={isEmbedded}>
            <StyledCenter>
              <StyledNameInput
                isDisabled={isReadOnly}
                onChange={handleScriptNameChange}
                placeholder={t("modals.scriptDetails.scriptInputPlaceholder")}
                type="text"
                value={scriptName}
              />
              {/*
                  TODO[Rohit]: Replace it with a tooltip at later point
                  <StyledNameTip>{t("modals.scriptDetails.scriptInputNameTip")}</StyledNameTip>
                */}
            </StyledCenter>
            {!_isEmpty(scriptSections) &&
              _map(
                scriptSections,
                renderScriptSection(
                  isAddNewScript,
                  isReadOnly,
                  allSections,
                  handleUniCodeCharacters,
                  openSectionSelection,
                  sectionOptionsOpen,
                  onSelectSection,
                  scriptSections,
                  sectionOptionsRef,
                  updateScriptSections
                )
              )}
          </StyledContentContainer>

          <StyledFooter>
            <StyledCenterContainer>
              <DialogButton
                disabled={isCreatingOrUpdating}
                onClick={handleSaveScript}
                text={t("modals.noteTypeDetails.save")}
              >
                {t("modals.noteTypeDetails.save")}
              </DialogButton>
              {isCreatingOrUpdating && <Icon icon="loader" size="sm" />}
            </StyledCenterContainer>
          </StyledFooter>
        </>
      )}
    </>
  );
};

export { ScriptDetails };

export default ScriptDetails;
