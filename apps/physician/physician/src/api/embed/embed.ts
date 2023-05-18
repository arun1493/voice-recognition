import axios from "axios";

import { getAPIBaseUrl } from "../../helpers";

const END_POINTS = {
  FETCH_EMBED_USER: "/embed/embed-user"
};

const getEmbedUser = async (partnerId: string, tenantName: string, idToken: string) => {
  const url = getAPIBaseUrl() + END_POINTS.FETCH_EMBED_USER;
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": idToken
  };
  const body = JSON.stringify({
    partnerId,
    tenantName
  });

  try {
    const response = await axios.post(url, body, { headers });
    return response;
  } catch (error) {
    return {
      error: `Failed to fetch Embed user details: ${error}`
    };
  }
};

export { getEmbedUser };
