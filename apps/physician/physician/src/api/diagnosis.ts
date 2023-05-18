import _get from "lodash/get";
import { EMPTY_ARRAY } from "@suki-web/suki-business";

import { logger } from ".";
import axios from "./config";
import { HCCParams } from "../types";

const searchDiagnoses = async (searchValue: string) => {
  return await axios.get(`/diagnosis/search?searchTitle=${searchValue}&searchDescription=${searchValue}`);
};

const getHCCSuggestions = async ({ patientId, existingDiagnoses, emrEncounterId, specialties }: HCCParams) => {
  try {
    const results = await axios.get("/diagnosis/suggestions", {
      params: {
        patientId,
        existingDiagnoses,
        emrEncounterId,
        specialties
      }
    });
    return _get(results, "data.suggestions", EMPTY_ARRAY);
  } catch (error) {
    logger.error({ message: "Failed to fetch getHCCSuggestions", payload: error });
    return EMPTY_ARRAY;
  }
};

export { getHCCSuggestions, searchDiagnoses };
