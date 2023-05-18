import _isEmpty from "lodash/isEmpty";

// TODO[Sai]: Add the logic to validate the access token
function isValidAccessToken(accessToken: string): boolean {
  if (_isEmpty(accessToken)) {
    return false;
  }
  return true;
}

export { isValidAccessToken };
