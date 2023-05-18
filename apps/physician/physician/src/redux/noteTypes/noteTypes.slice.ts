import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Note } from "../../types";
import { RootState } from "../store";
import { fetchAllNoteTypes } from "../../api";
import { noteTypeReader } from "../../readers";

const NOTE_TYPES_FEATURE_KEY = "noteTypes";

interface NoteTypesState {
  isFetched: boolean;
  isFromPatientList: boolean;
  isLoading: boolean;
  noteTypes: Array<Note>;
  patientId: string | null;
}

const INITIAL_NOTE_TYPES_STATE: NoteTypesState = {
  isFetched: false,
  isFromPatientList: false,
  isLoading: false,
  noteTypes: [],
  patientId: null
};

const getAllNoteTypes = createAsyncThunk("modals/note-types", async () => {
  return await fetchAllNoteTypes();
});

const noteTypesSlice = createSlice({
  name: NOTE_TYPES_FEATURE_KEY,
  initialState: INITIAL_NOTE_TYPES_STATE,
  reducers: {
    setIsFromPatientList: (state, { payload }) => {
      state.isFromPatientList = payload;
    },
    setNoteTypes: (state, { payload }) => {
      state.noteTypes = payload;
    },
    setNoteTypesLoadingStatus: (state, { payload }) => {
      state.isLoading = payload;
    },
    setPatientId: (state, { payload }) => {
      state.patientId = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllNoteTypes.fulfilled, (state: NoteTypesState, action: PayloadAction<Note[]>) => {
      state.noteTypes = action.payload;
      state.isLoading = false;
      state.isFetched = true;
    });
  }
});

const noteTypesReducer = noteTypesSlice.reducer;

const noteTypesActions = noteTypesSlice.actions;

const getNoteTypesState = (rootState: RootState): NoteTypesState => rootState[NOTE_TYPES_FEATURE_KEY];

const selectPatientId = createSelector(getNoteTypesState, (state) => state?.patientId);

const selectAllNoteTypes = createSelector(getNoteTypesState, (state) => state?.noteTypes);

const selectNoteTypesStatus = createSelector(getNoteTypesState, (state) => ({
  isFetched: state?.isFetched,
  isLoading: state?.isLoading
}));

const selectIsFromPatientList = createSelector(getNoteTypesState, (state) => state?.isFromPatientList);

const selectNoteTypeById = (noteTypeId: string) =>
  createSelector(selectAllNoteTypes, (noteTypes) =>
    noteTypes?.find((noteType: Note) => noteTypeReader.id(noteType) === noteTypeId)
  );

export {
  getAllNoteTypes,
  NOTE_TYPES_FEATURE_KEY,
  noteTypesActions,
  noteTypesReducer,
  noteTypesSlice,
  selectAllNoteTypes,
  selectIsFromPatientList,
  selectNoteTypeById,
  selectNoteTypesStatus,
  selectPatientId
};
