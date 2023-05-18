import _get from "lodash/get";

import axios from "./config";
import { Patients } from "../types";

const getPatientList = async () => {
  const results = await axios.get("/patients/list");
  return _get(results, "data.patientList.patients", []);
};

const searchPatient = (name: string, limit: number) => {
  return axios.get(`/patients/search?name=${name}&limit=${limit}`);
};

const addPatient = (patient: { patients: Patients }) => {
  return axios.post("/patients/list", patient);
};

const deletePatient = (patientId: string) => {
  return axios.delete(`/patients/list/${patientId}`);
};

const updatePatients = (patients: Patients) => {
  return axios.put("/patients", { patients });
};

const createPatients = (patients: Patients) => {
  return axios.post("/patients", { patients });
};

export { addPatient, createPatients, deletePatient, getPatientList, searchPatient, updatePatients };
