// Original file: node_modules/protobufs/src/suki/pb/nms/note_components.proto

// Original file: node_modules/protobufs/src/suki/pb/nms/note_components.proto

export enum _suki_pb_nms_ChunkReference_ChunkRelationship {
  UNKNOWN = 0,
  PARENT = 1,
  CHILD = 2,
  PREVIOUS = 3,
  NEXT = 4,
  DEPENDS_ON = 5,
  DEPENDED_ON_BY = 6
}

export interface ChunkReference {
  chunkId?: string;
  relationship?:
    | _suki_pb_nms_ChunkReference_ChunkRelationship
    | keyof typeof _suki_pb_nms_ChunkReference_ChunkRelationship;
}

export interface ChunkReference__Output {
  chunkId: string;
  relationship: keyof typeof _suki_pb_nms_ChunkReference_ChunkRelationship;
}
