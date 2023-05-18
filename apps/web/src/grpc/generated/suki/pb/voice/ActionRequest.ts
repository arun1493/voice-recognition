// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

export enum _suki_pb_voice_ActionRequest_Type {
  UNKNOWN = 0,
  START_DICTATION = 1,
  STOP_DICTATION = 2
}

export interface ActionRequest {
  type?: _suki_pb_voice_ActionRequest_Type | keyof typeof _suki_pb_voice_ActionRequest_Type;
}

export interface ActionRequest__Output {
  type: keyof typeof _suki_pb_voice_ActionRequest_Type;
}
