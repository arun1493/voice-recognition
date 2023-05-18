import { logger } from ".";
import axios from "./config";
import { getAPIBaseUrl } from "../helpers";

const fetchOrganizations = (organizationId: string, withEmrInfo = false) => {
  const url = `${getAPIBaseUrl()}/organizations/${organizationId}`;

  return axios
    .get(url, { params: { withEmrInfo } })
    .then((response) => response.data)
    .catch((error) => {
      logger.error({ message: "Failed to fetch organizations data", payload: error });
      return;
    });
};

export { fetchOrganizations };
