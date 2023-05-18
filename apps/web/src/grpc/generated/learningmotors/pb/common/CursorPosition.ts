// Original file: node_modules/protobufs/src/learningmotors/pb/common/cursor.proto

export interface CursorPosition {
  cursorPosition?: number | string;
  blockArray?: number | string;
  nodePosition?: number | string;
}

export interface CursorPosition__Output {
  cursorPosition: number;
  blockArray: number;
  nodePosition: number;
}
