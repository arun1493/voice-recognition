import _get from "lodash/get";
import { s2SourceTypes } from "@suki-web/suki-business";

import {
  convertAppointmentFromProto,
  convertAppointmentMetadataFromProto,
  convertBlocksFromProto,
  convertBlocksToProto,
  convertCompositionFromProto,
  convertCompositionFromProtoForAppointmentStatus,
  convertDiagnosisEntryFromProto,
  convertDiagnosisFromProto,
  convertDiagnosisWithChildrenFromProto,
  convertDynamicChartDataFromProto,
  convertEMRNoteTypesFromProto,
  convertEMRNoteTypesToProto,
  convertEMRSubmissionInformationFromProto,
  convertEMRSubmissionStatusFromProto,
  convertEMRUserFromProto,
  convertExistingDiagnosisToProto,
  convertGenderToProto,
  convertHCCSuggestionFromProto,
  convertMacroFromProto,
  convertMacroToProto,
  convertMedicationListFromProto,
  convertMetadataFromProto,
  convertNoteFromProtoForAppointmentStatus,
  convertNoteTypeFromProto,
  convertNoteTypeToProto,
  convertOrganizationFromProto,
  convertPageResponseFromProto,
  convertPartialDictationFromProto,
  convertPatientFromProto,
  convertPatientListFromProto,
  convertPatientNoteFromProto,
  convertPatientToProto,
  convertPersonFromProto,
  convertPersonToProto,
  convertS2SectionFromProto,
  convertS2SectionsFromProto,
  convertSectionFromProto,
  convertSectionS2ToProto,
  convertSectionToProto,
  convertSectionV2FromS2Proto,
  convertSmsCompositionFromProtoForS2Clients,
  convertSpecialtiesToProto,
  convertTagsFromProto,
  convertTagsToProto,
  convertTagTypeToProto,
  convertTimestamp,
  convertUserFromProto,
  convertV2SectionsFromS2Proto,
  transformInvalidStatus
} from "./conversions";
import { TextSource } from "../grpc/generated/TextSource";
import { Destination, Gender, NOTE_STATUS, OPS_STATUS, SCRIPT_TAG, Specialty } from "../constants";

const baseTime = { seconds: 1662359400, nanos: 0 };

const isoDateString = "2022-09-05T06:30:00.000Z";

const specialties = [Specialty.ALLERGY_AND_IMMUNOLOGY, Specialty.ANESTHESIOLOGY]; // [1, 2]

const literalSpecialities = ["ALLERGY_AND_IMMUNOLOGY", "ANESTHESIOLOGY"];

const person = {
  dob: baseTime,
  gender: 2,
  first_name: "First",
  middle_name: "M",
  last_name: "Last",
  prefix: "prefix",
  suffix: "suffix"
};

const expectedPerson = {
  dateOfBirth: isoDateString,
  firstName: "First",
  gender: 2,
  middleName: "M",
  lastName: "Last",
  prefix: "prefix",
  suffix: "suffix"
};

const patient = {
  emr_id: "emr_id",
  emr_id_type: "emr_id_type",
  fhir_id: "fhir_id",
  id: "id",
  mrn: "mrn",
  person: person
};

const expectedPatient = {
  emrId: "emr_id",
  emrIdType: "emr_id_type",
  fhirId: "fhir_id",
  id: "id",
  mrn: "mrn",
  person: convertPersonFromProto(person)
};

const user = {
  id: "id",
  roles: [
    {
      type: 1
    }
  ],
  person: person,
  auth_id: "auth_id",
  email: "email",
  specialty: "specialty",
  specialties,
  timezone: "1519211809934",
  activation_sent: { seconds: 1662359400, nanos: 0 },
  organization_id: "organization_id",
  user_type: "user_type",
  phone_number: "phone_number",
  shared_user: false,
  enhanced_review: 1
};

const expectedUser = {
  id: "id",
  roles: [
    {
      type: 1
    }
  ],
  person: expectedPerson,
  authId: "auth_id",
  email: "email",
  specialty: "specialty",
  specialties,
  timezone: "1519211809934",
  activationSent: "2022-09-05T06:30:00.000Z",
  organizationId: "organization_id",
  userType: "user_type",
  phoneNumber: "phone_number",
  sharedUser: false,
  enhancedReview: 1
};

