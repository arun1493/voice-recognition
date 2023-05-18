import _get from "lodash/get";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "@suki-web/suki-business";

import axios from "./config";

const getNote = (noteId: string) => {
  const params = new URLSearchParams();

  return axios.get(`/notes/${noteId}`, { params }).then((response) => {
    return _get(response, "data", EMPTY_OBJECT);
  });
};

const getCompositionOrNote = (noteId: string) => {
  const params = new URLSearchParams();

  return axios.get(`/notes/compositionOrNote/${noteId}`, { params }).then((response) => {
    return _get(response, "data", EMPTY_OBJECT);
  });
};

const getPatientNotes = (patientId: string) => {
  const params = new URLSearchParams();
  patientId && params.append("patientId", patientId);

  return axios.get(`/notes`, { params }).then((response) => {
    return _get(response, "data.results", EMPTY_ARRAY);
  });
};

export { getCompositionOrNote, getNote, getPatientNotes };
