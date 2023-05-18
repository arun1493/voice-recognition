import { logger } from ".";
import axios from "./config";
import { PrintNoteParams, PrintOrSaveNotesRequest } from "../types";

const getNotePDFUri = ({ compositionId, noteId }: PrintNoteParams) => {
  const params = new URLSearchParams();
  if (compositionId) {
    params.append("compositionId", compositionId);
  }

  if (noteId) {
    params.append("noteId", noteId);
  }

  return axios
    .get(`/pdf/note`, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      logger.error({ message: "Printing note Failed", payload: error });
      return "";
    });
};

const getNotesPDFToPrintUri = (args: PrintOrSaveNotesRequest) => {
  const { compositionIds, patientsNotesIds } = args;
  return axios
    .post(`/pdf/notes-print`, {
      compositionIds,
      patientsNotesIds
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      logger.error({ message: "Printing notes Failed", payload: error });
      return "";
    });
};

const getNotesPDFToSaveUri = (args: PrintOrSaveNotesRequest) => {
  const { compositionIds, patientsNotesIds } = args;

  return axios
    .post(`/pdf/notes-save`, {
      compositionIds,
      patientsNotesIds
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      logger.error({ message: "Saving notes Failed", payload: error });
      return "";
    });
};

export { getNotePDFUri, getNotesPDFToPrintUri, getNotesPDFToSaveUri };