const appointment = {
  id: "appointment.id",
  starts_at: baseTime,
  ends_at: baseTime,
  appointment_type: 0,
  medical_procedure: "medical_procedure",
  reason: "reason",
  emr_id: "emr_id",
  emr_encounter_id: "emr_encounter_id",
  emr_department_id: "emr_department_id",
  emr_encounter_status: 0
};

const expectedAppointment = {
  id: "appointment.id",
  owner: expectedUser,
  patient: expectedPatient,
  startsAt: convertTimestamp(baseTime),
  endsAt: convertTimestamp(baseTime),
  type: 0,
  medicalProcedure: "medical_procedure",
  reason: "reason",
  emrId: "emr_id",
  emrEncounterId: "emr_encounter_id",
  emrDepartmentId: "emr_department_id",
  emrEncounterStatus: 0
};

const submissionInformation = {
  destinations: [Destination.SUKI_ONLY],
  try_all_destinations: false,
  emr_type: 0,
  emr_secondary_type: 0
};

const expectedSubmissionInformation = {
  destinations: [3],
  tryAllDestinations: false,
  emrType: 0,
  emrSecondaryType: 0
};

const EMRSubmissionStatus = {
  warning: {
    type: 0,
    message: "message"
  },
  final_destination: 0
};

const expectedEMRSubmissionStatus = {
  warning: {
    type: 0,
    message: "message"
  },
  finalDestination: 0
};

const EMRNoteType = {
  id: "emrNoteType.id",
  code: "emrNoteType.code",
  name: "emrNoteType.name",
  code_system: "emrNoteType.code_system"
};

const expectedEMRNoteType = {
  id: "emrNoteType.id",
  code: "emrNoteType.code",
  name: "emrNoteType.name",
  codeSystem: "emrNoteType.code_system"
};

const partialDictation = {
  partial_dictation_composition: true,
  read_only: false
};

const expectedPartialDictation = {
  partialDictationComposition: true,
  readOnly: false
};

const metadata = {
  status: 0,
  notetype_id: "notetype_id",
  name: "name",
  user: user,
  patient: { ...patient },
  appointment: { ...appointment },
  encounter_address: {
    line1: "encounter_address"
  },
  submission_information: submissionInformation,
  submission_status: EMRSubmissionStatus,
  review_message: "review_message",
  date_signed_off: baseTime,
  client_type: 0,
  created_with_s2: true,
  emr_note_type: EMRNoteType,
  pulled_note_from_emr: true,
  partial_dictation: partialDictation
};

const expectedMetadata = {
  status: 0,
  noteTypeId: "notetype_id",
  name: "name",
  user: expectedUser,
  patient: expectedPatient,
  appointment: convertAppointmentMetadataFromProto(metadata),
  encounterAddress: {
    line1: "encounter_address"
  },
  submissionInformation: expectedSubmissionInformation,
  submissionStatus: expectedEMRSubmissionStatus,
  reviewMessage: "review_message",
  dateSignedOff: convertTimestamp(baseTime),
  clientType: 0,
  createdWithS2: true,
  emrNoteType: expectedEMRNoteType,
  pulledNoteFromEmr: true,
  partialDictation: expectedPartialDictation
};

const sectionV2 = {
  id: "id",
  name: "name",
  navigation_keywords: ["navigation_keywords"],
  content_s2: null,
  status: 0,
  cursors: [
    {
      actor: 0,
      location: 0
    }
  ],
  diagnosis_entry: {
    diagnosis: {
      description: "description"
    }
  },
  pbc_section_flag: false
};

const expectedSectionV2 = {
  id: "id",
  name: "name",
  navigationKeywords: ["navigation_keywords"],
  content: null,
  status: 0,
  cursors: [
    {
      actor: 0,
      location: 0
    }
  ],
  diagnosisEntry: {
    diagnosis: {
      description: "description"
    }
  },
  pbcSectionFlag: false
};

const sectionsV2 = [{ ...sectionV2 }, { ...sectionV2, id: "id1" }];

const composition = {
  id: "id",
  user_id: "user_id",
  metadata: metadata,
  sections_s2: sectionsV2,
  created_at: baseTime,
  updated_at: baseTime,
  last_user_submit_at: baseTime,
  read_only: false
};

