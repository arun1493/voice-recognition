import _get from "lodash/get";

import axios from "./config";
import { convertVitalsData } from "../helpers";
import { PatientChartsRequest } from "../types";

const syncPatientCharts = async (params: PatientChartsRequest) => {
  const results = await axios.get("/patient-charts/sync", {
    params
  });
  return _get(results, "data", null);
};

const getPatientAllergies = async (params: PatientChartsRequest) => {
  const results = await axios.get("/patient-charts/allergies", {
    params
  });
  return _get(results, "data", null);
};

const getPatientMedicalHistory = async (params: PatientChartsRequest) => {
  const results = await axios.get("/patient-charts/medical-history", {
    params
  });
  return _get(results, "data", null);
};

const getPatientVitals = async (params: PatientChartsRequest) => {
  const results = await axios.get("/patient-charts/vitals", {
    params
  });
  return convertVitalsData(_get(results, "data.data"));
};

const getPatientSurgicalHistory = async (params: PatientChartsRequest) => {
  const results = await axios.get("/patient-charts/surgical-history", {
    params
  });
  return _get(results, "data", null);
};

const getPatientMedications = async (params: PatientChartsRequest) => {
  const results = await axios.get("/patient-charts/medications", {
    params
  });
  return _get(results, "data", null);
};

export {
  getPatientAllergies,
  getPatientMedicalHistory,
  getPatientMedications,
  getPatientSurgicalHistory,
  getPatientVitals,
  syncPatientCharts
};
