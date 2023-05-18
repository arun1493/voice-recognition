// Original file: node_modules/protobufs/src/suki/pb/nvoqauth/nvoqauth.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Person as _learningmotors_pb_common_Person,
  Person__Output as _learningmotors_pb_common_Person__Output
} from "../../../learningmotors/pb/common/Person";

export interface CreateAccountRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  person?: _learningmotors_pb_common_Person | null;
  email?: string;
  suki_user_id?: string;
  wakeword_preference?: string;
  nvoq_topic?: string;
}

export interface CreateAccountRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  person: _learningmotors_pb_common_Person__Output | null;
  email: string;
  suki_user_id: string;
  wakeword_preference: string;
  nvoq_topic: string;
}
