import i18n from "i18next";

import { IconType } from "../lib/icon";

const getTooltipContent = (icon: IconType) => {
  let content = "";
  switch (icon) {
    case "back":
      content = i18n.t("components.tooltip.back");
      break;
    case "chart":
      content = i18n.t("components.tooltip.chart");
      break;
    case "check":
      content = i18n.t("components.tooltip.finishedNote");
      break;
    case "clock":
      content = i18n.t("components.tooltip.inEnhanced");
      break;
    case "close":
      content = i18n.t("components.tooltip.close");
      break;
    case "closeCard":
      content = i18n.t("components.tooltip.closeCard");
      break;
    case "dot":
      content = i18n.t("components.tooltip.billableCode");
      break;
    case "emr":
      content = i18n.t("components.tooltip.emr");
      break;
    case "exclamation":
      content = i18n.t("components.tooltip.unfinishedNote");
      break;
    case "exclamationEMR":
      content = i18n.t("components.tooltip.unfinishedNoteInEMR");
      break;
    case "hamburgerMenu":
      content = i18n.t("components.tooltip.menu");
      break;
    case "kebabMenu":
      content = i18n.t("components.tooltip.more");
      break;
    case "listArrow":
      content = i18n.t("components.tooltip.next");
      break;
    case "listArrowReverse":
      content = i18n.t("components.tooltip.previous");
      break;
    case "listUnfinishedNote":
      content = i18n.t("components.tooltip.unfinishedNote");
      break;
    case "listSignNote":
      content = i18n.t("components.tooltip.readyToSign");
      break;
    case "newNote":
      content = i18n.t("components.tooltip.newNote");
      break;
    case "more":
      content = i18n.t("components.tooltip.more");
      break;
    case "openCard":
      content = i18n.t("components.tooltip.openCard");
      break;
    case "patients":
      content = i18n.t("components.tooltip.patients");
      break;
    case "refresh":
      content = i18n.t("components.tooltip.refresh");
      break;
    case "search":
      content = i18n.t("components.tooltip.search");
      break;
    case "undo":
      content = i18n.t("components.tooltip.undo");
      break;
  }
  return content;
};

export { getTooltipContent };
