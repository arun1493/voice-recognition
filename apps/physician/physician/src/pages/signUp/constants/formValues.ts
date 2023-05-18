import { FormData, SignUpFormFields } from ".";

const DEFAULT_SIGNUP_FORM_VALUES: FormData = {
  [SignUpFormFields.AGREEMENT]: false,
  [SignUpFormFields.EMAIL]: "",
  [SignUpFormFields.EMR]: { label: "", value: "" },
  [SignUpFormFields.FIRST_NAME]: "",
  [SignUpFormFields.LAST_NAME]: "",
  [SignUpFormFields.ORGANIZATION_NAME]: "",
  [SignUpFormFields.PHONE_NUMBER]: "",
  [SignUpFormFields.SPECIALTY]: { label: "", value: "" },
  [SignUpFormFields.SUFFIX]: ""
};

export { DEFAULT_SIGNUP_FORM_VALUES };
