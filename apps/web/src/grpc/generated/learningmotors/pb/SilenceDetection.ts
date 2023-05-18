// Original file: node_modules/protobufs/src/learningmotors/pb/speechproxy.proto

// Original file: node_modules/protobufs/src/learningmotors/pb/speechproxy.proto

export enum _learningmotors_pb_SilenceDetection_Code {
  UNKNOWN = 0,
  SILENCE_START = 1,
  SILENCE_END = 2
}

export interface SilenceDetection {
  code?: _learningmotors_pb_SilenceDetection_Code | keyof typeof _learningmotors_pb_SilenceDetection_Code;
}

export interface SilenceDetection__Output {
  code: keyof typeof _learningmotors_pb_SilenceDetection_Code;
}
