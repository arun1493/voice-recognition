import store from "store2";
import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Header, Text } from "@suki-web/suki-ui";
import { SectionUpdateTypes } from "@suki-web/suki-business";
import { ForwardedRef, forwardRef, FunctionComponent } from "react";

import {
  StyledCodeLabel,
  StyledContent,
  StyledDescriptions,
  StyledHeader,
  StyledItem,
  StyledPanel
} from "./suggestionsPanel.styled";
import { getTextBySuggestion } from "./helpers";
import { diagnosisReader } from "../../../readers";
import { getEdgCodes, logger } from "../../../api";
import { toastsActions } from "../../../redux/toast";
import { formatCode } from "../iCD10LookupModal/helpers";
import { getDiagnosisNames } from "../../../pages/note/helpers";
import { isEpicEMR, saveEDGMappingCodes } from "../../../helpers";
import { Diagnosis, NoteSection, Suggestion } from "../../../types";
import { LOCAL_STORE, PROBLEM_STATUSES, TOAST_TYPES } from "../../../constants";

interface SuggestionsPanelProps {
  ref: ForwardedRef<HTMLDivElement>;
  section: NoteSection;
  sections: NoteSection[];
  suggestions: Array<Suggestion> | undefined;
  updateSection: (newSection: NoteSection) => void;
}

const SuggestionsPanel: FunctionComponent<SuggestionsPanelProps> = forwardRef(
  ({ section, sections, suggestions, updateSection }, ref: ForwardedRef<HTMLDivElement>) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleAddSuggestion = (diagnosis: Diagnosis) => {
      const newSection = { ...section };
      const billable = diagnosisReader.billable(diagnosis);
      const icdCode = diagnosisReader.icdCode(diagnosis);
      const icdDescription = diagnosisReader.icdDescription(diagnosis);
      const snomedCode = diagnosisReader.snomedCode(diagnosis);
      const problemLabel = diagnosisReader.problemLabel(diagnosis);

      if (!_isEmpty(problemLabel) && getDiagnosisNames(sections).includes(problemLabel)) {
        dispatch(toastsActions.add({ message: t("errors.s2.sameSectionNameAdded"), type: TOAST_TYPES.ERROR }));
        return;
      }

      newSection.name = problemLabel;
      newSection.diagnosisEntry = {
        diagnosis: {
          billable,
          icdDescription,
          icdCode,
          snomedCode,
          problemLabel
        },
        confirmStatus: PROBLEM_STATUSES.CONFIRMED
      };
      newSection.updateType = SectionUpdateTypes.WHOLE;
      newSection.id = section.id;
      updateSection(newSection);

      const emrType = store.get(LOCAL_STORE.EMR_TYPE);
      const isEpic = isEpicEMR(emrType);
      if (isEpic) {
        getEdgCodes(icdCode)
          .then((edgData) => saveEDGMappingCodes(dispatch, icdCode, edgData))
          .catch((error) => logger.error({ message: "Failed to fetch EDG codes", payload: error }));
      }
    };

    const renderItems = (suggestion: Suggestion) => {
      const { diagnosis, suggestionType } = suggestion;
      const icdCode = diagnosisReader.icdCode(diagnosis);
      const snomedDescription = diagnosisReader.snomedDescription(diagnosis);
      const problemLabel = diagnosisReader.problemLabel(diagnosis);

      return (
        <StyledItem key={icdCode} onClick={() => handleAddSuggestion(diagnosis)}>
          <StyledDescriptions>
            <Text cursor="pointer" isBold={true}>
              {problemLabel || snomedDescription}
            </Text>
            <Text color="green" cursor="pointer" size="xs">
              {getTextBySuggestion(suggestionType)}
            </Text>
          </StyledDescriptions>
          <StyledCodeLabel>{formatCode(icdCode)}</StyledCodeLabel>
        </StyledItem>
      );
    };

    return (
      <StyledPanel ref={ref} tabIndex={0}>
        <StyledHeader>
          <Header level="h6">{t("components.suggestionsPanel.title")}</Header>
        </StyledHeader>
        <StyledContent>{_map(suggestions, renderItems)}</StyledContent>
      </StyledPanel>
    );
  }
);

export { SuggestionsPanel };

export default SuggestionsPanel;
