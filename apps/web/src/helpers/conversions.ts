import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { AppointmentTypes, s2SourceTypes, SectionUpdateTypes } from "@suki-web/suki-business";

import {
  Destination,
  EnhancedReviewOptions,
  Gender,
  MacrosTagType,
  NOTE_STATUS,
  OPS_STATUS,
  RoleType,
  SCRIPT_TAG,
  SectionUpdatePath,
  Specialty
} from "../constants";
import { Content } from "../grpc/generated/Content";
import {
  _learningmotors_pb_composer_SectionS2_SectionUpdateType,
  SectionS2
} from "../grpc/generated/learningmotors/pb/composer/SectionS2";
import { User } from "../grpc/generated/learningmotors/pb/user/User";
import { Timestamp } from "../grpc/generated/google/protobuf/Timestamp";
import { Diagnosis } from "../grpc/generated/suki/pb/diagnosis/Diagnosis";
import { Person } from "../grpc/generated/learningmotors/pb/common/Person";
import { filterContent, getContentType, getDateFromString } from "./general";
import { Patient } from "../grpc/generated/learningmotors/pb/patients/Patient";
import { Metadata } from "../grpc/generated/learningmotors/pb/composer/Metadata";
import { SubmissionStatus } from "../grpc/generated/suki/pb/emr/SubmissionStatus";
import { Composition } from "../grpc/generated/learningmotors/pb/composer/Composition";
import { EmrNoteType } from "../grpc/generated/learningmotors/pb/emr_notetypes/EmrNoteType";
import { SubmissionInformation } from "../grpc/generated/suki/pb/emr/SubmissionInformation";
import { DiagnosisEntry } from "../grpc/generated/learningmotors/pb/composer/DiagnosisEntry";
import { PartialDictation } from "../grpc/generated/learningmotors/pb/composer/PartialDictation";
import { DiagnosisWithChildren } from "../grpc/generated/suki/pb/diagnosis/DiagnosisWithChildren";
import { EnhancedReviewOption } from "../grpc/generated/learningmotors/pb/user/EnhancedReviewOption";
import { _learningmotors_pb_user_Role_RoleType } from "../grpc/generated/learningmotors/pb/user/Role";
import { _learningmotors_pb_Appointment_AppointmentType } from "../grpc/generated/learningmotors/pb/Appointment";

const convertTimestamp = (timestamp: Timestamp) =>
  timestamp ? new Date(+timestamp.seconds * 1000).toISOString() : null;

const convertPersonFromProto = (person: Person) => ({
  firstName: person?.first_name,
  middleName: person?.middle_name,
  lastName: person?.last_name,
  prefix: person?.prefix,
  suffix: person?.suffix,
  gender: person?.gender,
  dateOfBirth: convertTimestamp(person?.dob)
});

const convertUserFromProto = (user: User) => ({
  id: user.id,
  roles: user.roles,
  person: convertPersonFromProto(user.person),
  authId: user.auth_id,
  email: user.email,
  specialty: user.specialty,
  specialties: user.specialties,
  timezone: user.timezone,
  userType: user.user_type,
  activationSent: convertTimestamp(user.activation_sent),
  organizationId: user.organization_id,
  phoneNumber: user.phone_number,
  sharedUser: user.shared_user,
  enhancedReview: user.enhanced_review
});

const convertEMRSubmissionInformationFromProto = (emrSubmissionInformation: SubmissionInformation) => ({
  destinations: emrSubmissionInformation.destinations,
  tryAllDestinations: emrSubmissionInformation.try_all_destinations,
  emrType: emrSubmissionInformation.emr_type,
  emrSecondaryType: emrSubmissionInformation.emr_secondary_type
});

const convertPatientFromProto = (patient: Patient) => ({
  id: patient.id,
  fhirId: patient.fhir_id,
  person: convertPersonFromProto(patient.person),
  mrn: patient.mrn,
  emrId: patient.emr_id,
  emrIdType: patient.emr_id_type
});

