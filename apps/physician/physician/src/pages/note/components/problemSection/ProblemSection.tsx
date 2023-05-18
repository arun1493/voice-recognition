import store from "store2";
import _isEmpty from "lodash/isEmpty";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { SectionUpdateTypes } from "@suki-web/suki-business";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Dialog, DialogButtonsProps, Icon, ScreenSize, Text, useBreakpoint } from "@suki-web/suki-ui";

import {
  compositionReader,
  diagnosisReader,
  metadataReader,
  patientReader,
  sectionReader,
  userReader
} from "../../../../readers";
import {
  LOCAL_STORE,
  NODE_NAME_BUTTON,
  NoteActionType,
  PROBLEM_STATUSES,
  QUERY_NAMES,
  SukiAgentSize
} from "../../../../constants";
import {
  StyledAddCodeButton,
  StyledCodeButton,
  StyledHeaderProblem,
  StyledIconWrapper,
  StyledNumber,
  StyledProblemSection
} from "./problemSection.styled";
import { Section } from "../section";
import { getHCCSuggestions } from "../../../../api";
import { noteActions } from "../../../../redux/note";
import { modalsActions } from "../../../../redux/modals";
import { ProblemSectionName } from "../problemSectionName";
import { selectUserDetails } from "../../../../redux/user";
import { NoteOnAction, NoteSection } from "../../../../types";
import { selectCurrentComposition } from "../../../../redux/note";
import { SuggestionsPanel } from "../../../../components/organisms";
import { getAppointmentDetails, getExistingDiagnoses } from "../../helpers";
import { formatCode } from "../../../../components/organisms/iCD10LookupModal/helpers";
import { PositionedCapturingIndicator, StyledBorder } from "../sections/sections.styled";
import { StyledCodeLabel } from "../../../../components/organisms/iCD10LookupModal/components/iCD10List/iCD10List.styled";

interface ProblemSectionProps {
  activeSectionId: string;
  agentSize: SukiAgentSize;
  compositionId: string;
  contentSelection?: any;
  isAgentActive: boolean;
  isCapturingDictation: boolean;
  isImportedFromEmr: boolean;
  isSelected: boolean;
  onAction: NoteOnAction;
  readOnly: boolean;
  scriptModules: any;
  section: NoteSection;
  sectionId: string;
  sectionIndex: number;
  sectionName: string;
}

