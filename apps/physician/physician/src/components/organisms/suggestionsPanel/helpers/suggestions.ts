import i18n from "i18next";

import { SuggestionTypes } from "../../../../constants";

const getTextBySuggestion = (suggestion: string) => {
  switch (suggestion) {
    case SuggestionTypes.PL:
      return i18n.t("components.suggestionsPanel.pl");
    case SuggestionTypes.ED:
      return i18n.t("components.suggestionsPanel.ed");
    default:
      return "";
  }
};

export { getTextBySuggestion };