const convertDiagnosisFromProto = (diagnosis: Diagnosis) => ({
  icdCode: diagnosis.icd_code,
  icdDescription: diagnosis.icd_description,
  snomedCode: diagnosis.snomed_code,
  snomedDescription: diagnosis.snomed_description,
  hccCode: diagnosis.hcc_code,
  panelRanking: diagnosis.panel_ranking,
  billable: diagnosis.billable,
  problemLabel: diagnosis.problem_label,
  suggestionType: diagnosis.suggestion_type
});

const convertDiagnosisWithChildrenFromProto = (result: DiagnosisWithChildren) => {
  return {
    diagnosis: convertDiagnosisFromProto(result.diagnosis),
    children: result.children.map(convertDiagnosisWithChildrenFromProto),
    score: result.score
  };
};

const convertAppointmentMetadataFromProto = ({ appointment, user, patient }: Metadata) => ({
  id: appointment.id,
  owner: user && convertUserFromProto(user),
  patient: patient && convertPatientFromProto(patient),
  startsAt: convertTimestamp(appointment.starts_at),
  endsAt: convertTimestamp(appointment.ends_at),
  type: appointment.appointment_type,
  medicalProcedure: appointment.medical_procedure,
  reason: appointment.reason,
  emrId: appointment.emr_id,
  emrEncounterId: appointment.emr_encounter_id,
  emrDepartmentId: appointment.emr_department_id,
  emrEncounterStatus: appointment.emr_encounter_status
});

const convertEMRSubmissionStatusFromProto = (emrSubmissionStatus: SubmissionStatus) => ({
  warning: emrSubmissionStatus?.warning,
  finalDestination: emrSubmissionStatus?.final_destination
});

const convertEMRNoteTypesFromProto = (emrNoteType: EmrNoteType) => ({
  id: emrNoteType.id,
  code: emrNoteType.code,
  name: emrNoteType.name,
  codeSystem: emrNoteType.code_system
});

const convertPartialDictationFromProto = (pd: PartialDictation) => ({
  partialDictationComposition: pd?.partial_dictation_composition,
  readOnly: pd?.read_only
});

const convertMetadataFromProto = (metadata: Metadata) => ({
  status: metadata.status,
  noteTypeId: metadata.notetype_id,
  name: metadata.name,
  user: metadata.user && _get(metadata, "user.person") && convertUserFromProto(metadata.user),
  patient: metadata.patient && _get(metadata, "patient.person") && convertPatientFromProto(metadata.patient),
  appointment: metadata.appointment && convertAppointmentMetadataFromProto(metadata),
  encounterAddress: metadata.encounter_address,
  submissionInformation:
    metadata.submission_information && convertEMRSubmissionInformationFromProto(metadata.submission_information),
  submissionStatus: metadata.submission_status && convertEMRSubmissionStatusFromProto(metadata.submission_status),
  reviewMessage: metadata.review_message,
  dateSignedOff: convertTimestamp(metadata.date_signed_off),
  clientType: metadata.client_type,
  createdWithS2: metadata.created_with_s2,
  emrNoteType: metadata.emr_note_type && convertEMRNoteTypesFromProto(metadata.emr_note_type),
  pulledNoteFromEmr: metadata.pulled_note_from_emr,
  partialDictation: metadata.partial_dictation && convertPartialDictationFromProto(metadata.partial_dictation)
});

const convertSectionV2FromS2Proto = (section: SectionS2) => ({
  id: section.id,
  name: section.name,
  navigationKeywords: section.navigation_keywords,
  content: section.content_s2 && JSON.stringify(section.content_s2),
  status: section.status,
  cursors: section.cursors,
  diagnosisEntry: section.diagnosis_entry && convertDiagnosisEntryFromProto(section.diagnosis_entry),
  subsectionIndex: section.subsection_index,
  pbcSectionFlag: section.pbc_section_flag,
  plainText: section.plain_text,
  dictationTag: section.dictation_tag,
  readOnly: section.read_only
});

