// Original file: node_modules/protobufs/src/learningmotors/pb/patientnotes/patientnotes.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  PageRequest as _learningmotors_pb_PageRequest,
  PageRequest__Output as _learningmotors_pb_PageRequest__Output
} from "../../../learningmotors/pb/PageRequest";

export interface GetRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  page_request?: _learningmotors_pb_PageRequest | null;
  ids?: string[];
  user_id?: string;
  patient_id?: string;
  include_only_suki_notes?: boolean;
  include_sections?: boolean;
  ids_are_ambiguous?: boolean;
  appointment_ids?: string[];
  get_last_suki_version_if_possible?: boolean;
}

export interface GetRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  page_request: _learningmotors_pb_PageRequest__Output | null;
  ids: string[];
  user_id: string;
  patient_id: string;
  include_only_suki_notes: boolean;
  include_sections: boolean;
  ids_are_ambiguous: boolean;
  appointment_ids: string[];
  get_last_suki_version_if_possible: boolean;
}
