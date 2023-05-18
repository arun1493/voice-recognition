// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  User as _learningmotors_pb_user_User,
  User__Output as _learningmotors_pb_user_User__Output
} from "../../../learningmotors/pb/user/User";
import type {
  Patient as _learningmotors_pb_patients_Patient,
  Patient__Output as _learningmotors_pb_patients_Patient__Output
} from "../../../learningmotors/pb/patients/Patient";
import type {
  Appointment as _learningmotors_pb_Appointment,
  Appointment__Output as _learningmotors_pb_Appointment__Output
} from "../../../learningmotors/pb/Appointment";
import type {
  Address as _learningmotors_pb_address_Address,
  Address__Output as _learningmotors_pb_address_Address__Output
} from "../../../learningmotors/pb/address/Address";
import type {
  SubmissionInformation as _suki_pb_emr_SubmissionInformation,
  SubmissionInformation__Output as _suki_pb_emr_SubmissionInformation__Output
} from "../../../suki/pb/emr/SubmissionInformation";
import type {
  SubmissionStatus as _suki_pb_emr_SubmissionStatus,
  SubmissionStatus__Output as _suki_pb_emr_SubmissionStatus__Output
} from "../../../suki/pb/emr/SubmissionStatus";
import type {
  EMRStatus as _learningmotors_pb_composer_EMRStatus,
  EMRStatus__Output as _learningmotors_pb_composer_EMRStatus__Output
} from "../../../learningmotors/pb/composer/EMRStatus";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type { ClientType as _suki_pb_platform_ClientType } from "../../../suki/pb/platform/ClientType";
import type {
  EmrNoteType as _learningmotors_pb_emr_notetypes_EmrNoteType,
  EmrNoteType__Output as _learningmotors_pb_emr_notetypes_EmrNoteType__Output
} from "../../../learningmotors/pb/emr_notetypes/EmrNoteType";
import type {
  PartialDictation as _learningmotors_pb_composer_PartialDictation,
  PartialDictation__Output as _learningmotors_pb_composer_PartialDictation__Output
} from "../../../learningmotors/pb/composer/PartialDictation";
import type {
  Source as _learningmotors_pb_composer_Source,
  Source__Output as _learningmotors_pb_composer_Source__Output
} from "../../../learningmotors/pb/composer/Source";

// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

export enum _learningmotors_pb_composer_Metadata_Status {
  DEFAULT = 0,
  INCOMPLETE = 1,
  NEEDS_REVIEW = 5,
  USER_IS_DONE = 2,
  SCRIBE_IS_DONE = 3,
  SUBMITTED_TO_EMR = 4,
  NEED_DOCTOR_SIGN_OFF = 6,
  AMBIENT_IN_PROGRESS = 7
}

export interface Metadata {
  status?: _learningmotors_pb_composer_Metadata_Status | keyof typeof _learningmotors_pb_composer_Metadata_Status;
  notetype_id?: string;
  name?: string;
  user?: _learningmotors_pb_user_User | null;
  patient?: _learningmotors_pb_patients_Patient | null;
  appointment?: _learningmotors_pb_Appointment | null;
  encounter_address?: _learningmotors_pb_address_Address | null;
  submission_information?: _suki_pb_emr_SubmissionInformation | null;
  submission_status?: _suki_pb_emr_SubmissionStatus | null;
  emr_status?: _learningmotors_pb_composer_EMRStatus | null;
  force_submit?: boolean;
  review_message?: string;
  date_signed_off?: _google_protobuf_Timestamp | null;
  client_type?: _suki_pb_platform_ClientType | keyof typeof _suki_pb_platform_ClientType;
  created_with_s2?: boolean;
  emr_note_type?: _learningmotors_pb_emr_notetypes_EmrNoteType | null;
  pulled_note_from_emr?: boolean;
  partial_dictation?: _learningmotors_pb_composer_PartialDictation | null;
  source?: _learningmotors_pb_composer_Source | null;
}

export interface Metadata__Output {
  status: keyof typeof _learningmotors_pb_composer_Metadata_Status;
  notetype_id: string;
  name: string;
  user: _learningmotors_pb_user_User__Output | null;
  patient: _learningmotors_pb_patients_Patient__Output | null;
  appointment: _learningmotors_pb_Appointment__Output | null;
  encounter_address: _learningmotors_pb_address_Address__Output | null;
  submission_information: _suki_pb_emr_SubmissionInformation__Output | null;
  submission_status: _suki_pb_emr_SubmissionStatus__Output | null;
  emr_status: _learningmotors_pb_composer_EMRStatus__Output | null;
  force_submit: boolean;
  review_message: string;
  date_signed_off: _google_protobuf_Timestamp__Output | null;
  client_type: keyof typeof _suki_pb_platform_ClientType;
  created_with_s2: boolean;
  emr_note_type: _learningmotors_pb_emr_notetypes_EmrNoteType__Output | null;
  pulled_note_from_emr: boolean;
  partial_dictation: _learningmotors_pb_composer_PartialDictation__Output | null;
  source: _learningmotors_pb_composer_Source__Output | null;
}