const convertV2SectionsFromS2Proto = (s2Sections: SectionS2[]) => {
  const sectionsS2 = [...s2Sections];
  sectionsS2.sort((a, b) => {
    if (a.section_index === b.section_index) {
      return a.subsection_index > b.subsection_index ? 1 : -1;
    } else {
      return a.section_index > b.section_index ? 1 : -1;
    }
  });

  return sectionsS2.map(convertSectionV2FromS2Proto);
};

const convertCompositionFromProto = (composition: Composition) => {
  let readOnly = composition.read_only;
  if (!readOnly && _get(composition, "metadata.status") === NOTE_STATUS.SCRIBE_IS_DONE) {
    readOnly = true;
  }

  return {
    id: composition.id,
    userId: composition.user_id,
    metadata: composition.metadata && convertMetadataFromProto(composition.metadata),
    sections: composition.sections_s2 && convertV2SectionsFromS2Proto(composition.sections_s2),
    sectionsS2: composition.sections_s2 && convertS2SectionsFromProto(composition.sections_s2),
    createdAt: convertTimestamp(composition.created_at),
    updatedAt: convertTimestamp(composition.updated_at),
    lastUserSubmitAt: convertTimestamp(composition.last_user_submit_at),
    readOnly
  };
};

const convertNoteFromProto = (note: any) => {
  let readOnly = note.read_only;
  if (!readOnly && _get(note, "metadata.status") === NOTE_STATUS.SCRIBE_IS_DONE) {
    readOnly = true;
  }

  return {
    compositionId: note.composition_id,
    createdAt: convertTimestamp(note.composition_created_at),
    metadata: note.metadata && convertMetadataFromProto(note.metadata),
    noteId: note.id,
    sections: note.sections_s2 && convertV2SectionsFromS2Proto(note.sections_s2),
    sectionsS2: note.sections_s2,
    readOnly,
    userId: note.user_id
  };
};

const convertSpecialtiesToProto = (specialties) => specialties && specialties.map((s) => Specialty[s]);
const convertSpecialtiesFromProto = (specialties) =>
  specialties && specialties.map((s) => Object.keys(Specialty).find((key) => Specialty[key] === s));

const convertSectionFromProto = (section) => ({
  id: section.id,
  name: section.name,
  navigationKeywords: section.navigation_keywords,
  content: section.content,
  pbcSectionFlag: section.pbc_section_flag
});

const convertNoteTypeFromProto = (noteType) => ({
  id: noteType.id,
  userId: noteType.user_id,
  name: noteType.name,
  keywords: noteType.keywords,
  sections: _get(noteType, "sections", []).map(convertSectionFromProto),
  destinations: noteType.destinations,
  specialties: convertSpecialtiesFromProto(noteType.specialties),
  emrNoteType: noteType.emr_note_type && convertEMRNoteTypesFromProto(noteType.emr_note_type),
  source: noteType.source,
  contentType: noteType.content_type
});

const convertCompositionFromProtoForAppointmentStatus = (composition) => ({
  id: composition.id,
  status: _get(composition, "metadata.status"),
  submissionStatus:
    _get(composition, "metadata.submission_status") &&
    convertEMRSubmissionStatusFromProto(_get(composition, "metadata.submission_status")),
  apptId: _get(composition, "metadata.appointment.id")
});

const convertNoteFromProtoForAppointmentStatus = (note) => ({
  id: note.id,
  compositionId: note.composition_id,
  submissionStatus:
    _get(note, "metadata.submission_status") &&
    convertEMRSubmissionStatusFromProto(_get(note, "metadata.submission_status")),
  apptId: _get(note, "metadata.appointment.id"),
  metadata: { status: note.metadata.status }
});

