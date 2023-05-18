// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

export enum _suki_pb_voice_ActionResponse_Type {
  UNSUPPORTED = 0,
  DICTATION_STARTED = 1,
  DICTATION_STOPPED = 2
}

export interface ActionResponse {
  type?: _suki_pb_voice_ActionResponse_Type | keyof typeof _suki_pb_voice_ActionResponse_Type;
}

export interface ActionResponse__Output {
  type: keyof typeof _suki_pb_voice_ActionResponse_Type;
}
