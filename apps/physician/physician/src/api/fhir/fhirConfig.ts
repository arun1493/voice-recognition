import axios from "axios";

import { logger } from "../";
import { getAPIBaseUrl, getFhirRequestHeaders } from "../../helpers";

const fetchFhirConfig = () => {
  const url = getAPIBaseUrl() + "/fhir/config/web";
  const headers = getFhirRequestHeaders();

  return axios
    .get(url, {
      headers
    })
    .then((response) => {
      logger.info({ message: "Succesfully fetched FHIR config", payload: response });
      return response.data;
    })
    .catch((error) => {
      logger.error({ message: "Failed to fetch FHIR config", payload: error });
      return {};
    });
};

export { fetchFhirConfig };