const convertAppointmentFromProto = (appointment) => ({
  id: appointment.id,
  fhirId: appointment.fhir_id,
  startsAt: appointment.starts_at ? convertTimestamp(appointment.starts_at) : new Date().toISOString(),
  endsAt: appointment.ends_at ? convertTimestamp(appointment.ends_at) : new Date().toISOString(),
  type: appointment.appointment_type,
  medicalProcedure: appointment.medical_procedure,
  reason: appointment.reason,
  emrId: appointment.emr_id,
  fhirEncounterId: appointment.fhir_encounter_id,
  emrEncounterId: appointment.emr_encounter_id,
  emrDepartmentId: appointment.emr_department_id,
  emrEncounterStatus: appointment.emr_encounter_status,
  owner: appointment.owner,
  patient: appointment.patient,
  compositionIds: appointment.composition_ids,
  // Added in the web server layer
  compositionId: appointment.compositionId,
  noteId: appointment.noteId,
  noteStatus: appointment.noteStatus,
  noteSubmissionStatus: appointment.noteSubmissionStatus
});

const convertAppointmentTypeToProto = (type) => {
  switch (type) {
    case AppointmentTypes.NEW:
      return _learningmotors_pb_Appointment_AppointmentType.NEW;
    case AppointmentTypes.FOLLOW_UP:
      return _learningmotors_pb_Appointment_AppointmentType.FOLLOW_UP;
    case AppointmentTypes.PRE_OP:
      return _learningmotors_pb_Appointment_AppointmentType.PRE_OP;
    case AppointmentTypes.POST_OP:
      return _learningmotors_pb_Appointment_AppointmentType.POST_OP;
    case AppointmentTypes.EHR_GENERATED:
      return _learningmotors_pb_Appointment_AppointmentType.EHR_GENERATED;
    case AppointmentTypes.NON_EMR_USER_GENERATED:
      return _learningmotors_pb_Appointment_AppointmentType.NON_EMR_USER_GENERATED;
    case AppointmentTypes.DEFAULT:
    default:
      return _learningmotors_pb_Appointment_AppointmentType.DEFAULT;
  }
};

const convertAppointmentToProto = (appointment) => ({
  id: appointment?.id,
  fhir_id: appointment?.fhirId,
  ends_at: getDateFromString(appointment?.endsAt),
  medical_procedure: appointment?.medicalProcedure,
  owner_id: appointment?.ownerId,
  patient_id: appointment?.patientId,
  reason: appointment?.reason,
  emr_id: appointment?.emrId,
  fhir_encounter_id: appointment?.fhirEncounterId,
  emr_encounter_id: appointment?.emrEncounterId,
  emr_encounter_status: appointment?.emrEncounterStatus,
  emr_department_id: appointment?.emrDepartmentId,
  starts_at: getDateFromString(appointment?.startsAt),
  appointment_type: convertAppointmentTypeToProto(appointment?.type)
});

const convertEMRUserFromProto = (user) => {
  return {
    sukiUserId: user.suki_user_id,
    emrUserId: user.emr_user_id,
    emrDepartmentId: user.emr_department_id,
    timezone: user.timezone,
    emrUsername: user.emr_username,
    emrDepartmentName: user.emr_department_name,
    emrFirstName: user.emr_first_name,
    emrLastName: user.emr_last_name,
    emrUserIdList: user.emr_user_id_list,
    scheduleHealthcheckTimestamp: convertTimestamp(user.schedule_health_check_timestamp),
    noteHealthcheckTimestamp: convertTimestamp(user.note_health_check_timestamp)
  };
};

const convertPatientListFromProto = (patientList) => ({
  patients: patientList.patients.map(convertPatientFromProto).slice().reverse()
});

const convertPatientNoteFromProto = (note) => {
  const sectionsS2 = note.sections_s2;
  let sectionsV2 = note.sections;
  if (sectionsS2 && sectionsS2.length) {
    sectionsV2 = convertV2SectionsFromS2Proto(sectionsS2);
  } else if (sectionsV2 && sectionsV2.length) {
    console.info("This is an older V2 patient note requested by a older V2 client. No conversion needed.");
  }

  return {
    noteId: note.id,
    compositionId: note.composition_id,
    metadata: note.metadata && convertMetadataFromProto(note.metadata),
    sectionsS2: sectionsV2, // we read only sectionS2 on client side, will keep it same for note/composition
    compositionCreatedAt: note.composition_created_at && convertTimestamp(note.composition_created_at)
  };
};

