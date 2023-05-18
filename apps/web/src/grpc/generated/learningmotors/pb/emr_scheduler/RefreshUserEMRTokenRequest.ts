// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/emr_scheduler.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/emr_scheduler.proto

export enum _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest_TokenType {
  LOGIN = 0,
  REFRESH = 1
}

export interface RefreshUserEMRTokenRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_user_id?: string;
  emr_access_token?: string;
  token_type?:
    | _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest_TokenType
    | keyof typeof _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest_TokenType;
  emr_provider_id?: string;
  expires_at?: string;
  refresh_token?: string;
}

export interface RefreshUserEMRTokenRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_user_id: string;
  emr_access_token: string;
  token_type: keyof typeof _learningmotors_pb_emr_scheduler_RefreshUserEMRTokenRequest_TokenType;
  emr_provider_id: string;
  expires_at: string;
  refresh_token: string;
}
