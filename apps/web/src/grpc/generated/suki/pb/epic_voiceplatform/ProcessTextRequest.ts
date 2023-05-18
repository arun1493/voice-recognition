// Original file: node_modules/protobufs/src/suki/pb/epic_voiceplatform/epic_voiceplatform.proto

export interface ProcessTextRequest {
  session_id?: string;
  text?: string;
  start_timestamp?: string;
  auth_token?: string;
}

export interface ProcessTextRequest__Output {
  session_id: string;
  text: string;
  start_timestamp: string;
  auth_token: string;
}
