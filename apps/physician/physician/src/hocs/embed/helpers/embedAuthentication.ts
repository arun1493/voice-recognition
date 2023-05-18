import { EmbedUserDetails } from "../../../types";
import { embedUserReader } from "../../../readers";

const getJwtFromAuthToken = (authToken: string) => {
  const firstDotPosition = authToken?.indexOf(".");
  const jwt = authToken?.slice(firstDotPosition + 1) || "";
  return jwt;
};

/**
 * Returns base64 decoded password of embed user
 */
const getEmbedUserPassword = (embedUserDetails: EmbedUserDetails) => {
  const base64EncodedPassword = embedUserReader.oktaPassword(embedUserDetails);
  const password = window.atob(base64EncodedPassword);
  return password;
};

export { getEmbedUserPassword, getJwtFromAuthToken };
