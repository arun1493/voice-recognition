import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import _cloneDeep from "lodash/cloneDeep";
import { EMPTY_ARRAY, SectionUpdateTypes } from "@suki-web/suki-business";

import {
  appointmentReader,
  compositionReader,
  diagnosisReader,
  metadataReader,
  patientReader,
  sectionReader
} from "../../../readers";
import { searchDiagnoses } from "../../../api";
import { getSectionIcdCode } from "../../../helpers";
import { PROBLEM_STATUSES } from "../../../constants";
import { Composition, NoteSection } from "../../../types";

const getExistingDiagnoses = (sections: NoteSection[]) => {
  const sectionsWithICDCode = sections.filter(getSectionIcdCode);
  return sectionsWithICDCode.map((section: NoteSection) => {
    const diagnosis = sectionReader.diagnosis(section);
    return {
      snomedDescription: sectionReader.sectionName(section),
      icdCode: diagnosisReader.icdCode(diagnosis),
      icdDescription: diagnosisReader.icdDescription(diagnosis),
      snomedCode: diagnosisReader.snomedCode(diagnosis)
    };
  });
};

const getDiagnosisNames = (sections: NoteSection[]) => {
  const problemSections = sections.filter(sectionReader.diagnosis);

  return problemSections.map(sectionReader.sectionName);
};

const getAppointmentDetails = (composition: Composition) => {
  const metadata = compositionReader.metadata(composition);
  const appointment = metadataReader.appointment(metadata);
  const patient = metadataReader.patient(metadata);

  return {
    emrPatientId: patientReader.mrn(patient),
    emrAppointmentDepartmentId: appointmentReader.emrDepartmentId(appointment),
    emrEncounterId: appointmentReader.emrEncounterId(appointment),
    sukiAppointmentId: appointmentReader.id(appointment),
    sukiPatientId: patientReader.id(patient)
  };
};

const autoPopulateIcdCodes = async (section: NoteSection) => {
  // Auto Populate ICD Codes
  const sectionName = sectionReader.sectionName(section);

  if (_isEmpty(sectionName)) return;

  const searchResults = await searchDiagnoses(sectionName);
  const diagnoses = _get(searchResults, "data.diagnoses", EMPTY_ARRAY); //.0.diagnosis

  // diagnoses should not have any children
  if (
    _isEmpty(diagnoses) ||
    !_isEmpty(_get(diagnoses, "0.children")) ||
    _isEmpty(_get(diagnoses, "0.diagnosis")) ||
    diagnoses?.length > 1
  )
    return;

  // we have exact match now
  const suggestedDiagnosis = _get(diagnoses, "0.diagnosis");
  const updatedSection = _cloneDeep(section);
  updatedSection.diagnosisEntry = {
    diagnosis: {
      ...suggestedDiagnosis,
      problemLabel: sectionName
    },
    confirmStatus: PROBLEM_STATUSES.UNCONFIRMED
  };
  updatedSection.updateType = SectionUpdateTypes.ONLY_DIAGNOSIS;

  return updatedSection;
};

// This methods returns rows and cols span for the the textarea in problem name to adjust its size to accommodate large names
// [TODO][Uttam]: Fix the logic for height adjustment for textarea
const getTextAreaRowsAndColsCount = (name: string, element: HTMLTextAreaElement) => {
  const elementWidth = element?.clientWidth || 300;

  let divider = 10;
  if (elementWidth <= 170) divider = 16;
  else if (elementWidth <= 185) divider = 15;
  else if (elementWidth <= 210) divider = 13;
  else if (elementWidth <= 280) divider = 12;
  else if (elementWidth <= 305) divider = 11;

  const colsCount = Math.ceil(elementWidth / divider);
  const rowsCount = Math.ceil(name.length / colsCount);

  return { rowsCount, colsCount };
};

export {
  autoPopulateIcdCodes,
  getAppointmentDetails,
  getDiagnosisNames,
  getExistingDiagnoses,
  getTextAreaRowsAndColsCount
};
