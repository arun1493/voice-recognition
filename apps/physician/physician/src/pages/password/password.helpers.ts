import _isEmpty from "lodash/isEmpty";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

const POLICY_MINIMUM_WORD_LENGTH = 4;

const isPasswordContainsPartOfEmail = (email: string, password: string) => {
  if (
    _isEmpty(email) ||
    _isEmpty(password) ||
    email.length < POLICY_MINIMUM_WORD_LENGTH ||
    password.length < POLICY_MINIMUM_WORD_LENGTH
  ) {
    return false;
  }

  const splitted = email.split("@").join(".").split("_").join(".").split("-").join(".").split("+").join(".").split(".");
  const partsToCheck = splitted.filter((word) => word.length >= POLICY_MINIMUM_WORD_LENGTH);

  return !!partsToCheck?.find((part) => password.includes(part));
};

export { isPasswordContainsPartOfEmail, PASSWORD_REGEX };
