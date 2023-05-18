import axios from "./config";

const getUnfinishedCompositions = () => {
  return axios.get("/compositions/unfinished-count", {
    params: {
      includeMetadata: true,
      includeSections: false
    }
  });
};

const getCompletedNotes = () => {
  return axios.get("/compositions/completed-notes", {
    params: {
      includeMetadata: false,
      includeSections: false
    }
  });
};

const deleteComposition = (compositionId: string) => {
  return axios.delete(`/compositions/${compositionId}`);
};

export { deleteComposition, getCompletedNotes, getUnfinishedCompositions };
