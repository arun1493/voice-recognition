import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { Appointment, Patients } from "../../types";

const PATIENTS_FEATURE_KEY = "patients";

interface PatientsState {
  patientsList: Patients;
  scheduleAppointents: Array<Appointment>;
}

const initialPatientsState: PatientsState = {
  patientsList: [],
  scheduleAppointents: []
};

const patientsSlice = createSlice({
  name: PATIENTS_FEATURE_KEY,
  initialState: initialPatientsState,
  reducers: {
    setAppointments: (state, action) => {
      state.scheduleAppointents = action.payload;
    },
    setPatients: (state, action) => {
      state.patientsList = action.payload;
    }
  }
});

const patientsReducer = patientsSlice.reducer;

const patientsActions = patientsSlice.actions;

const getPageState = (rootState: RootState): PatientsState => rootState[PATIENTS_FEATURE_KEY];

const selectAppointments = createSelector(getPageState, (state) => state?.scheduleAppointents);
const selectPatients = createSelector(getPageState, (state) => state?.patientsList);

export {
  initialPatientsState,
  PATIENTS_FEATURE_KEY,
  patientsActions,
  patientsReducer,
  patientsSlice,
  PatientsState,
  selectAppointments,
  selectPatients
};
