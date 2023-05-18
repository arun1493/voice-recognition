// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_Error_Code {
  INVALID = 0,
  CLOSE = 1
}

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_Error_ErrorType {
  DEFAULT = 0,
  ERROR_CREATE_NOTE = 1,
  ERROR_FETCH_NOTE = 2,
  ERROR_ADD_SECTION = 3,
  ERROR_DELETE_SECTION = 4,
  ERROR_DELETE_NOTE = 5,
  ERROR_COPY_FORWARD = 6,
  ERROR_SCRIPT_CHANGE = 7,
  ERROR_NOTES_PULL = 8
}

export interface Error {
  code?: _suki_pb_s2_Error_Code | keyof typeof _suki_pb_s2_Error_Code;
  reason?: string;
  error_type?: _suki_pb_s2_Error_ErrorType | keyof typeof _suki_pb_s2_Error_ErrorType;
}

export interface Error__Output {
  code: keyof typeof _suki_pb_s2_Error_Code;
  reason: string;
  error_type: keyof typeof _suki_pb_s2_Error_ErrorType;
}
