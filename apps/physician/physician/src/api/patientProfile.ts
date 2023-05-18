import axios from "./config";

const getPatientProfile = (patientId: string) => {
  return axios.get(`/patients/${patientId}`).then((response) => response.data);
};

export { getPatientProfile };
