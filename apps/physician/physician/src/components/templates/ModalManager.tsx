import { useSelector } from "react-redux";

import {
  AddToScheduleOrList,
  DateOfServiceConfirmation,
  DeleteNoteDialog,
  EmrSignIn,
  ErrorDialog,
  ICD10LookupModal,
  NoteRefresh,
  NoteTypes,
  ScriptDetailsModal,
  ScriptsList,
  SearchPatientsByName,
  SearchPatientsInHeader,
  WhatCanISay
} from "../organisms";
import { getModalsState } from "../../redux/modals";
import { SignNoteModal } from "../organisms/signNoteModal";

const ModalManager = () => {
  const {
    addToScheduleOrList,
    dateOfServiceConfirmation,
    deleteNote,
    emrSignIn,
    errorDialog,
    noteRefresh,
    ICD10Lookup,
    noteTypes,
    scriptDetails,
    scriptsList,
    searchPatients,
    searchPatientsInHeader,
    signNote,
    whatCanISay
  } = useSelector(getModalsState);

  if (addToScheduleOrList.isActive) {
    return <AddToScheduleOrList />;
  }

  if (dateOfServiceConfirmation.isActive) {
    return <DateOfServiceConfirmation />;
  }

  if (deleteNote.isActive) {
    return <DeleteNoteDialog />;
  }

  if (emrSignIn.isActive) {
    return <EmrSignIn />;
  }

  if (ICD10Lookup.isActive) {
    // important that ICD10Lookup should be before signNote, they can be active together
    return <ICD10LookupModal />;
  }

  if (noteRefresh.isActive) {
    return <NoteRefresh />;
  }

  if (noteTypes.isActive) {
    return <NoteTypes />;
  }

  if (errorDialog.isActive) {
    return <ErrorDialog />;
  }

  if (scriptDetails.isActive) {
    return <ScriptDetailsModal scriptId={scriptDetails.scriptId} />;
  }

  if (scriptsList.isActive) {
    return <ScriptsList />;
  }

  if (searchPatients.isActive) {
    return <SearchPatientsByName onAddPatient={searchPatients.onAddPatient} />;
  }

  if (searchPatientsInHeader.isActive) {
    return <SearchPatientsInHeader />;
  }

  if (signNote.isActive) {
    return <SignNoteModal />;
  }

  if (whatCanISay.isActive) {
    return <WhatCanISay type={whatCanISay.type} />;
  }

  return null;
};

export default ModalManager;

export { ModalManager };
