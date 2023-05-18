// Original file: node_modules/protobufs/src/learningmotors/pb/replay/options.proto

// Original file: node_modules/protobufs/src/learningmotors/pb/replay/options.proto

export enum _learningmotors_pb_replay_ProcessingOptions_Processor {
  DEFAULT = 0,
  DEMO = 1
}

export interface ProcessingOptions {
  processor?:
    | _learningmotors_pb_replay_ProcessingOptions_Processor
    | keyof typeof _learningmotors_pb_replay_ProcessingOptions_Processor;
}

export interface ProcessingOptions__Output {
  processor: keyof typeof _learningmotors_pb_replay_ProcessingOptions_Processor;
}