const convertPageResponseFromProto = ({ cursors: { before, after } }) => ({
  pageCursors: {
    before: before,
    after: after
  }
});

const convertGenderToProto = (gender) => Gender[gender] || Gender.UNKNOWN;

const convertPersonToProto = (person) => ({
  first_name: person.firstName,
  middle_name: person.middleName,
  last_name: person.lastName,
  prefix: person.prefix,
  suffix: person.suffix,
  gender: convertGenderToProto(person.gender),
  dob: getDateFromString(person.dateOfBirth)
});

const convertPatientToProto = (patient) => ({
  id: patient.id,
  fhir_id: patient.fhirId,
  person: convertPersonToProto(patient.person),
  mrn: patient.mrn,
  emr_id: patient.emrId,
  emr_id_type: patient.emrIdType
});

const convertMacroToProto = (macro) => ({
  id: macro.id,
  user_id: macro.userId,
  tags: convertTagsToProto(macro.tags),
  blocks: convertBlocksToProto(macro.blocks),
  specialties: convertSpecialtiesToProto(macro.specialties),
  source: macro.source,
  content_type: getContentType(macro.blocks)
});

const convertMacroFromProto = (macro) => ({
  id: macro.id,
  userId: macro.user_id,
  tags: convertTagsFromProto(macro.tags),
  blocks: convertBlocksFromProto(macro.blocks),
  specialties: macro.specialties,
  source: macro.source,
  contentType: macro.content_type
});

const convertTagsFromProto = (tags) =>
  tags?.map((t) => ({
    name: t.name,
    type: t.type
  }));

const convertBlocksFromProto = (blocks) =>
  blocks?.map((b) => ({
    sectionId: b.section_id,
    fields: convertTagsFromProto(b.fields),
    content: b.content
  }));

const convertTagsToProto = (tags) =>
  tags?.map((t) => ({
    name: {
      value: t.name.value,
      aliases: t.name.aliases || []
    },
    type: convertTagTypeToProto(t.type)
  }));

const convertTagTypeToProto = (type) => {
  switch (type) {
    case SCRIPT_TAG.TYPE:
      return MacrosTagType.MACRO_TYPE;
    case SCRIPT_TAG.TAG:
      return MacrosTagType.MACRO_TAG;
    case SCRIPT_TAG.BLOCK:
      return MacrosTagType.BLOCK_TAG;
    case SCRIPT_TAG.NAME:
      return MacrosTagType.MACRO_NAME;
    default:
      return MacrosTagType.DEFAULT;
  }
};

const convertBlocksToProto = (blocks) =>
  blocks &&
  blocks.map((b) => ({
    section_id: b.sectionId,
    fields: convertTagsToProto(b.fields),
    content: b.content
  }));
const convertSectionToProto = (section) => ({
  id: section.id,
  name: section.name,
  navigation_keywords: section.navigationKeywords,
  content: section.content,
  pbc_section_flag: section.pbcSectionFlag
});

const convertEMRDestinationToProto = (destination) => Destination[destination] || Destination.UNKNOWN;

const convertEMRNoteTypesToProto = (n) => ({
  id: n.id,
  code: n.code,
  name: n.name,
  code_system: n.codeSystem
});

const convertNoteTypeToProto = (noteType) => {
  if (_isEmpty(noteType)) return;
  return {
    id: noteType.id,
    user_id: noteType.userId,
    name: noteType.name,
    keywords: noteType.keywords,
    sections: _get(noteType, "sections", []).map(convertSectionToProto),
    destinations: _get(noteType, "destinations", []).map(convertEMRDestinationToProto),
    specialties: convertSpecialtiesToProto(noteType.specialties),
    emr_note_type: noteType.emrNoteType && convertEMRNoteTypesToProto(noteType.emrNoteType),
    source: noteType.source,
    content_type: getContentType(noteType.sections)
  };
};