const section = {
  id: "id",
  name: "name",
  navigation_keywords: "navigation_keywords",
  content: "content",
  pbc_section_flag: "pbc_section_flag"
};

const sections = [section];

const expectedSection = {
  id: "id",
  name: "name",
  navigationKeywords: "navigation_keywords",
  content: "content",
  pbcSectionFlag: "pbc_section_flag"
};

const noteType = {
  id: "id",
  user_id: "user_id",
  name: "name",
  keywords: "keywords",
  sections: sections,
  destinations: [],
  specialties: specialties,
  emr_note_type: EMRNoteType,
  source: "source",
  content_type: "STATIC"
};

const expectedNoteType = {
  id: "id",
  userId: "user_id",
  name: "name",
  keywords: "keywords",
  sections: _get(noteType, "sections", []).map(convertSectionFromProto),
  destinations: [],
  specialties: literalSpecialities,
  emrNoteType: convertEMRNoteTypesFromProto(noteType.emr_note_type),
  source: "source",
  contentType: "STATIC"
};

const compositionForApptStatus = {
  id: "id",
  metadata: metadata
};

const expectedCompositionForApptStatus = {
  id: "id",
  status: 0,
  submissionStatus: expectedEMRSubmissionStatus,
  apptId: "appointment.id"
};

const noteForApptStatus = {
  id: "id",
  composition_id: "composition_id",
  metadata: metadata
};

const expectedNoteForApptStatus = {
  id: "id",
  compositionId: "composition_id",
  submissionStatus: expectedEMRSubmissionStatus,
  apptId: "appointment.id",
  metadata: { status: metadata.status }
};

const appointment1 = {
  id: "appointment.id",
  fhir_id: "fhir_id",
  starts_at: baseTime,
  ends_at: baseTime,
  appointment_type: "appointment_type",
  medical_procedure: "medical_procedure",
  reason: "reason",
  emr_id: "emr_id",
  fhir_encounter_id: "fhir_encounter_id",
  emr_encounter_id: "emr_encounter_id",
  emr_department_id: "emr_department_id",
  emr_encounter_status: "emr_encounter_status",
  owner: "owner",
  patient: "patient",
  composition_ids: ["id1", "id2"],
  compositionId: "compositionId",
  noteId: "noteId",
  noteStatus: "noteStatus",
  noteSubmissionStatus: "noteSubmissionStatus"
};

const expectedAppointment1 = {
  id: "appointment.id",
  fhirId: "fhir_id",
  startsAt: convertTimestamp(appointment1.starts_at),
  endsAt: convertTimestamp(appointment1.ends_at),
  type: "appointment_type",
  medicalProcedure: "medical_procedure",
  reason: "reason",
  emrId: "emr_id",
  fhirEncounterId: "fhir_encounter_id",
  emrEncounterId: "emr_encounter_id",
  emrDepartmentId: "emr_department_id",
  emrEncounterStatus: "emr_encounter_status",
  owner: "owner",
  patient: "patient",
  compositionIds: ["id1", "id2"],
  compositionId: "compositionId",
  noteId: "noteId",
  noteStatus: "noteStatus",
  noteSubmissionStatus: "noteSubmissionStatus"
};

const EMRUser = {
  suki_user_id: "suki_user_id",
  emr_user_id: "emr_user_id",
  emr_department_id: "emr_department_id",
  timezone: "timezone",
  emr_username: "emr_username",
  emr_department_name: "emr_department_name",
  emr_first_name: "emr_first_name",
  emr_last_name: "emr_last_name",
  emr_user_id_list: "emr_user_id_list",
  schedule_health_check_timestamp: baseTime,
  note_health_check_timestamp: baseTime
};

const expectedEMRUser = {
  sukiUserId: "suki_user_id",
  emrUserId: "emr_user_id",
  emrDepartmentId: "emr_department_id",
  timezone: "timezone",
  emrUsername: "emr_username",
  emrDepartmentName: "emr_department_name",
  emrFirstName: "emr_first_name",
  emrLastName: "emr_last_name",
  emrUserIdList: "emr_user_id_list",
  scheduleHealthcheckTimestamp: convertTimestamp(EMRUser.schedule_health_check_timestamp),
  noteHealthcheckTimestamp: convertTimestamp(EMRUser.note_health_check_timestamp)
};

