import store from "store2";
import _isEmpty from "lodash/isEmpty";

import { Note } from "../types";
import { LOCAL_STORE } from "../constants";
import { noteTypeReader } from "../readers";
import { EmrDestination, SecondaryEmr } from "../constants";
import { isRedRoverOrg, isSubmitNotesAsPreliminary } from "./emr";

const generateDestinations = () => {
  const secondaryType = store.get(LOCAL_STORE.USER_SECONDARY_EMR_TYPE);
  const isEncounter = isRedRoverOrg() || isSubmitNotesAsPreliminary();
  switch (secondaryType) {
    case SecondaryEmr.ATHENA_EMR:
    case SecondaryEmr.ELATION_EMR:
      return [EmrDestination.ENCOUNTER, EmrDestination.DOCUMENT];
    case SecondaryEmr.CERNER_EMR:
    case SecondaryEmr.EPIC_EMR:
      if (isEncounter) {
        return [EmrDestination.ENCOUNTER];
      }
      return [EmrDestination.ENCOUNTER_NEEDS_SIGNOFF];
    default:
      return [EmrDestination.SUKI_ONLY];
  }
};

const isOrganizationNoteType = (noteType: Note) => _isEmpty(noteTypeReader.userId(noteType));

const isUserNoteType = (noteType: Note) => !_isEmpty(noteTypeReader.userId(noteType));

export { generateDestinations, isOrganizationNoteType, isUserNoteType };
