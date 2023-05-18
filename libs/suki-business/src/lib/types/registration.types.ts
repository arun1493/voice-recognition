import { Timestamp } from "./global.types";
import { Products } from "./product.types";
import { Emr, Specialities } from "../constants";

type RegistrationUserPerson = {
  firstName: string;
  gender: 0 | 1 | 2;
  lastName: string;
  suffix: string;
};

type RegistrationUser = {
  email: string;
  person: RegistrationUserPerson;
  phoneNumber: string;
  registeredAt: Timestamp;
  specialties: Specialities[];
  timezone: string;
};

type RegistrationDetail = {
  id?: string;
  sku?: string;
  subscription_status?: string;
  user?: RegistrationUser;
};

type UserConsent = {
  accepted: boolean;
  email: string;
  name: string;
  timestamp: Timestamp;
  version: string;
};

type UserSubscriptionPayload = {
  affiliatedEmr: Emr;
  practiceName: string;
  product: Products;
  user: RegistrationUser;
  userConsent: {
    consents: UserConsent[];
  };
};

type RegistrationVerificationTokenPayload = {
  email: string;
  token: string;
};

type PasswordRegistrationPayload = {
  affiliated_emr?: string;
  emr?: string;
  password: string;
  token: string;
  user: RegistrationUser;
};

type VerificationEmailPayload = {
  registrationId: string;
};

type BillingSessionPayload = {
  email: string;
  redirectUrl?: string;
};

export {
  BillingSessionPayload,
  PasswordRegistrationPayload,
  RegistrationDetail,
  RegistrationUser,
  RegistrationUserPerson,
  RegistrationVerificationTokenPayload,
  UserConsent,
  UserSubscriptionPayload,
  VerificationEmailPayload
};
