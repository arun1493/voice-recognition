import axios from "./config";
import { EDGData } from "../types";

const getEdgCodes = (icd10: string) => {
  const params = new URLSearchParams();
  icd10 && params.append("icd10", icd10);

  return axios.get("/edg-codes", { params }).then((response) => response.data as EDGData);
};

export { getEdgCodes };
