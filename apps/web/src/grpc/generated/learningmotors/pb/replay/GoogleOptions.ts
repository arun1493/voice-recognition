// Original file: node_modules/protobufs/src/learningmotors/pb/replay/replay.proto

// Original file: node_modules/protobufs/src/learningmotors/pb/replay/replay.proto

export enum _learningmotors_pb_replay_GoogleOptions_SpeechAPIVersion {
  V1 = 0,
  V1P1BETA1 = 1
}

// Original file: node_modules/protobufs/src/learningmotors/pb/replay/replay.proto

export enum _learningmotors_pb_replay_GoogleOptions_SpeechModel {
  DEFAULT = 0,
  COMMAND_AND_SEARCH = 1,
  PHONE_CALL = 2,
  VIDEO = 3
}

export interface GoogleOptions {
  speech_api_verison?:
    | _learningmotors_pb_replay_GoogleOptions_SpeechAPIVersion
    | keyof typeof _learningmotors_pb_replay_GoogleOptions_SpeechAPIVersion;
  speech_model?:
    | _learningmotors_pb_replay_GoogleOptions_SpeechModel
    | keyof typeof _learningmotors_pb_replay_GoogleOptions_SpeechModel;
  use_enhanced?: boolean;
  language_code?: string;
}

export interface GoogleOptions__Output {
  speech_api_verison: keyof typeof _learningmotors_pb_replay_GoogleOptions_SpeechAPIVersion;
  speech_model: keyof typeof _learningmotors_pb_replay_GoogleOptions_SpeechModel;
  use_enhanced: boolean;
  language_code: string;
}