const convertOrganizationFromProto = (organization) => ({
  id: organization.id,
  name: organization.name,
  enhancedReview: organization.enhanced_review,
  gcpAccountId: organization.gcp_account_id,
  isSukiXOrganization: organization.is_sukix_org || false
});

const convertDiagnosisEntryFromProto = (de: DiagnosisEntry) => ({
  diagnosis: de.diagnosis && convertDiagnosisFromProto(de.diagnosis),
  detailedDisplay: de.detailed_display,
  confirmStatus: de.confirm_status
});

const transformInvalidStatus = (content: Content[]) => {
  let opsStatusFlag = OPS_STATUS.NO_OPS_PROCESSING_REQUIRED;
  if (!_isEmpty(content)) {
    let hasScribeEdits = false;
    let hasForProcessingEdits = false;
    content.forEach((c) => {
      if (c.source === s2SourceTypes.TYPED_SCRIBE) {
        hasScribeEdits = true;
      } else if (
        c.source === s2SourceTypes.ASR_NVOQ ||
        c.source === s2SourceTypes.ASR_GOOGLE ||
        c.source === s2SourceTypes.ASR_HOMEGROWN ||
        c.source === s2SourceTypes.SCRIPT ||
        c.source === s2SourceTypes.COPY_FORWARD ||
        c.source === s2SourceTypes.SCRIPT_CHANGE
      ) {
        hasForProcessingEdits = true;
      }
    });
    if (hasForProcessingEdits) {
      opsStatusFlag = OPS_STATUS.NEEDS_OPS_PROCESSING;
    } else if (hasScribeEdits) {
      opsStatusFlag = OPS_STATUS.OPS_PROCESSED;
    }
  }
  return opsStatusFlag;
};

const convertS2SectionFromProto = (s: SectionS2) => ({
  id: s.id,
  name: s.name,
  navigationKeywords: s.navigation_keywords,
  content: s.content_s2 && JSON.stringify(filterContent(s.content_s2)),
  status: s.status,
  cursors: s.cursors,
  hash: s.hash,
  diagnosisEntry: s.diagnosis_entry && convertDiagnosisEntryFromProto(s.diagnosis_entry),
  pbcSectionFlag: s.pbc_section_flag,
  plainText: s.plain_text,
  cursorPosition: s.cursor_position,
  sectionIndex: s.section_index,
  subsectionIndex: s.subsection_index,
  cursorPositionName: s.cursor_position_name,
  editLocation: s.edit_location,
  updateType: s.update_type,
  opsStatusFlag:
    s.ops_status_flag === OPS_STATUS.INVALID ? transformInvalidStatus(s.content_s2.content) : s.ops_status_flag,
  numberOfCursorEvents: s.number_of_cursor_events,
  dictationTag: s.dictation_tag,
  readOnly: s.read_only,
  footer: s.footer
});

const convertS2SectionsFromProto = (sections: SectionS2[]) => {
  let sortedSections = [];
  const diagnosisSections = [];
  let pbcSectionIndex = -1;

  sections.forEach((s, i) => {
    if (s.pbc_section_flag === true) {
      pbcSectionIndex = i;
    }

    // A section can be assumed to be a diagnosis section if its diagnosis entry field is not null.
    if (s.diagnosis_entry == null) {
      sortedSections.push(s);
    } else {
      diagnosisSections.push(s);
    }
  });

  sortedSections = sortedSections
    .slice(0, pbcSectionIndex + 1)
    .concat(diagnosisSections)
    .concat(sortedSections.slice(pbcSectionIndex + 1));

  return sortedSections.map(convertS2SectionFromProto);
};

