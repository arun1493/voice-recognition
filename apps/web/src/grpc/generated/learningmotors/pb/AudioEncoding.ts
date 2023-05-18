// Original file: node_modules/protobufs/src/learningmotors/pb/audio.proto

// Original file: node_modules/protobufs/src/learningmotors/pb/audio.proto

export enum _learningmotors_pb_AudioEncoding_Type {
  ENCODING_UNSPECIFIED = 0,
  LINEAR16 = 1,
  FLAC = 2,
  MULAW = 3,
  AMR = 4,
  AMR_WB = 5,
  OGG_OPUS = 6
}

export interface AudioEncoding {
  type?: _learningmotors_pb_AudioEncoding_Type | keyof typeof _learningmotors_pb_AudioEncoding_Type;
  sample_rate_hertz?: number;
  language_code?: string;
  header?: Buffer | Uint8Array | string;
}

export interface AudioEncoding__Output {
  type: keyof typeof _learningmotors_pb_AudioEncoding_Type;
  sample_rate_hertz: number;
  language_code: string;
  header: Buffer;
}
