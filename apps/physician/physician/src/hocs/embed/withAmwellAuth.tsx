import store from "store2";
import _get from "lodash/get";
import jwtDecode from "jwt-decode";
import _isEmpty from "lodash/isEmpty";
import { EmbedPartners } from "@suki-web/suki-business";
import { FunctionComponent, useEffect, useState } from "react";

import { useQueryParams } from "../../hooks";
import { DecodedIdToken } from "../../types";
import { LOCAL_STORE } from "../../constants";
import { embedUserReader } from "../../readers";
import { EmbedError, EmbedLoader } from "../../components/molecules";
import { getEmbedUserPassword, getJwtFromAuthToken } from "./helpers";
import { getEmbedUser, logger, login, validateIdToken } from "../../api";

function withAmwellAuth(WrappedComponent: FunctionComponent): FunctionComponent {
  return (props) => {
    const [isValidToken, setTokenValidity] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const queryParams = useQueryParams();

    const authToken = queryParams.get("token") as string;
    const idToken = getJwtFromAuthToken(authToken);

    useEffect(() => {
      if (isValidToken) {
        // If the id token is valid, sign in to okta
        store.set(LOCAL_STORE.IS_AMWELL_USER, true);

        const decodedIdToken: DecodedIdToken = jwtDecode(idToken);
        const { partnerId } = decodedIdToken;

        getEmbedUser(partnerId, EmbedPartners.Amwell, idToken)
          .then(async (data) => {
            const embedUserDetails = _get(data, "data.embeddedUser");
            const username = embedUserReader.oktaUsername(embedUserDetails) as string;
            const password = getEmbedUserPassword(embedUserDetails);
            await login(password, username);
          })
          .catch((error) => {
            logger.error({ message: "Failed getting embed user details", payload: error });
            setErrorMessage(error);
          })
          .finally(() => {
            setLoading(false);
          });
      } else if (!isLoading) {
        // If not Valid redirect to home page
        store.remove(LOCAL_STORE.IS_AMWELL_USER);
      }
    }, [isValidToken, idToken, isLoading]);

    useEffect(() => {
      validateIdToken(idToken)
        .then(() => {
          setTokenValidity(true);
        })
        .catch((error) => {
          setTokenValidity(false);
          setErrorMessage(error);
        });
    }, [idToken]);

    if (isLoading) {
      return <EmbedLoader />; // [TODO] Can add Tenant specific loaders
    }

    if (!_isEmpty(errorMessage)) {
      return <EmbedError errorMessage={errorMessage} />; // [TODO]: Can add Tenant specific error messages
    }

    return <WrappedComponent {...props} />;
  };
}

export { withAmwellAuth };
