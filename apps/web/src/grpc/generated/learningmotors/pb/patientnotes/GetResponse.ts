// Original file: node_modules/protobufs/src/learningmotors/pb/patientnotes/patientnotes.proto

import type {
  PageResponse as _learningmotors_pb_PageResponse,
  PageResponse__Output as _learningmotors_pb_PageResponse__Output
} from "../../../learningmotors/pb/PageResponse";
import type {
  Note as _learningmotors_pb_patientnotes_Note,
  Note__Output as _learningmotors_pb_patientnotes_Note__Output
} from "../../../learningmotors/pb/patientnotes/Note";

export interface GetResponse {
  page_response?: _learningmotors_pb_PageResponse | null;
  notes?: _learningmotors_pb_patientnotes_Note[];
}

export interface GetResponse__Output {
  page_response: _learningmotors_pb_PageResponse__Output | null;
  notes: _learningmotors_pb_patientnotes_Note__Output[];
}
