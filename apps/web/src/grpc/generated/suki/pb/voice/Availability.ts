// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

export enum _suki_pb_voice_Availability_Feature {
  INVALID = 0,
  SPEECH_TO_TEXT = 1
}

export interface Availability {
  feature?: _suki_pb_voice_Availability_Feature | keyof typeof _suki_pb_voice_Availability_Feature;
  available?: boolean;
}

export interface Availability__Output {
  feature: keyof typeof _suki_pb_voice_Availability_Feature;
  available: boolean;
}
