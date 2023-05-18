import axios from "./config";

const fetchFeatureFlags = () => {
  return axios.get("/feature-flags");
};

export { fetchFeatureFlags };
