// Original file: node_modules/protobufs/src/suki/pb/ssp/common/util.proto

// Original file: node_modules/protobufs/src/suki/pb/ssp/common/util.proto

export enum _suki_pb_ssp_common_AudioEncoding_Type {
  UNKNOWN = 0,
  LINEAR16 = 1,
  FLAC = 2,
  MULAW = 3,
  AMR = 4,
  AMR_WB = 5,
  OGG_OPUS = 6
}

export interface AudioEncoding {
  type?: _suki_pb_ssp_common_AudioEncoding_Type | keyof typeof _suki_pb_ssp_common_AudioEncoding_Type;
  sample_rate?: number;
}

export interface AudioEncoding__Output {
  type: keyof typeof _suki_pb_ssp_common_AudioEncoding_Type;
  sample_rate: number;
}
