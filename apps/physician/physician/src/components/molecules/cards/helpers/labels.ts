import i18n from "i18next";

import { CardType, VITAL_SIGNS } from "../../../../constants";

const getCardTitle = (cardType: string) => {
  switch (cardType) {
    case CardType.ALLERGIES:
      return i18n.t("pages.note.cards.titles.allergies");
    case CardType.CURRENT_MEDICATION:
      return i18n.t("pages.note.cards.titles.medication");
    case CardType.PAST_MEDICAL_HISTORY:
    case CardType.PAST_MEDICAL_HISTORY_SHOW_ME:
      return i18n.t("pages.note.cards.titles.medicalHistory");
    case CardType.PAST_SURGICAL_HISTORY:
    case CardType.PAST_SURGICAL_HISTORY_SHOW_ME:
      return i18n.t("pages.note.cards.titles.surgicalHistory");
    case CardType.VITALS:
      return i18n.t("pages.note.cards.titles.vitals");
    default:
      return "";
  }
};

const getVitalSign = (sign: string) => {
  switch (sign) {
    case VITAL_SIGNS.BLOOD_PRESSURE:
      return i18n.t("pages.note.cards.vitalSigns.bloodPressure");
    case VITAL_SIGNS.BMI:
      return i18n.t("pages.note.cards.vitalSigns.bmi");
    case VITAL_SIGNS.HEIGHT:
      return i18n.t("pages.note.cards.vitalSigns.height");
    case VITAL_SIGNS.PULSE:
      return i18n.t("pages.note.cards.vitalSigns.pulse");
    case VITAL_SIGNS.WEIGHT:
      return i18n.t("pages.note.cards.vitalSigns.weight");
    case VITAL_SIGNS.HEART_RATE:
      return i18n.t("pages.note.cards.vitalSigns.heartRate");
    case VITAL_SIGNS.RESPIRATORY_RATE:
      return i18n.t("pages.note.cards.vitalSigns.respiratoryRate");
    case VITAL_SIGNS.TEMPERATURE:
      return i18n.t("pages.note.cards.vitalSigns.temperature");
    default:
      return null;
  }
};

const getErrorMessage = (cardType: string) => {
  switch (cardType) {
    case CardType.ALLERGIES:
      return i18n.t("pages.note.cards.errors.allergies");
    case CardType.CURRENT_MEDICATION:
      return i18n.t("pages.note.cards.errors.medication");
    case CardType.PAST_MEDICAL_HISTORY:
    case CardType.PAST_MEDICAL_HISTORY_SHOW_ME:
      return i18n.t("pages.note.cards.errors.medicalHistory");
    case CardType.PAST_SURGICAL_HISTORY:
    case CardType.PAST_SURGICAL_HISTORY_SHOW_ME:
      return i18n.t("pages.note.cards.errors.surgicalHistory");
    case CardType.VITALS:
      return i18n.t("pages.note.cards.errors.vitals");
    default:
      return "";
  }
};

export { getCardTitle, getErrorMessage, getVitalSign };
