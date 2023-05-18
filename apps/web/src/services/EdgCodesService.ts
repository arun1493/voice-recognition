import qs from "qs";
import axios from "axios";

import { EDG_CODE_BASE_URL } from "../constants";

class EdgCodesService {
  async getEdgCodes({ icd10Codes, orgIds }) {
    const options = {
      baseURL: EDG_CODE_BASE_URL,
      url: "/LookUpEDG",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      timeout: 15000,
      data: qs.stringify({ icd10_in: icd10Codes, org_id: orgIds }, { encodeValuesOnly: true, indices: false })
    };

    return await axios({ ...options, method: "POST" });
  }
}

export default new EdgCodesService();
