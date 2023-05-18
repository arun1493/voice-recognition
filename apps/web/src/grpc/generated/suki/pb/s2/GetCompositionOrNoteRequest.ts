// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_GetCompositionOrNoteRequest_Type {
  Composition = 0,
  Note = 1
}

export interface GetCompositionOrNoteRequest {
  organization_id?: string;
  id?: string;
  request_type?:
    | _suki_pb_s2_GetCompositionOrNoteRequest_Type
    | keyof typeof _suki_pb_s2_GetCompositionOrNoteRequest_Type;
}

export interface GetCompositionOrNoteRequest__Output {
  organization_id: string;
  id: string;
  request_type: keyof typeof _suki_pb_s2_GetCompositionOrNoteRequest_Type;
}