const patientList = { patients: [{ ...patient }, { ...patient, id: "id2" }] };

const expectedPatientList = { patients: [{ ...expectedPatient, id: "id2" }, { ...expectedPatient }] };

const personToProto = {
  firstName: "firstName",
  middleName: "middleName",
  lastName: "lastName",
  prefix: "prefix",
  suffix: "suffix",
  gender: "MALE",
  dateOfBirth: isoDateString
};

const protoPerson = {
  first_name: "firstName",
  middle_name: "middleName",
  last_name: "lastName",
  prefix: "prefix",
  suffix: "suffix",
  gender: Gender.MALE,
  dob: baseTime
};

const patientToProto = {
  id: "id",
  fhirId: "fhirId",
  person: personToProto,
  mrn: "mrn",
  emrId: "emrId",
  emrIdType: "emrIdType"
};
const protoPatient = {
  id: "id",
  fhir_id: "fhirId",
  person: protoPerson,
  mrn: "mrn",
  emr_id: "emrId",
  emr_id_type: "emrIdType"
};

const blockToProto = [
  {
    content: "test content",
    sectionId: "11111111",
    fields: []
  }
];
const protoBlock = [
  {
    content: "test content",
    section_id: "11111111",
    fields: []
  }
];

const tagsToProto = [
  {
    name: { value: "test", aliases: [] },
    type: SCRIPT_TAG.TAG
  }
];
const protoTags = [
  {
    name: { value: "test", aliases: [] },
    type: 2
  }
];

const macroToProto = {
  id: "id",
  userId: "userId",
  tags: [],
  blocks: [],
  specialties: undefined,
  source: "source",
  contentType: "STATIC"
};

const protoMacro = {
  id: "id",
  user_id: "userId",
  tags: [],
  blocks: [],
  specialties: undefined,
  source: "source",
  content_type: "STATIC"
};

const diagnosis = {
  icd_code: "icd_code",
  description: "description",
  snomed_code: "snomed_code",
  snomed_description: "snomed_description",
  hcc_code: "hcc_code",
  panel_ranking: 1,
  billable: true,
  suggestion_type: 0
};

const expectedDiagnosis = {
  icdCode: "icd_code",
  description: "description",
  snomedCode: "snomed_code",
  snomedDescription: "snomed_description",
  hccCode: "hcc_code",
  panelRanking: 1,
  billable: true,
  suggestionType: 0
};

const diagnosisWithChildren = {
  diagnosis: diagnosis,
  children: [
    {
      diagnosis: diagnosis,
      children: [],
      score: 0
    }
  ],
  score: 1
};

const expectedDiagnosisWithChildren = {
  diagnosis: expectedDiagnosis,
  children: [
    {
      diagnosis: expectedDiagnosis,
      children: [],
      score: 0
    }
  ],
  score: 1
};

const diagnosisEntry = {
  diagnosis: {
    icd_code: "icd_code",
    description: "description",
    snomed_code: "snomed_code",
    snomed_description: "snomed_description",
    hcc_code: "hcc_code",
    panel_ranking: 1,
    billable: false,
    suggestion_type: 0
  },
  detailed_display: {
    tags: [{ text: "text" }]
  },
  confirm_status: 0
};

const expectedDiagnosisEntry = {
  diagnosis: {
    icdCode: "icd_code",
    description: "description",
    snomedCode: "snomed_code",
    snomedDescription: "snomed_description",
    hccCode: "hcc_code",
    panelRanking: 1,
    billable: false,
    suggestionType: 0
  },
  detailedDisplay: {
    tags: [{ text: "text" }]
  },
  confirmStatus: 0
};

const sectionS2 = {
  ...sectionV2,
  content_s2: {},
  diagnosis_entry: diagnosisEntry,
  hash: "hash",
  plain_text: "plain_text",
  cursor_position: 1,
  section_index: 1,
  subsection_index: 1,
  cursor_position_name: 1,
  edit_location: 1,
  update_type: 0,
  ops_status_flag: 1,
  number_of_cursor_events: 1
};
const expectedSectionS2 = {
  ...expectedSectionV2,
  content: "{}",
  diagnosisEntry: expectedDiagnosisEntry,
  hash: "hash",
  plainText: "plain_text",
  cursorPosition: 1,
  sectionIndex: 1,
  subsectionIndex: 1,
  cursorPositionName: 1,
  editLocation: 1,
  updateType: 0,
  opsStatusFlag: 1,
  numberOfCursorEvents: 1
};

