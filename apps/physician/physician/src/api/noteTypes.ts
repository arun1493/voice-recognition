import _get from "lodash/get";

import { logger } from ".";
import axios from "./config";
import { CreateOrUpdateNote } from "../types";

const fetchAllNoteTypes = async () => {
  try {
    const results = await axios.get("/note-types");
    return _get(results, "data.results", []);
  } catch (error) {
    logger.error({ message: "Failed to fetch notetypes", payload: error });
    return [];
  }
};

const getNoteTypeById = (noteTypeId: string) => {
  return axios.get(`/note-types/${noteTypeId}`);
};

const createNoteType = (noteType: CreateOrUpdateNote) => {
  return axios.post("/note-types", { noteType });
};

const updateNoteType = (noteType: CreateOrUpdateNote) => {
  return axios.put(`/note-types/${noteType.id}`, { noteType });
};

const deleteNoteType = (id: string) => {
  return axios.delete(`note-types/${id}`);
};

export { createNoteType, deleteNoteType, fetchAllNoteTypes, getNoteTypeById, updateNoteType };