const ProblemSection: FunctionComponent<ProblemSectionProps> = ({
  activeSectionId,
  agentSize,
  compositionId,
  contentSelection,
  isAgentActive,
  isCapturingDictation,
  isImportedFromEmr,
  isSelected,
  onAction,
  readOnly,
  scriptModules,
  section,
  sectionId,
  sectionIndex,
  sectionName
}) => {
  const { t } = useTranslation();
  const [isProblemNameFocused, setProblemNameFocused] = useState<boolean>(false);
  const { LG, XL, MD } = ScreenSize;
  const compositionData = useSelector(selectCurrentComposition);
  const problemSectionName = sectionReader.sectionName(section);
  const breakpoint = useBreakpoint();
  const dispatch = useDispatch();
  const isLargeScreen = [MD, LG, XL].includes(breakpoint);
  const textSize = isLargeScreen ? "md" : "sm";
  const userDetails = useSelector(selectUserDetails);
  const specialties = userReader.specialties(userDetails);
  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);
  const suggestionPanelRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const sections = compositionReader.sections(compositionData);
  const metadata = compositionReader.metadata(compositionData);
  const patient = metadataReader.patient(metadata);
  const patientId = patientReader.id(patient);

  const existingDiagnoses = getExistingDiagnoses(sections);

  const handleProblemSelect = () => {
    if (!isProblemNameFocused && activeSectionId !== sectionId) {
      dispatch(noteActions.setActiveSectionId(sectionId));
    }
  };

  const { emrEncounterId } = getAppointmentDetails(compositionData);

  const { data: suggestions } = useQuery(
    [QUERY_NAMES.DIAGNOSES, isEmrUser, patientId, existingDiagnoses, emrEncounterId, specialties],
    () =>
      getHCCSuggestions({
        patientId,
        existingDiagnoses,
        emrEncounterId,
        specialties
      }),
    {
      enabled: isEmrUser && !!patientId
    }
  );

  const showSuggestionsPanel = activeSectionId === sectionId && _isEmpty(problemSectionName) && !_isEmpty(suggestions);

  const handleBlur = (e: any, sectionName: string) => {
    // To avoid closing the problem suggestion panel if you click its item before the item is inserted
    const suggestionsElement = suggestionPanelRef?.current;
    if (suggestionsElement && e.relatedTarget && e.relatedTarget?.nodeName !== NODE_NAME_BUTTON) {
      return;
    }

    if (_isEmpty(sectionName) && _isEmpty(problemSectionName)) {
      onAction({
        type: NoteActionType.PROBLEM_SECTION_DELETE,
        payload: { sectionData: { ...section, name: sectionName.trim() } }
      });
      onAction({
        type: NoteActionType.SECTION_BLUR,
        payload: { forceBlur: true }
      });
    }

    if (!_isEmpty(sectionName) && sectionName !== problemSectionName) {
      setProblemNameFocused(false);
      onAction({
        type: NoteActionType.UPDATE_PROBLEM_SECTION,
        payload: { sectionData: { ...section, name: sectionName.trim() } }
      });
    }
  };

  const handleFocus = (sectionName: string) => {
    setProblemNameFocused(true);

    if (!_isEmpty(problemSectionName)) return;

    onAction({
      type: NoteActionType.PROBLEM_SECTION_FOCUS,
      payload: { sectionData: { ...section, name: sectionName.trim() } }
    });
  };

  useEffect(() => {
    if (_isEmpty(sectionName)) {
      setProblemNameFocused(true);
    } else {
      setProblemNameFocused(false);
    }
  }, [sectionName]);

  // ICD CODE LOOKUP
  const diagnosis = sectionReader.diagnosis(section);
  const icdCode = diagnosisReader.icdCode(diagnosis);

  const [isOpenedProblemDialog, setIsOpenedProblemDialog] = useState<boolean>(false);
  const [isOpenedCodeDialog, setIsOpenedCodeDialog] = useState<boolean>(false);

  const handleOpenProblem = () => setIsOpenedProblemDialog(true);
  const handleCodeChange = () => !readOnly && setIsOpenedCodeDialog(true);
  const handleCodeSelect = () => !readOnly && dispatch(modalsActions.showICD10LookupModal());
  const handleCloseProblem = () => setIsOpenedProblemDialog(false);
  const handleCloseCode = () => setIsOpenedCodeDialog(false);
  const handleChangeCode = () => {
    setIsOpenedCodeDialog(false);
    dispatch(modalsActions.showICD10LookupModal());
  };

  const updateSectionFromPanel = (newSection: NoteSection) => {
    onAction({
      type: NoteActionType.UPDATE_SECTION,
      payload: { sectionData: { ...newSection, id: activeSectionId } }
    });
  };

  const handleDeleteProblem = () => {
    onAction({
      type: NoteActionType.DELETE_PROBLEM_SECTION,
      payload: { sectionData: section }
    });
    handleCloseProblem();
  };

  const handleDeleteCode = () => {
    setIsOpenedCodeDialog(false);
    const sectionData = { ...section, updateType: SectionUpdateTypes.ONLY_DIAGNOSIS, id: activeSectionId };

    sectionData.diagnosisEntry = {
      diagnosis: {
        billable: false,
        description: "",
        icdCode: "",
        snomedCode: ""
      },
      confirmStatus: PROBLEM_STATUSES.UNCONFIRMED
    };

    onAction({
      type: NoteActionType.UPDATE_SECTION,
      payload: { sectionData }
    });
  };

  const markedUpProblemBtnProps = {
    end: { onClick: handleDeleteProblem, text: t("modals.deleteModal.button.delete") },
    start: { onClick: handleCloseProblem, text: t("modals.deleteModal.button.cancel") }
  };
  const markedUpCodeBtnProps: DialogButtonsProps = {
    middle: { btnType: "primary", onClick: handleDeleteCode, text: t("modals.iCD10LookupModal.button.remove") },
    hasCloseBtn: true,
    end: { onClick: handleChangeCode, text: t("modals.iCD10LookupModal.button.change") }
  };

  const renderCodeButton = () => {
    if (icdCode)
      return (
        <StyledCodeButton onClick={handleCodeChange} readOnly={readOnly}>
          {formatCode(icdCode)}
        </StyledCodeButton>
      );
    if (!icdCode && !readOnly)
      return (
        <StyledAddCodeButton onClick={handleCodeSelect}>
          <Text cursor="pointer" size="xs">
            {t("pages.note.button.addCode")}
          </Text>
        </StyledAddCodeButton>
      );
    return;
  };

  const renderSuggestionPanel = () => (
    <SuggestionsPanel
      ref={suggestionPanelRef}
      section={section}
      sections={sections}
      suggestions={suggestions}
      updateSection={updateSectionFromPanel}
    />
  );

  const renderProblemHeader = () => (
    <StyledHeaderProblem>
      {isSelected && <StyledBorder isCapturingDictation={isCapturingDictation} />}
      <StyledNumber>
        <Text size={textSize}>{sectionReader.subsectionIndex(section)}.</Text>
      </StyledNumber>
      <ProblemSectionName
        isActive={isProblemNameFocused}
        isAgentActive={isAgentActive}
        isCapturingDictation={isCapturingDictation}
        onBlur={handleBlur}
        onFocus={handleFocus}
        readOnly={readOnly}
        sectionId={sectionId}
        sectionName={sectionName}
      />
      {isCapturingDictation && <PositionedCapturingIndicator />}
      {sectionName && (
        <>
          {renderCodeButton()}
          {!readOnly && (
            <StyledIconWrapper>
              <Icon icon="close" onClick={handleOpenProblem} size="2xs" />
            </StyledIconWrapper>
          )}
        </>
      )}
    </StyledHeaderProblem>
  );

  const renderProblemDialog = () => (
    <Dialog
      buttonProps={markedUpProblemBtnProps}
      isOpen={isOpenedProblemDialog}
      key={`delete-problem-modal-${sectionId}`}
      onClose={handleCloseProblem}
      title={t("modals.deleteModal.deleteProblemTitle")}
    >
      <Text>{t("modals.deleteModal.deleteProblemSubtitle")}</Text>
    </Dialog>
  );

  const renderCodeDialog = () => (
    <Dialog
      buttonProps={markedUpCodeBtnProps}
      isOpen={isOpenedCodeDialog}
      key={`change-code-${sectionId}`}
      onClose={handleCloseCode}
    >
      <Text>
        {diagnosisReader.icdDescription(diagnosis)}
        <StyledCodeLabel>{formatCode(diagnosisReader.icdCode(diagnosis))}</StyledCodeLabel>
      </Text>
    </Dialog>
  );

  return (
    <>
      <StyledProblemSection isSelected={isSelected} onClick={handleProblemSelect} readOnly={readOnly}>
        {renderProblemHeader()}
        {sectionName && (
          <Section
            activeSectionId={isProblemNameFocused ? "" : activeSectionId} // Though the entire section is active we need to focus quill only when problem is not in focus
            agentSize={agentSize}
            compositionId={compositionId}
            contentSelection={contentSelection}
            isAgentActive={isAgentActive}
            isImportedFromEmr={isImportedFromEmr}
            key={`note-composition-${compositionId}-section-${sectionId}`}
            onAction={onAction}
            readOnly={readOnly}
            scriptModules={scriptModules}
            section={section}
            sectionIndex={sectionIndex}
          />
        )}
        {isOpenedProblemDialog && renderProblemDialog()}
        {isOpenedCodeDialog && renderCodeDialog()}
      </StyledProblemSection>
      {showSuggestionsPanel && renderSuggestionPanel()}
    </>
  );
};

export { ProblemSection };

export default ProblemSection;
