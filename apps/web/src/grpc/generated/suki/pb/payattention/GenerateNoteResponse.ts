// Original file: node_modules/protobufs/src/suki/pb/payattention/note_generation.proto

import type {
  MetaData as _suki_pb_payattention_MetaData,
  MetaData__Output as _suki_pb_payattention_MetaData__Output
} from "../../../suki/pb/payattention/MetaData";
import type { Status as _suki_pb_payattention_Status } from "../../../suki/pb/payattention/Status";

export interface GenerateNoteResponse {
  request_id?: string;
  meta_data?: _suki_pb_payattention_MetaData | null;
  section_data?: { [key: string]: string };
  status?: _suki_pb_payattention_Status | keyof typeof _suki_pb_payattention_Status;
}

export interface GenerateNoteResponse__Output {
  request_id: string;
  meta_data: _suki_pb_payattention_MetaData__Output | null;
  section_data: { [key: string]: string };
  status: keyof typeof _suki_pb_payattention_Status;
}
