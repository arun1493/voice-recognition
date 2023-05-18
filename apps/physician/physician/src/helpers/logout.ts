import store from "store2";

import { oktaAuth } from "../config";
import { LOCAL_STORE } from "../constants";
import { getOktaAccessToken } from "./okta";
import { logger, revokeAccessToken } from "../api";

async function logOut() {
  try {
    await revokeAccessToken();
    await oktaAuth.signOut();
    store.remove(LOCAL_STORE.ORGANIZATION_ID);
    store.remove(LOCAL_STORE.USER_ID);
    store.remove(LOCAL_STORE.OKTA_SESSION_TOKEN);
    store.remove(LOCAL_STORE.EMR_TYPE);
    store.remove(LOCAL_STORE.IS_EMR_USER);
    store.remove(LOCAL_STORE.IS_AMWELL_USER);
    store.remove(LOCAL_STORE.THIN_CLIENT);
    store.remove(LOCAL_STORE.IS_RED_ROVER_ORG);
    store.remove(LOCAL_STORE.SCHEDULE_DATE);
  } catch (error) {
    logger.error({ message: "Logout Failed", payload: error });
  }
}

export { logOut };
