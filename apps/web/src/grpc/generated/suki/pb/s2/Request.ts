// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  SectionS2 as _learningmotors_pb_composer_SectionS2,
  SectionS2__Output as _learningmotors_pb_composer_SectionS2__Output
} from "../../../learningmotors/pb/composer/SectionS2";
import type {
  Patient as _learningmotors_pb_patients_Patient,
  Patient__Output as _learningmotors_pb_patients_Patient__Output
} from "../../../learningmotors/pb/patients/Patient";
import type {
  Appointment as _learningmotors_pb_Appointment,
  Appointment__Output as _learningmotors_pb_Appointment__Output
} from "../../../learningmotors/pb/Appointment";
import type {
  Diagnosis as _suki_pb_diagnosis_Diagnosis,
  Diagnosis__Output as _suki_pb_diagnosis_Diagnosis__Output
} from "../../../suki/pb/diagnosis/Diagnosis";
import type {
  Recommendation as _suki_pb_s2_Recommendation,
  Recommendation__Output as _suki_pb_s2_Recommendation__Output
} from "../../../suki/pb/s2/Recommendation";

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_Request_Type {
  CREATE_NOTE = 0,
  CREATE_NOTE_WITH_NOTETYPE = 1,
  CREATE_NOTE_WITH_PATIENT = 2,
  CREATE_NOTE_WITH_NOTETYPE_PATIENT = 3,
  ADD_SECTION = 4,
  UPDATE_SECTION = 5,
  DELETE_SECTION = 6,
  ATTACH_PATIENT = 7,
  UPDATE_PATIENT = 9,
  UPDATE_APPOINTMENT = 10,
  CHANGE_SECTION = 12,
  CANCEL_CREATE_NOTE = 13,
  EXIT_DICTATION_BADGE_PRESSED = 14,
  CANCEL_NOTE_SUBMISSION = 18,
  INITIAL_NOTE_SUBMISSION = 19,
  CLICK_ADD_DIAGNOSIS = 20,
  CLICK_INSERT_SCRIPT = 21,
  CLICK_GO_BACK = 22,
  PROBLEM_SUGGESTIONS_PANEL_REQUEST = 23,
  SAVE_COMPOSITION_TO_UNFINISHED = 24,
  COMPOSITION_SUBMISSION_SUCCESSUFL = 25,
  CLICK_NOTES_PULL = 26,
  CLICK_REFRESH_VITALS_ON_SCREEN = 27,
  GET_MACRO_CONTENT = 28,
  RECOMMENDATION = 29
}

export interface Request {
  request_type?: _suki_pb_s2_Request_Type | keyof typeof _suki_pb_s2_Request_Type;
  notetype_id?: string;
  composition_id?: string;
  patient_id?: string;
  appointment_id?: string;
  section_data?: _learningmotors_pb_composer_SectionS2 | null;
  section_id?: string;
  patient?: _learningmotors_pb_patients_Patient | null;
  appointment?: _learningmotors_pb_Appointment | null;
  script_id?: string;
  problem_panel_suggestions?: _suki_pb_diagnosis_Diagnosis[];
  from_patient_list?: boolean;
  recommendation?: _suki_pb_s2_Recommendation | null;
}

export interface Request__Output {
  request_type: keyof typeof _suki_pb_s2_Request_Type;
  notetype_id: string;
  composition_id: string;
  patient_id: string;
  appointment_id: string;
  section_data: _learningmotors_pb_composer_SectionS2__Output | null;
  section_id: string;
  patient: _learningmotors_pb_patients_Patient__Output | null;
  appointment: _learningmotors_pb_Appointment__Output | null;
  script_id: string;
  problem_panel_suggestions: _suki_pb_diagnosis_Diagnosis__Output[];
  from_patient_list: boolean;
  recommendation: _suki_pb_s2_Recommendation__Output | null;
}
