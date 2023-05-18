import _findIndex from "lodash/findIndex";
import { CompositionOrNote } from "@suki-web/suki-business";
import { createSelector, createSlice } from "@reduxjs/toolkit";

import {
  AllUnderScoreOccurances,
  CardsByType,
  Composition,
  MappingICDCodes,
  NoteChangeHistory,
  NoteSection
} from "../../types";
import { RootState } from "../store";
import { sectionReader } from "../../readers";
import { EMPTY_OBJECT, EMPTY_STRING, INDEX_NOT_FOUND, STATE_ITEM_LOADING_STATUS_TYPE } from "../../constants";

const NOTE_FEATURE_KEY = "note";

const EMPTY_NOTE_CHANGE_HISTORY = {
  sectionFrequency: {},
  sectionStack: []
};

interface NoteState {
  activeSectionId: string;
  cardsByType: CardsByType;
  cardTypes: string[];
  changeHistory: NoteChangeHistory;
  contentSelection: [];
  composition: Composition;
  compositionId: string;
  compositionOrNoteType: CompositionOrNote;
  compositionStatus: {
    noteSubmissionSuccess: boolean;
  };
  currentCardType: string;
  isCardsVisible: boolean;
  isIgnoredOnBlur: boolean;
  isInsertion?: boolean;
  isPatientsListVisible: boolean;
  isShiftKey: boolean;
  isTabKey: boolean;
  loadingStatus: STATE_ITEM_LOADING_STATUS_TYPE;
  mappingICDCodes: MappingICDCodes;
  readOnly: boolean;
  isNewNote: boolean;
  scriptModules: any;
  selectedScript?: string;
  underScoreOccurances: AllUnderScoreOccurances;
}

type NoteStateKeys = keyof NoteState;

const initialNoteState: NoteState = {
  activeSectionId: EMPTY_STRING,
  cardsByType: EMPTY_OBJECT,
  cardTypes: [],
  changeHistory: EMPTY_NOTE_CHANGE_HISTORY,
  contentSelection: [],
  composition: EMPTY_OBJECT,
  compositionId: EMPTY_STRING,
  compositionOrNoteType: CompositionOrNote.NA,
  compositionStatus: {
    noteSubmissionSuccess: false
  },
  currentCardType: EMPTY_STRING,
  isCardsVisible: false,
  isIgnoredOnBlur: false,
  isInsertion: false,
  isPatientsListVisible: false,
  isShiftKey: false,
  isTabKey: false,
  loadingStatus: "not loaded",
  mappingICDCodes: {},
  readOnly: false,
  isNewNote: false,
  scriptModules: [],
  selectedScript: "",
  underScoreOccurances: {}
};

const isSectionIdEqual = (sectionId: string) => (section: { id?: string; sectionId?: string }) =>
  (section.id || section.sectionId) === sectionId;

