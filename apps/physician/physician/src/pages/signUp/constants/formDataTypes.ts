import { SelectOption } from "@suki-web/suki-business";

import { SignUpFormFields } from "./formFields";

type FormData = {
  [SignUpFormFields.AGREEMENT]: boolean;
  [SignUpFormFields.EMAIL]: string;
  [SignUpFormFields.EMR]: SelectOption;
  [SignUpFormFields.FIRST_NAME]: string;
  [SignUpFormFields.LAST_NAME]: string;
  [SignUpFormFields.ORGANIZATION_NAME]: string;
  [SignUpFormFields.PHONE_NUMBER]: string;
  [SignUpFormFields.SPECIALTY]: SelectOption;
  [SignUpFormFields.SUFFIX]: string;
};

type FormFieldRenderProps = {
  field: Record<string, any>;
};

type FormSubmitHandler = (formData: FormData) => void;

export { FormData, FormFieldRenderProps, FormSubmitHandler };
