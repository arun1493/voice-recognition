// Original file: node_modules/protobufs/src/suki/pb/epic_voiceplatform/epic_voiceplatform.proto

export interface InitializeSessionRequest {
  session_id?: string;
  version?: string;
  application?: string;
  customer_id?: string;
  customer_secret?: string;
  user_id?: string;
  machine_id?: string;
  callback_url?: string;
  callback_token?: string;
}

export interface InitializeSessionRequest__Output {
  session_id: string;
  version: string;
  application: string;
  customer_id: string;
  customer_secret: string;
  user_id: string;
  machine_id: string;
  callback_url: string;
  callback_token: string;
}
