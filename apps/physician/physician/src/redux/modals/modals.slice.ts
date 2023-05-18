import _noop from "lodash/noop";
import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Patient } from "../../types";
import { ErrorDialogs, SubmissionModals } from "../../constants";

const MODALS_FEATURE_KEY = "modals";

type ModalSubType = "general" | "note" | "embed";

type ModalState = {
  isActive: boolean;
  type?: ModalSubType;
};

// general flow "check patient" => "CONFIRM_CODES" => "INITIAL" => "SUBMIT" => "encounters part"
// types flow "CONFIRM_CODES" => "MISSING_CODES" => "INITIAL" => "SUBMIT"
type SignNoteState = {
  hasIgnoreMissingICDCodes: boolean;
  isActive: boolean;
  isEnhancedReview: boolean;
  successTipMessage: string;
  type: SubmissionModals;
};

type ErrorDialogState = {
  isActive: boolean;
  isAddNew: boolean;
  isScriptType: boolean;
  type: ErrorDialogs;
};

type ModalAction = {
  onAddPatient: (params: Patient) => void;
};

type ModalScript = {
  scriptId: string;
};

interface ModalsState {
  addToScheduleOrList: ModalState;
  dateOfServiceConfirmation: ModalState;
  deleteNote: ModalState;
  emrSignIn: ModalState;
  errorDialog: ErrorDialogState;
  ICD10Lookup: ModalState;
  noteRefresh: ModalState;
  noteTypeDetails: ModalState;
  noteTypes: ModalState;
  scriptDetails: ModalState & ModalScript;
  scriptsList: ModalState;
  searchPatients: ModalState & ModalAction;
  searchPatientsInHeader: ModalState;
  signNote: SignNoteState;
  whatCanISay: ModalState;
}

const initialModalsState: ModalsState = {
  addToScheduleOrList: {
    isActive: false
  },
  dateOfServiceConfirmation: {
    isActive: false
  },
  deleteNote: {
    isActive: false
  },
  emrSignIn: {
    isActive: false
  },
  ICD10Lookup: {
    isActive: false
  },
  noteRefresh: {
    isActive: false
  },
  noteTypeDetails: {
    isActive: false
  },
  noteTypes: {
    isActive: false
  },
  errorDialog: {
    isActive: false,
    isAddNew: false,
    isScriptType: false,
    type: ErrorDialogs.NA
  },
  scriptDetails: {
    isActive: false,
    scriptId: ""
  },
  scriptsList: {
    isActive: false
  },
  searchPatients: {
    isActive: false,
    type: "general",
    onAddPatient: _noop
  },
  searchPatientsInHeader: {
    isActive: false
  },
  signNote: {
    hasIgnoreMissingICDCodes: false,
    isActive: false,
    isEnhancedReview: false,
    successTipMessage: "",
    type: SubmissionModals.CONFIRM_CODES
  },
  whatCanISay: {
    isActive: false,
    type: "general"
  }
};

const modalsSlice = createSlice({
  name: MODALS_FEATURE_KEY,
  initialState: initialModalsState,
  reducers: {
    showWhatCanISayModal: (state, action) => {
      state.whatCanISay = { isActive: true, type: action.payload };
    },
    hideWhatCanISayModal: (state) => {
      state.whatCanISay = { ...initialModalsState.whatCanISay };
    },
    showNoteTypesModal: (state) => {
      state.noteTypes.isActive = true;
    },
    hideNoteTypesModal: (state) => {
      state.noteTypes.isActive = false;
    },
    showErrorModal: (state, action) => {
      state.errorDialog.isActive = true;
      const { type, isAddNew, isScriptType } = action.payload;
      state.errorDialog.type = type;
      state.errorDialog.isScriptType = isScriptType;
      state.errorDialog.isAddNew = isAddNew;
    },
    hideNoteTypeErrorModal: (state) => {
      state.errorDialog.isActive = false;
      state.errorDialog.type = ErrorDialogs.NA;
    },
    toggleNoteTypesModal: (state) => {
      state.noteTypes.isActive = !state.noteTypes.isActive;
    },
    showEmrSignInModal: (state) => {
      state.emrSignIn.isActive = true;
    },
    hideEmrSignInModal: (state) => {
      state.emrSignIn.isActive = false;
    },
    showSearchPatientsModal: (state, action) => {
      state.searchPatients.isActive = true;
      state.searchPatients.onAddPatient = action.payload.onAddPatient;
    },
    hideSearchPatientsModal: (state) => {
      state.searchPatients.isActive = false;
    },
    showSearchPatientsInHeaderModal: (state) => {
      state.searchPatientsInHeader.isActive = true;
    },
    hideSearchPatientsInHeaderModal: (state) => {
      state.searchPatientsInHeader.isActive = false;
    },
    showScriptDetailsModal: (state, action) => {
      state.scriptDetails.isActive = true;
      state.scriptDetails.scriptId = action.payload;
    },
    hideScriptDetailsModal: (state) => {
      state.scriptDetails.isActive = false;
    },
    showScriptsListModal: (state) => {
      state.scriptsList.isActive = true;
    },
    hideScriptsListModal: (state) => {
      state.scriptsList.isActive = false;
    },
    showICD10LookupModal: (state) => {
      state.ICD10Lookup.isActive = true;
    },
    hideICD10LookupModal: (state) => {
      state.ICD10Lookup.isActive = false;
    },
    showNoteRefreshModal: (state) => {
      state.noteRefresh.isActive = true;
    },
    hideNoteRefreshModal: (state) => {
      state.noteRefresh.isActive = false;
    },
    hideSignNoteModal: (state) => {
      state.signNote = { ...initialModalsState.signNote };
    },
    showSignNoteModal: (state, { payload }) => {
      state.signNote.isActive = true;
      state.signNote.type = payload.type;
    },
    setSignNoteIgnoreMissingICDCodes: (state) => {
      state.signNote.hasIgnoreMissingICDCodes = true;
    },
    setSignNoteModalSuccessTipMessage: (state, { payload }) => {
      state.signNote.successTipMessage = payload;
    },
    setSignNoteModalIsEnhancedReview: (state, { payload }) => {
      state.signNote.isEnhancedReview = payload;
    },
    showDeleteNoteModal: (state) => {
      state.deleteNote.isActive = true;
    },
    hideDeleteNoteModal: (state) => {
      state.deleteNote.isActive = false;
    },
    showAddToScheduleOrList: (state) => {
      state.addToScheduleOrList.isActive = true;
    },
    hideAddToScheduleOrList: (state) => {
      state.addToScheduleOrList.isActive = false;
    },
    showDateOfServiceConfirmation: (state) => {
      state.dateOfServiceConfirmation.isActive = true;
    },
    hideDateOfServiceConfirmation: (state) => {
      state.dateOfServiceConfirmation.isActive = false;
    },
    hideAllModals: () => {
      return initialModalsState;
    }
  }
});

const getModalsState = (rootState: RootState): ModalsState => rootState[MODALS_FEATURE_KEY];
const modalsActions = modalsSlice.actions;
const modalsReducer = modalsSlice.reducer;

export { getModalsState, MODALS_FEATURE_KEY, ModalSubType, modalsActions, modalsReducer };
