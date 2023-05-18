import store from "store2";
import _includes from "lodash/includes";

import { LOCAL_STORE, SecondaryEmr } from "../constants";

const isAthenaEMR = (emrType: string): boolean => emrType === SecondaryEmr.ATHENA_EMR;

const isCernerEMR = (emrType: string): boolean => emrType === SecondaryEmr.CERNER_EMR;

const isEpicEMR = (emrType: string): boolean => emrType === SecondaryEmr.EPIC_EMR;

const isEpicOrCernerEMR = (emrType: string) => isEpicEMR(emrType) || isCernerEMR(emrType);

const isSecondaryEmr = (emrType: string) => _includes(SecondaryEmr, emrType);

const isRedRoverOrg = () => store.get(LOCAL_STORE.IS_RED_ROVER_ORG);

const isSubmitNotesAsPreliminary = () => store.get(LOCAL_STORE.IS_SUBMIT_NOTE_AS_PRILIMINARY);

export {
  isAthenaEMR,
  isCernerEMR,
  isEpicEMR,
  isEpicOrCernerEMR,
  isRedRoverOrg,
  isSecondaryEmr,
  isSubmitNotesAsPreliminary
};
