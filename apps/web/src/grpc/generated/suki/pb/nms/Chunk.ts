// Original file: node_modules/protobufs/src/suki/pb/nms/note_components.proto

import type {
  Property as _suki_pb_nms_property_engine_Property,
  Property__Output as _suki_pb_nms_property_engine_Property__Output
} from "../../../suki/pb/nms/property_engine/Property";
import type {
  ChunkReference as _suki_pb_nms_ChunkReference,
  ChunkReference__Output as _suki_pb_nms_ChunkReference__Output
} from "../../../suki/pb/nms/ChunkReference";

// Original file: node_modules/protobufs/src/suki/pb/nms/note_components.proto

export enum _suki_pb_nms_Chunk_ChunkType {
  UNKNOWN = 0,
  PARAGRAPH = 1,
  LIST = 2,
  TABLE = 3,
  IMAGE = 4,
  LINK = 5,
  SECTION = 6,
  LINE = 7,
  WORD = 8,
  CHARACTER = 9
}

export interface Chunk {
  id?: string;
  type?: _suki_pb_nms_Chunk_ChunkType | keyof typeof _suki_pb_nms_Chunk_ChunkType;
  properties?: _suki_pb_nms_property_engine_Property[];
  references?: _suki_pb_nms_ChunkReference[];
  data?: Buffer | Uint8Array | string;
}

export interface Chunk__Output {
  id: string;
  type: keyof typeof _suki_pb_nms_Chunk_ChunkType;
  properties: _suki_pb_nms_property_engine_Property__Output[];
  references: _suki_pb_nms_ChunkReference__Output[];
  data: Buffer;
}