describe("Conversion helpers", () => {
  it("convertPersonFromProto should work correctly", () => {
    expect(convertPersonFromProto(person)).toStrictEqual(expectedPerson);
  });

  it("convertUserFromProto should work correctly", () => {
    expect(convertUserFromProto(user)).toStrictEqual(expectedUser);
  });

  it("convertEMRSubmissionInformationFromProto should work correctly", () => {
    expect(convertEMRSubmissionInformationFromProto(submissionInformation)).toStrictEqual(
      expectedSubmissionInformation
    );
  });

  it("convertPatientFromProto should work correctly", () => {
    expect(convertPatientFromProto(patient)).toStrictEqual(expectedPatient);
  });

  it("convertAppointmentMetadataFromProto Appointment should work correctly", () => {
    expect(convertAppointmentMetadataFromProto(metadata)).toStrictEqual(expectedAppointment);
  });

  it("convertEMRSubmissionStatusFromProto should work correctly", () => {
    expect(convertEMRSubmissionStatusFromProto(EMRSubmissionStatus)).toStrictEqual(expectedEMRSubmissionStatus);
  });

  it("convertEMRNoteTypesFromProto should work correctly", () => {
    expect(convertEMRNoteTypesFromProto(EMRNoteType)).toStrictEqual(expectedEMRNoteType);
  });

  it("convertEMRNoteTypesToProto should work correctly", () => {
    expect(convertEMRNoteTypesToProto(expectedEMRNoteType)).toStrictEqual(EMRNoteType);
  });

  it("convertMetadataFromProto should work correctly", () => {
    expect(convertMetadataFromProto(metadata)).toStrictEqual(expectedMetadata);
  });

  it("convertPartialDictationFromProto should work correctly", () => {
    expect(convertPartialDictationFromProto(partialDictation)).toStrictEqual(expectedPartialDictation);
  });

  it("convertSectionV2FromS2Proto should work correctly", () => {
    expect(convertSectionV2FromS2Proto(sectionV2)).toStrictEqual(expectedSectionV2);
  });

  it("convertCompositionFromProto should work correctly", () => {
    let readOnly = composition.read_only;
    if (!readOnly && _get(composition, "metadata.status") === NOTE_STATUS.SCRIBE_IS_DONE) {
      readOnly = true;
    }
    const expectedComposition = {
      id: "id",
      userId: "user_id",
      metadata: convertMetadataFromProto(metadata),
      sections: convertV2SectionsFromS2Proto(composition.sections_s2),
      sectionsS2: composition.sections_s2,
      createdAt: convertTimestamp(composition.created_at),
      updatedAt: convertTimestamp(composition.updated_at),
      lastUserSubmitAt: convertTimestamp(composition.last_user_submit_at),
      readOnly: readOnly
    };
    expect(convertCompositionFromProto(composition)).toStrictEqual(expectedComposition);
  });

  it("convertSectionFromProto should work correctly", () => {
    expect(convertSectionFromProto(section)).toStrictEqual(expectedSection);
  });

  it("convertSectionToProto should work correctly", () => {
    expect(convertSectionToProto(expectedSection)).toStrictEqual(section);
  });

  it("convertNoteTypeFromProto should work correctly", () => {
    expect(convertNoteTypeFromProto(noteType)).toStrictEqual(expectedNoteType);
  });

  it("convertNoteTypeToProto should work correctly", () => {
    expect(convertNoteTypeToProto(expectedNoteType)).toStrictEqual(noteType);
  });

  it("convertCompositionFromProtoForAppointmentStatus should work correctly", () => {
    expect(convertCompositionFromProtoForAppointmentStatus(compositionForApptStatus)).toStrictEqual(
      expectedCompositionForApptStatus
    );
  });

  it("convertNoteFromProtoForAppointmentStatus should work correctly", () => {
    expect(convertNoteFromProtoForAppointmentStatus(noteForApptStatus)).toStrictEqual(expectedNoteForApptStatus);
  });

  it("convertAppointmentFromProto should work correctly", () => {
    expect(convertAppointmentFromProto(appointment1)).toStrictEqual(expectedAppointment1);
  });

  it("convertEMRUserFromProto should work correctly", () => {
    expect(convertEMRUserFromProto(EMRUser)).toStrictEqual(expectedEMRUser);
  });

  it("convertPatientListFromProto should work correctly", () => {
    expect(convertPatientListFromProto(patientList)).toStrictEqual(expectedPatientList);
  });

  it("convertGenderToProto should work correctly", () => {
    const data = [0, 1, 2, 3, 7];
    const expectedData = ["UNKNOWN", "FEMALE", "MALE", 0, 0];

    expect(data.map(convertGenderToProto)).toStrictEqual(expectedData);
  });

  it("convertPersonToProto should work correctly", () => {
    expect(convertPersonToProto(personToProto)).toStrictEqual(protoPerson);
  });

  it("convertPatientToProto should work correctly", () => {
    expect(convertPatientToProto(patientToProto)).toStrictEqual(protoPatient);
  });

  it("convertBlocksToProto should work correctly", () => {
    expect(convertBlocksToProto(blockToProto)).toStrictEqual(protoBlock);
  });

  it("convertTagTypeToProto should work correctly", () => {
    expect(convertTagTypeToProto("BLOCK_TAG")).toStrictEqual(3);
  });

  it("convertTagsToProto should work correctly", () => {
    expect(convertTagsToProto(tagsToProto)).toStrictEqual(protoTags);
  });

  it("convertBlocksFromProto should work correctly", () => {
    expect(convertBlocksFromProto(protoBlock)).toStrictEqual(blockToProto);
  });

  it("convertTagsFromProto should work correctly", () => {
    expect(convertTagsFromProto(protoTags)).toStrictEqual(protoTags);
  });

  it("convertMacroToProto should work correctly", () => {
    expect(convertMacroToProto(macroToProto)).toStrictEqual(protoMacro);
  });

  it("convertMacroFromProto should work correctly", () => {
    expect(convertMacroFromProto(protoMacro)).toStrictEqual(macroToProto);
  });

  it("convertDiagnosisFromProto should work correctly", () => {
    expect(convertDiagnosisFromProto(diagnosis)).toStrictEqual(expectedDiagnosis);
  });

  it("convertDiagnosisWithChildrenFromProto should work correctly", () => {
    expect(convertDiagnosisWithChildrenFromProto(diagnosisWithChildren)).toStrictEqual(expectedDiagnosisWithChildren);
  });

  it("convertDynamicChartDataFromProto should work correctly", () => {
    const dynamicChartData = {
      type: "type",
      content: "content",
      recorded_date: baseTime,
      error: "error",
      json_content: "{}"
    };

    const expectedDynamicChartData = {
      type: "type",
      content: "content",
      recordedDate: isoDateString,
      error: "error",
      jsonContent: "{}"
    };

    expect(convertDynamicChartDataFromProto(dynamicChartData)).toStrictEqual(expectedDynamicChartData);
  });

  it("convertExistingDiagnosisToProto should work correctly", () => {
    const existingDiagnosis = {
      title: "title",
      icdCode: "icdCode",
      icdDescription: "icdDescription",
      snomedCode: "snomedCode"
    };
    const expectedExistingDiagnosis = {
      title: "title",
      icd_code: "icdCode",
      icd_description: "icdDescription",
      snomed_code: "snomedCode"
    };
    expect(convertExistingDiagnosisToProto(existingDiagnosis)).toStrictEqual(expectedExistingDiagnosis);
  });

  it("convertHCCSuggestionFromProto should work correctly", () => {
    const suggestion = {
      diagnosis,
      suggestion_type: "suggestion_type"
    };
    const expectedSuggestion = {
      diagnosis: expectedDiagnosis,
      suggestionType: "suggestion_type"
    };
    expect(convertHCCSuggestionFromProto(suggestion)).toStrictEqual(expectedSuggestion);
  });

  it("convertMedicationListFromProto should work correctly", () => {
    const medicationsList = {
      medications: [
        {
          id: "id",
          emr_medication_name: "emr_medication_name",
          structured_sig: {
            dosage: "dosage",
            dosage_unit: "dosage_unit",
            route: "route",
            frequency: "frequency"
          },
          unstructured_sig: "unstructured_sig"
        }
      ]
    };
    const expectedMedicationsList = [
      {
        id: "id",
        emrMedicationName: "emr_medication_name",
        structuredSig: {
          dosage: "dosage",
          dosageUnit: "dosage_unit",
          route: "route",
          frequency: "frequency"
        },
        unstructuredSig: "unstructured_sig"
      }
    ];

    expect(convertMedicationListFromProto(medicationsList)).toStrictEqual(expectedMedicationsList);
  });

  it("convertOrganizationFromProto should work correctly", () => {
    const organization = {
      id: "id",
      name: "name",
      enhanced_review: "enhanced_review",
      gcp_account_id: "gcp_account_id"
    };
    const expectedOrganization = {
      id: "id",
      name: "name",
      enhancedReview: "enhanced_review",
      gcpAccountId: "gcp_account_id"
    };
    expect(convertOrganizationFromProto(organization)).toStrictEqual(expectedOrganization);
  });

  it("convertPageResponseFromProto should work correctly", () => {
    const pageResponse = {
      cursors: {
        before: 1,
        after: 2
      }
    };
    const expectedPageResponse = {
      pageCursors: {
        before: 1,
        after: 2
      }
    };
    expect(convertPageResponseFromProto(pageResponse)).toStrictEqual(expectedPageResponse);
  });

  it("convertPatientNoteFromProto should work correctly", () => {
    const patientNote = {
      id: "id",
      composition_id: "composition_id",
      metadata,
      sections: sectionsV2,
      user_id: "user_id",
      org_id: "org_id",
      sections_s2: sectionsV2,
      composition_created_at: baseTime
    };
    const expectedPatientNote = {
      noteId: "id",
      compositionId: "composition_id",
      metadata: expectedMetadata,
      sections: convertV2SectionsFromS2Proto(sectionsV2),
      compositionCreatedAt: isoDateString
    };
    expect(convertPatientNoteFromProto(patientNote)).toStrictEqual(expectedPatientNote);
  });

  it("convertDiagnosisEntryFromProto should work correctly", () => {
    expect(convertDiagnosisEntryFromProto(diagnosisEntry)).toStrictEqual(expectedDiagnosisEntry);
  });

  it("convertS2SectionFromProto should work correctly", () => {
    expect(convertS2SectionFromProto(sectionS2)).toStrictEqual(expectedSectionS2);
  });

  it("convertS2SectionsFromProto should work correctly", () => {
    expect(convertS2SectionsFromProto([sectionS2])).toStrictEqual([expectedSectionS2]);
  });

  it("convertSectionS2ToProto should work correctly", () => {
    expect(convertSectionS2ToProto(expectedSectionS2)).toStrictEqual(sectionS2);
  });

  it("convertSmsCompositionFromProtoForS2Clients should work correctly", () => {
    const expectedSmsComposition = {
      id: "id",
      userId: "user_id",
      metadata: convertMetadataFromProto(metadata),
      sections: [],
      organizationId: undefined,
      sectionsS2: composition.sections_s2,
      createdAt: convertTimestamp(composition.created_at),
      updatedAt: convertTimestamp(composition.updated_at),
      lastUserSubmitAt: convertTimestamp(composition.last_user_submit_at),
      readOnly: false
    };
    expect(convertSmsCompositionFromProtoForS2Clients(composition, false)).toStrictEqual(expectedSmsComposition);
  });

  it("convertSpecialtiesToProto should work correctly", () => {
    expect(convertSpecialtiesToProto(specialties)).toStrictEqual(literalSpecialities);
  });

  it("transformInvalidStatus should work correctly", () => {
    const hasScribeEditsContent = [{ source: s2SourceTypes.TYPED_SCRIBE as keyof typeof TextSource }];
    expect(transformInvalidStatus(hasScribeEditsContent)).toStrictEqual(OPS_STATUS.OPS_PROCESSED);

    const hasForProcessingEditsContent = [{ source: s2SourceTypes.ASR_NVOQ as keyof typeof TextSource }];
    expect(transformInvalidStatus(hasForProcessingEditsContent)).toStrictEqual(OPS_STATUS.NEEDS_OPS_PROCESSING);

    const emptyContent = [];
    expect(transformInvalidStatus(emptyContent)).toStrictEqual(OPS_STATUS.NO_OPS_PROCESSING_REQUIRED);
  });
});
