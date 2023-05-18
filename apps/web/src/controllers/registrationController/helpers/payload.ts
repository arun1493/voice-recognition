import { Products, RegistrationUser, RegistrationUserPerson, UserSubscriptionPayload } from "@suki-web/suki-business";

import { User } from "../../../grpc/generated/learningmotors/pb/user/User";
import { Person } from "../../../grpc/generated/learningmotors/pb/common/Person";
import { CreateUserRegistrationRequest } from "../../../grpc/generated/learningmotors/pb/user/CreateUserRegistrationRequest";

const convertPersonToRpcFormat = (person: RegistrationUserPerson): Person => ({
  first_name: person?.firstName,
  gender: person?.gender,
  last_name: person?.lastName,
  suffix: person?.suffix
});

const convertUserToRpcFormat = (user: RegistrationUser): User => ({
  email: user?.email,
  person: convertPersonToRpcFormat(user?.person),
  phone_number: user?.phoneNumber,
  registered_at: user?.registeredAt,
  specialties: user?.specialties,
  timezone: user?.timezone
});

const createUserRegistrationRequest = (clientPayload: UserSubscriptionPayload): CreateUserRegistrationRequest => ({
  user: convertUserToRpcFormat(clientPayload?.user),
  practice_name: clientPayload?.practiceName,
  user_consent: clientPayload?.userConsent,
  affiliated_emr: clientPayload?.affiliatedEmr,
  sku: clientPayload?.product
});

export { createUserRegistrationRequest };
