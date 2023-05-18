import { t } from "i18next";

import { SubmissionModals } from "../constants";

const getNoEncounterModalDetails = (type: SubmissionModals) => {
  let title = t("modals.signNoteModal.noEncounter.title"),
    text1 = t("modals.signNoteModal.noEncounter.text1"),
    text2 = t("modals.signNoteModal.noEncounter.text2");

  if (type === SubmissionModals.NO_ENCOUNTER_EMRCHART) {
    title = t("modals.signNoteModal.noEncounterEmrChart.title");
    text1 = t("modals.signNoteModal.noEncounterEmrChart.text1");
    text2 = t("modals.signNoteModal.noEncounterEmrChart.text2");
  }

  return { title, text1, text2 };
};

export { getNoEncounterModalDetails };
