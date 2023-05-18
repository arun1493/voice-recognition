import store from "store2";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useRef } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { ScreenSize, Text, useBreakpoint } from "@suki-web/suki-ui";

import {
  StyledAddCodeButton,
  StyledButton,
  StyledCode,
  StyledCodeName,
  StyledConfirmICDCodes,
  StyledContent,
  StyledDescription,
  StyledEpicWarningText,
  StyledHeader,
  StyledText
} from "./confirmICDCodes.styled";
import { NoteSection } from "../../../../../types";
import { toastsActions } from "../../../../../redux/toast";
import { modalsActions } from "../../../../../redux/modals";
import { formatCode } from "../../../iCD10LookupModal/helpers";
import { LOCAL_STORE, TOAST_TYPES } from "../../../../../constants";
import { buttonWidth, modalWidth } from "./confirmICDCodes.constants";
import { compositionReader, diagnosisReader, sectionReader } from "../../../../../readers";
import { noteActions, selectCurrentComposition, selectMappingICDCodes } from "../../../../../redux/note";
import { getIsAllDiagnosisHasICDCode, getProblemSections, isCodeGeneric, isEpicEMR } from "../../../../../helpers";

type ConfirmICDCodesProps = {
  closeModal: VoidFunction;
  showMissingCodesModal: VoidFunction;
  setInitialStep: VoidFunction;
};

const ConfirmICDCodes: FunctionComponent<ConfirmICDCodesProps> = ({
  closeModal,
  showMissingCodesModal,
  setInitialStep
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const hasDuplicateDiagnosis = useRef(false);
  const breakpoint = useBreakpoint();
  const isXXSScreen = breakpoint === ScreenSize.XXS;

  const emrType = store.get(LOCAL_STORE.EMR_TYPE);
  const isEpicUser = isEpicEMR(emrType);

  const composition = useSelector(selectCurrentComposition);
  const mappingICDCodes = useSelector(selectMappingICDCodes);
  const problemSections = getProblemSections(composition);
  const sections = compositionReader.sections(composition);

  const isAllDiagnosisHasICDCode = getIsAllDiagnosisHasICDCode(composition);

  const icdCodesAndNamesMap = new Map<string, boolean>();

  sections?.forEach((section) => {
    const diagnosis = sectionReader.diagnosis(section);
    const isProblemSection = !!diagnosis;
    if (isProblemSection) {
      const sectionName = sectionReader.sectionName(section);
      const icdCode = diagnosisReader.icdCode(diagnosis);
      const description = diagnosisReader.icdDescription(diagnosis);
      const diagnosisKey = sectionName + ":" + icdCode + ":" + description;
      if (icdCodesAndNamesMap.has(diagnosisKey)) {
        icdCodesAndNamesMap.set(diagnosisKey, true);
        hasDuplicateDiagnosis.current = true;
      } else {
        icdCodesAndNamesMap.set(diagnosisKey, false);
      }
    }
  });

  const renderSection = (section: NoteSection) => {
    const sectionId = sectionReader.sectionId(section);
    const sectionName = sectionReader.sectionName(section);
    const diagnosis = sectionReader.diagnosis(section);
    const icdCode = diagnosisReader.icdCode(diagnosis);
    const description = diagnosisReader.icdDescription(diagnosis);
    const diagnosisKey = sectionName + ":" + icdCode + ":" + description;

    const hasCode = Boolean(description && icdCode);

    const handleProblemSelect = () => {
      batch(() => {
        dispatch(noteActions.setActiveSectionId(sectionId));
        dispatch(modalsActions.showICD10LookupModal());
      });
    };

    const hasEpicGenericWarning = isEpicUser && isCodeGeneric(mappingICDCodes[icdCode]);
    const isDiagnosisKeyDuplicated = icdCodesAndNamesMap.get(diagnosisKey) || false;

    if (isDiagnosisKeyDuplicated) {
      dispatch(toastsActions.add({ message: t("errors.s2.sameSectionNameAdded"), type: TOAST_TYPES.ERROR }));
    }

    return (
      <StyledCode isWarning={isDiagnosisKeyDuplicated} key={sectionId} onClick={handleProblemSelect}>
        <StyledContent>
          <Text cursor="pointer" isBold={true} size="md">
            {sectionName}
          </Text>
          {hasCode && (
            <Text cursor="pointer" size="sm">
              <StyledDescription>{description}</StyledDescription>
              <StyledCodeName>{formatCode(icdCode)}</StyledCodeName>
            </Text>
          )}
          {hasEpicGenericWarning && (
            <StyledEpicWarningText size="sm">
              {t("modals.signNoteModal.confirmICDCodes.epicGenericWarningText")}
            </StyledEpicWarningText>
          )}
        </StyledContent>
        {!hasCode && (
          <StyledAddCodeButton>
            <Text color="green" cursor="pointer" size="xs">
              {t("pages.note.button.addCode")}
            </Text>
          </StyledAddCodeButton>
        )}
      </StyledCode>
    );
  };

  const modalHeight = isXXSScreen ? "100vh" : "auto";
  const headerLevel = isXXSScreen ? "h6" : "h5";
  const textSize = isXXSScreen ? "lg" : "xl";

  const checkCodesAndContinue = () => {
    if (!isAllDiagnosisHasICDCode) {
      showMissingCodesModal();
    } else {
      setInitialStep();
    }
  };

  return (
    <StyledConfirmICDCodes height={modalHeight} onClose={closeModal} position="mc" width={modalWidth[breakpoint]}>
      <StyledHeader level={headerLevel}>{t("modals.signNoteModal.confirmICDCodes.title")}</StyledHeader>
      <StyledText size={textSize}>{t("modals.signNoteModal.confirmICDCodes.text")}</StyledText>
      {problemSections?.map(renderSection)}
      <StyledButton
        isDisabled={hasDuplicateDiagnosis.current}
        isPrimary={true}
        isXXSScreen={isXXSScreen}
        onClick={checkCodesAndContinue}
        width={`${buttonWidth[breakpoint]}px`}
      >
        <Text color="white" cursor="pointer" isBold={true} size={textSize}>
          {t("modals.signNoteModal.confirmICDCodes.button")}
        </Text>
      </StyledButton>
    </StyledConfirmICDCodes>
  );
};

export default ConfirmICDCodes;

export { ConfirmICDCodes };
