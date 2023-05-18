// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

export enum _suki_pb_voice_Error_Code {
  INVALID = 0,
  CLOSE = 1
}

export interface Error {
  code?: _suki_pb_voice_Error_Code | keyof typeof _suki_pb_voice_Error_Code;
  reason?: string;
}

export interface Error__Output {
  code: keyof typeof _suki_pb_voice_Error_Code;
  reason: string;
}