const noteSlice = createSlice({
  name: NOTE_FEATURE_KEY,
  initialState: initialNoteState,
  reducers: {
    initialComposition: (state, action) => {
      const compositionStatus = { ...state.compositionStatus };

      return {
        ...state,
        compositionStatus,
        composition: { ...action.payload },
        underScoreOccurances: {}
      };
    },
    updateSection: (state, action) => {
      const { sectionData } = action.payload;
      if (state?.composition?.sectionsS2) {
        const sectionIndex = _findIndex(state?.composition?.sectionsS2, isSectionIdEqual(sectionData?.id));
        state.composition.sectionsS2[sectionIndex] = { ...sectionData };
      }
    },
    updatePatient: (state, action) => {
      if (state?.composition?.metadata) {
        state.composition.metadata.patient = action.payload;
      }
    },
    updateMetadata: (state, action) => {
      if (state?.composition?.metadata) {
        state.composition.metadata = action.payload;
      }
    },
    setComposition: (state, action) => {
      state.composition = action.payload;
    },
    setIsIgnoredOnBlur: (state, action) => {
      state.isIgnoredOnBlur = action.payload;
    },
    setTabKey: (state, action) => {
      state.isTabKey = action.payload;
    },
    setShiftKey: (state, action) => {
      state.isShiftKey = action.payload;
    },
    setContentSelection: (state, action) => {
      state.contentSelection = action.payload;
    },
    deleteProblemSection: (state, action) => {
      const id = action.payload;
      let counter = 0;
      state.composition.sectionsS2 = state.composition.sectionsS2
        .filter((section: NoteSection) => sectionReader.sectionId(section) !== id)
        .map((section: NoteSection) => {
          if (section.subsectionIndex) {
            section.subsectionIndex = ++counter;
          }
          return section;
        });
    },
    addCachedProblemToComposition: (state, action) => {
      const { section: problemSection } = action.payload;
      const { sectionsS2 } = state.composition;

      const sectionIndex = sectionsS2
        .map((section: NoteSection) => sectionReader.pbcSectionFlag(section) || !!sectionReader.diagnosis(section))
        .lastIndexOf(true);

      const problemSectionId = sectionReader.sectionId(problemSection);
      const exist = state.composition.sectionsS2?.find(
        (section: NoteSection) => sectionReader.sectionId(section) === problemSectionId
      );

      if (exist) return;
      const newSections = [...state.composition.sectionsS2];
      newSections.splice(sectionIndex + 1, 0, problemSection);
      state.composition.sectionsS2 = newSections;
    },
    setLoadingStatus: (state, action) => {
      state.loadingStatus = action.payload;
    },
    setS2Sections: (state, action) => {
      state.composition.sectionsS2 = action.payload;
    },
    setNotePulledFromEmr: (state, action) => {
      if (state?.composition?.metadata) {
        state.composition.metadata.pulledNoteFromEmr = action.payload;
      }
    },
    setCurrentCardType: (state, action) => {
      state.currentCardType = action.payload;
    },
    setActiveSectionId: (state, action) => {
      state.activeSectionId = action.payload || EMPTY_STRING;
    },
    updateUnderScoreOccurance: (state, action) => {
      const { sectionId, underScoreOccurances } = action.payload;
      state.underScoreOccurances[sectionId] = underScoreOccurances;
    },
    updateScriptModules: (state, action) => {
      const { sectionId } = action.payload;
      if (sectionId) {
        const sectionIndex = _findIndex(state.scriptModules, isSectionIdEqual(sectionId));
        if (sectionIndex !== INDEX_NOT_FOUND) {
          state.scriptModules[sectionIndex] = action.payload;
        } else {
          state.scriptModules.push(action.payload);
        }
      }
    },
    setCompositionId: (state, action) => {
      state.compositionId = action.payload;
    },
    setCompositionStatus: (state, { payload }) => {
      const compositionStatus = { ...state.compositionStatus };
      compositionStatus.noteSubmissionSuccess = payload?.noteSubmissionSuccess;

      return {
        ...state,
        compositionStatus
      };
    },
    toggleCardsVisibility: (state) => {
      state.isCardsVisible = !state.isCardsVisible;
    },
    setCardsVisibility: (state, action) => {
      state.isCardsVisible = action.payload;
    },
    setCardTypes: (state, action) => {
      state.cardTypes = action.payload;
    },
    setCardsByType: (state, { payload = EMPTY_OBJECT }) => {
      const { type, cards } = payload;
      state.cardsByType[type] = cards;
    },
    clearNoteState: (state) => {
      const keys = Object.keys(initialNoteState) as NoteStateKeys[];
      keys.forEach((key) => ((state[key] as NoteState) = initialNoteState[key]));
    },
    setCompositionOrNoteType: (state, action) => {
      state.compositionOrNoteType = action.payload;
    },
    addMappingICDCode: (state, { payload }) => {
      const { icd, edgCodes } = payload;
      state.mappingICDCodes[icd] = edgCodes;
    },
    clearMappingICDCodes: (state) => {
      state.mappingICDCodes = {};
    },
    setPatientsListVisibility: (state, action) => {
      state.isPatientsListVisible = action.payload;
    },
    setIsReadOnly: (state, action) => {
      state.readOnly = action.payload;
    },
    setIsNewNote: (state, action) => {
      state.isNewNote = action.payload;
    }
  }
});

const noteReducer = noteSlice.reducer;
const noteActions = noteSlice.actions;
const getNoteState = (rootState: RootState): NoteState => rootState[NOTE_FEATURE_KEY];
const selectCardTypes = createSelector(getNoteState, (state) => state?.cardTypes);
const selectCardsByType = createSelector(getNoteState, (state) => state?.cardsByType);
const selectCardsVisibility = createSelector(getNoteState, (state) => state?.isCardsVisible);
const selectCompositionId = createSelector(getNoteState, (state) => state?.compositionId);
const selectCompositionStatus = createSelector(getNoteState, (state) => state?.compositionStatus);
const selectContentSelection = createSelector(getNoteState, (state) => state?.contentSelection);
const selectCurrentCardType = createSelector(getNoteState, (state) => state?.currentCardType);
const selectCurrentComposition = createSelector(getNoteState, (state) => state?.composition);
const selectActiveSectionId = createSelector(getNoteState, (state) => state?.activeSectionId);
const selectIsIgnoredOnBlur = createSelector(getNoteState, (state) => state?.isIgnoredOnBlur);
const selectIsPatientsListVisible = createSelector(getNoteState, (state) => state.isPatientsListVisible);
const selectIsShiftKey = createSelector(getNoteState, (state) => state?.isShiftKey);
const selectIsTabKey = createSelector(getNoteState, (state) => state?.isTabKey);
const selectLoadingStatus = createSelector(getNoteState, (state) => state?.loadingStatus);
const selectScriptsModule = createSelector(getNoteState, (state) => state?.scriptModules);
const selectUnderScoreOccurances = createSelector(getNoteState, (state) => state?.underScoreOccurances);
const selectCompositionOrNoteType = createSelector(getNoteState, (state) => state?.compositionOrNoteType);
const selectMappingICDCodes = createSelector(getNoteState, (state) => state?.mappingICDCodes);
const selectIsReadOnly = createSelector(getNoteState, (state) => state?.readOnly);

export {
  NOTE_FEATURE_KEY,
  getNoteState,
  initialNoteState,
  noteActions,
  noteReducer,
  noteSlice,
  NoteState,
  selectActiveSectionId,
  selectCardTypes,
  selectCardsByType,
  selectCardsVisibility,
  selectCompositionId,
  selectCompositionOrNoteType,
  selectCompositionStatus,
  selectContentSelection,
  selectCurrentCardType,
  selectCurrentComposition,
  selectIsIgnoredOnBlur,
  selectIsPatientsListVisible,
  selectIsReadOnly,
  selectIsShiftKey,
  selectIsTabKey,
  selectLoadingStatus,
  selectMappingICDCodes,
  selectScriptsModule,
  selectUnderScoreOccurances
};
