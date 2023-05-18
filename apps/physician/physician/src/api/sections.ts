import _get from "lodash/get";
import { EMPTY_ARRAY } from "@suki-web/suki-business";

import axios from "./config";

const getAllSections = async () => {
  const results = await axios.get("/sections");
  return _get(results, "data.results", EMPTY_ARRAY);
};

export { getAllSections };
