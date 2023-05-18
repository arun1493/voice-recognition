// Original file: node_modules/protobufs/src/learningmotors/pb/patientnotes/patientnotes.proto

export interface GetForVerbatimRequest {
  organization_ids?: string[];
  note_ids_to_ignore?: string[];
}

export interface GetForVerbatimRequest__Output {
  organization_ids: string[];
  note_ids_to_ignore: string[];
}
