// Original file: node_modules/protobufs/src/suki/pb/nvoqauth/nvoqauth.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Person as _learningmotors_pb_common_Person,
  Person__Output as _learningmotors_pb_common_Person__Output
} from "../../../learningmotors/pb/common/Person";
import type {
  NvoqInformation as _suki_pb_nvoqauth_NvoqInformation,
  NvoqInformation__Output as _suki_pb_nvoqauth_NvoqInformation__Output
} from "../../../suki/pb/nvoqauth/NvoqInformation";

export interface CreateOrUpdateUserRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  person?: _learningmotors_pb_common_Person | null;
  suki_user_id?: string;
  email?: string;
  information?: _suki_pb_nvoqauth_NvoqInformation | null;
  wakeword_preference?: string;
}

export interface CreateOrUpdateUserRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  person: _learningmotors_pb_common_Person__Output | null;
  suki_user_id: string;
  email: string;
  information: _suki_pb_nvoqauth_NvoqInformation__Output | null;
  wakeword_preference: string;
}
