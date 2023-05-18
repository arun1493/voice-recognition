import { convertToSelectOptions } from "@suki-web/suki-ui";
import { getEMROptions, getSpecialityOptions } from "@suki-web/suki-business";

const SPECIALITY_OPTIONS = getSpecialityOptions();

const EMR_OPTIONS = getEMROptions();

const EMR_ALWAYS_INCLUDED_OPTIONS = [{ label: "NA / Other", value: "NA" }];

const SUFFIX_OPTIONS = convertToSelectOptions(["", "MD", "DO", "PA", "NP"]);

const PHONE_NUMBER_LENGTH = 10;

const MAX_TEXT_FIELD_LENGTH = 255;

const MIN_TEXT_FIELD_LENGTH = 2;

export {
  EMR_ALWAYS_INCLUDED_OPTIONS,
  EMR_OPTIONS,
  MAX_TEXT_FIELD_LENGTH,
  MIN_TEXT_FIELD_LENGTH,
  PHONE_NUMBER_LENGTH,
  SPECIALITY_OPTIONS,
  SUFFIX_OPTIONS
};
