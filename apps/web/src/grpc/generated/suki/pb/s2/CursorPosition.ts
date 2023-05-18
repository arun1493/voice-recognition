// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_CursorPosition_Location {
  CONTENT = 0,
  TITLE = 1
}

export interface CursorPosition {
  cursor_position_index?: number;
  cursor_position_endIndex?: number;
  section_id?: string;
  location?: _suki_pb_s2_CursorPosition_Location | keyof typeof _suki_pb_s2_CursorPosition_Location;
}

export interface CursorPosition__Output {
  cursor_position_index: number;
  cursor_position_endIndex: number;
  section_id: string;
  location: keyof typeof _suki_pb_s2_CursorPosition_Location;
}
