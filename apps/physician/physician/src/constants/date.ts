import i18n from "i18next";

const DATE_FORMAT = {
  TODAY: i18n.t("date.today"),
  YESTERDAY: i18n.t("date.yesterday"),
  DDMMYYYY: "dd/MM/yyyy",
  MMDDYYYY: "MM/dd/YYY",
  MMMMDDYYYY: "MMMM do, yyyy",
  hhmmA: "hh:mm aa",
  P: "p"
};

export { DATE_FORMAT };
