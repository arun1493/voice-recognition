import {
  PasswordRegistrationPayload,
  RegistrationVerificationTokenPayload,
  VerificationEmailPayload
} from "@suki-web/suki-business";

import axios from "./config";

enum EndPoints {
  REGISTER = "/registration",
  CREATE_PASSWORD = "/registration/create-password",
  SEND_VERIFICATION_EMAIL = "/registration/verification-email",
  VALIDATE_REGISTRATION_VERIFICATION_TOKEN = "/registration/validate-token"
}

const validateRegistrationVerificationToken = (payload: RegistrationVerificationTokenPayload) => {
  return axios.post(EndPoints.VALIDATE_REGISTRATION_VERIFICATION_TOKEN, payload);
};

const getRegistrationDetails = (email: string) => {
  return axios.get(EndPoints.REGISTER, { params: { email } });
};

const createPassword = (payload: PasswordRegistrationPayload) => {
  return axios.post(EndPoints.CREATE_PASSWORD, payload);
};

const sendVerificationEmail = (payload: VerificationEmailPayload) => {
  return axios.post(EndPoints.SEND_VERIFICATION_EMAIL, payload);
};

export { createPassword, getRegistrationDetails, sendVerificationEmail, validateRegistrationVerificationToken };
