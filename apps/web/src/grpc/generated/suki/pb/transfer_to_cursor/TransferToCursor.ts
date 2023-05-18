// Original file: node_modules/protobufs/src/suki/pb/transfer_to_cursor/transfer_to_cursor.proto

import type {
  Composition as _learningmotors_pb_composer_Composition,
  Composition__Output as _learningmotors_pb_composer_Composition__Output
} from "../../../learningmotors/pb/composer/Composition";

// Original file: node_modules/protobufs/src/suki/pb/transfer_to_cursor/transfer_to_cursor.proto

export enum _suki_pb_transfer_to_cursor_TransferToCursor_TransferType {
  UNKNOWN = 0,
  NOTE = 1,
  SECTION = 2
}

export interface TransferToCursor {
  transfer_type?:
    | _suki_pb_transfer_to_cursor_TransferToCursor_TransferType
    | keyof typeof _suki_pb_transfer_to_cursor_TransferToCursor_TransferType;
  composition?: _learningmotors_pb_composer_Composition | null;
  transfer_type_ids?: string[];
}

export interface TransferToCursor__Output {
  transfer_type: keyof typeof _suki_pb_transfer_to_cursor_TransferToCursor_TransferType;
  composition: _learningmotors_pb_composer_Composition__Output | null;
  transfer_type_ids: string[];
}
