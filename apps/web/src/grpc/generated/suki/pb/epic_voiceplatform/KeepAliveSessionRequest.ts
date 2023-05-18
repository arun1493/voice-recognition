// Original file: node_modules/protobufs/src/suki/pb/epic_voiceplatform/epic_voiceplatform.proto

export interface KeepAliveSessionRequest {
  session_id?: string;
  callback_token?: string;
  auth_token?: string;
}

export interface KeepAliveSessionRequest__Output {
  session_id: string;
  callback_token: string;
  auth_token: string;
}