const convertSmsCompositionFromProtoForS2Clients = (composition: Composition, isWeb: boolean) => {
  if (!composition) return null;

  const s2ClientSections = _get(composition, "sections");
  const sectionsS2 = _get(composition, "sections_s2");

  const s2ClientSectionsS2 = isWeb ? convertS2SectionsFromProto(sectionsS2) : sectionsS2;
  const sectionsS2Data = !_isEmpty(s2ClientSectionsS2)
    ? s2ClientSectionsS2
    : convertS2SectionsFromProto(s2ClientSections);
  return {
    id: composition.id,
    userId: composition.user_id,
    organizationId: composition.org_id,
    metadata: _get(composition, "metadata") && convertMetadataFromProto(_get(composition, "metadata")),
    sections: [], // don't care, don't set sections for s2 clients
    // For s2 compositions this will be set, just pass through
    // For older v2 compositions, convert sections to s2 format and send to s2 clients
    sectionsS2: sectionsS2Data,
    createdAt: convertTimestamp(composition.created_at),
    updatedAt: convertTimestamp(composition.updated_at),
    lastUserSubmitAt: convertTimestamp(composition.last_user_submit_at),
    readOnly: composition.read_only
  };
};

const convertDiagnosisToProto = (d) => ({
  billable: d.billable,
  icd_code: d.icdCode,
  icd_description: d.icdDescription,
  snomed_code: d.snomedCode,
  snomed_description: d.snomedDescription,
  hcc_code: d.hccCode,
  panel_ranking: d.panelRanking,
  problem_label: d.problemLabel,
  suggestion_type: d.suggestionType
});

const convertDiagnosisEntryToProto = (de) => ({
  diagnosis: de.diagnosis && convertDiagnosisToProto(de.diagnosis),
  detailed_display: de.detailedDisplay,
  confirm_status: de.confirmStatus
});

const convertUpdateTypeToProto = (
  updateType:
    | _learningmotors_pb_composer_SectionS2_SectionUpdateType
    | keyof typeof _learningmotors_pb_composer_SectionS2_SectionUpdateType
) => {
  switch (updateType) {
    case SectionUpdateTypes.WHOLE:
      return SectionUpdatePath.WHOLE;
    case SectionUpdateTypes.ONLY_DIAGNOSIS:
      return SectionUpdatePath.ONLY_DIAGNOSIS;
    default:
      return SectionUpdatePath.WHOLE;
  }
};

const convertSectionS2ToProto = (s) => ({
  id: s.id,
  name: s.name,
  navigation_keywords: s.navigationKeywords,
  content_s2: s.content && JSON.parse(s.content),
  status: s.status,
  cursors: s.cursors,
  hash: s.hash,
  diagnosis_entry: s.diagnosisEntry && convertDiagnosisEntryToProto(s.diagnosisEntry),
  pbc_section_flag: s.pbcSectionFlag,
  plain_text: s.plainText,
  cursor_position: s.cursorPosition,
  section_index: s.sectionIndex,
  subsection_index: s.subsectionIndex,
  cursor_position_name: s.cursorPositionName,
  edit_location: s.editLocation,
  update_type: s.updateType && convertUpdateTypeToProto(s.updateType),
  ops_status_flag: s.opsStatusFlag,
  number_of_cursor_events: s.numberOfCursorEvents,
  dictation_tag: s.dictationTag,
  read_only: s.readOnly
});

const convertExistingDiagnosisToProto = (ed) => ({
  snomed_description: ed.snomedDescription,
  icd_code: ed.icdCode,
  icd_description: ed.icdDescription,
  snomed_code: ed.snomedCode
});

const convertHCCSuggestionFromProto = (suggestion) => ({
  diagnosis: convertDiagnosisFromProto(suggestion.diagnosis),
  suggestionType: suggestion.suggestion_type
});

const convertDynamicChartDataFromProto = (dcd) => ({
  type: dcd.type,
  content: dcd.content,
  recordedDate: dcd.recorded_date && convertTimestamp(dcd.recorded_date),
  error: dcd.error,
  jsonContent: dcd.json_content
});

const convertStructuredSigFromProto = (structuredSigProto) => {
  if (structuredSigProto) {
    return {
      dosage: structuredSigProto.dosage,
      dosageUnit: structuredSigProto.dosage_unit,
      route: structuredSigProto.route,
      frequency: structuredSigProto.frequency
    };
  } else {
    return null;
  }
};

