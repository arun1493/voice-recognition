import _get from "lodash/get";

import axios from "./config";
import { CreateOrUpdateScript } from "../types";

const getAllScripts = async () => {
  const results = await axios.get("/scripts");
  return _get(results, "data.results", []);
};

const deleteScript = (id: string) => {
  return axios.delete(`scripts/${id}`);
};

const getScriptById = (scriptId: string) => {
  return axios.get(`/scripts/${scriptId}`);
};

const createScript = (macro: CreateOrUpdateScript) => {
  return axios.post("/scripts", macro);
};

const updateScript = (macro: CreateOrUpdateScript) => {
  return axios.put(`/scripts/${macro.id}`, { macro });
};

export { createScript, deleteScript, getAllScripts, getScriptById, updateScript };
