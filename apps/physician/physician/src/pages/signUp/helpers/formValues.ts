import {
  Emr,
  Products,
  RegistrationUser,
  RegistrationUserPerson,
  Specialities,
  Timestamp,
  UserConsent,
  UserSubscriptionPayload
} from "@suki-web/suki-business";
import _toLower from "lodash/toLower";
import { SelectOption } from "@suki-web/suki-ui";

import { getTimeStamp } from "../../../helpers";
import { FormData, SignUpFormFields } from "../constants";

const createUserConsent = (name: string, email: string, timestamp: Timestamp, version = "v1"): UserConsent => {
  return {
    accepted: true,
    email,
    name,
    timestamp,
    version
  };
};

const createCheckoutPayload = (formData: FormData, product: Products): UserSubscriptionPayload => {
  const specialtySelectOption = formData[SignUpFormFields.SPECIALTY] as unknown as SelectOption;
  const suffixSelectOption = formData[SignUpFormFields.SUFFIX] as unknown as SelectOption;
  const emrSelectOption = formData[SignUpFormFields.EMR] as unknown as SelectOption;
  const email = _toLower(formData[SignUpFormFields.EMAIL]);

  const timestamp = getTimeStamp();

  const person: RegistrationUserPerson = {
    firstName: formData[SignUpFormFields.FIRST_NAME],
    gender: 0,
    lastName: formData[SignUpFormFields.LAST_NAME],
    suffix: suffixSelectOption.value
  };

  const user: RegistrationUser = {
    email,
    person,
    phoneNumber: formData[SignUpFormFields.PHONE_NUMBER],
    registeredAt: timestamp,
    specialties: [specialtySelectOption.value as Specialities],
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };

  const verificationEmailRequest = {
    affiliatedEmr: emrSelectOption.value as Emr,
    practiceName: formData[SignUpFormFields.ORGANIZATION_NAME],
    user,
    userConsent: {
      consents: [
        createUserConsent("Terms of service", email, timestamp),
        createUserConsent("Business associate agreement", email, timestamp)
      ]
    },
    product
  };

  return verificationEmailRequest;
};

export { createCheckoutPayload };