const convertMedicationListFromProto = (medicationsList) => {
  const medications = _get(medicationsList, "medications", []);
  return medications.map((medProto, i) => ({
    id: medProto.id || i + 1,
    emrMedicationName: medProto.emr_medication_name,
    structuredSig: convertStructuredSigFromProto(medProto.structured_sig),
    unstructuredSig: medProto.unstructured_sig
  }));
};

const convertRolesToProto = (roles) => {
  if (_isEmpty(roles)) {
    return null;
  }
  return roles.map((role) => {
    switch (role.type) {
      case RoleType.NO_ACCESS:
        return { type: _learningmotors_pb_user_Role_RoleType.NO_ACCESS };
      case RoleType.USER:
        return { type: _learningmotors_pb_user_Role_RoleType.USER };
      case RoleType.SCRIBE:
        return { type: _learningmotors_pb_user_Role_RoleType.SCRIBE };
      case RoleType.ADMIN:
        return { type: _learningmotors_pb_user_Role_RoleType.ADMIN };
      default:
        return { type: _learningmotors_pb_user_Role_RoleType.NO_ACCESS };
    }
  });
};

const convertEnhancedReviewToProto = (enhancedReview) => {
  switch (enhancedReview) {
    case EnhancedReviewOptions.ON:
      return EnhancedReviewOption.ON;
    case EnhancedReviewOptions.OFF:
      return EnhancedReviewOption.OFF;
    default:
      return EnhancedReviewOption.UNKNOWN;
  }
};

const convertNoteLock = (noteLock) => ({
  noteId: noteLock.note_id,
  scribe: {
    firstName: noteLock.scribe_first_name,
    id: noteLock.scribe_user_id,
    lastName: noteLock.scribe_last_name,
    middleName: noteLock.scribe_middle_name
  },
  status: noteLock.status
});

const convertPreferencesFromProto = (preferences) => ({
  id: preferences.id,
  name: preferences.name,
  enumPreference: preferences.enum_preference && convertEnumPreferenceFromProto(preferences.enum_preference),
  stringPreference: preferences.string_preference && convertStringPreferenceFromProto(preferences.string_preference)
});

const convertStringPreferenceFromProto = (stringPreference) => ({
  value: stringPreference.value
});

const convertEnumPreferenceFromProto = (enumPreference) => ({
  possibleValues: enumPreference.possible_values,
  value: enumPreference.value
});

const convertPreferencesToProto = (preferences) => ({
  id: preferences.id,
  name: preferences.name,
  enum_preference: preferences.enumPreference && convertEnumPreferenceToProto(preferences.enumPreference),
  string_preference: preferences.stringPreference && convertStringPreferenceToProto(preferences.stringPreference)
});

const convertStringPreferenceToProto = (stringPreference) => ({
  value: stringPreference.value
});

const convertEnumPreferenceToProto = (enumPreference) => ({
  possible_values: enumPreference.possibleValues,
  value: enumPreference.value
});

export {
  convertAppointmentToProto,
  convertAppointmentFromProto,
  convertAppointmentMetadataFromProto,
  convertBlocksFromProto,
  convertBlocksToProto,
  convertCompositionFromProtoForAppointmentStatus,
  convertCompositionFromProto,
  convertDiagnosisEntryFromProto,
  convertDiagnosisFromProto,
  convertDiagnosisWithChildrenFromProto,
  convertDynamicChartDataFromProto,
  convertEnhancedReviewToProto,
  convertEMRNoteTypesFromProto,
  convertEMRNoteTypesToProto,
  convertEMRSubmissionInformationFromProto,
  convertEMRSubmissionStatusFromProto,
  convertEMRUserFromProto,
  convertExistingDiagnosisToProto,
  convertGenderToProto,
  convertHCCSuggestionFromProto,
  convertNoteLock,
  convertMacroFromProto,
  convertMacroToProto,
  convertMedicationListFromProto,
  convertMetadataFromProto,
  convertNoteFromProto,
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
  convertPreferencesFromProto,
  convertPreferencesToProto,
  convertRolesToProto,
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
};
