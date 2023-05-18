// Original file: node_modules/protobufs/src/learningmotors/pb/transcript/transcript.proto

import type {
  PageResponse as _learningmotors_pb_PageResponse,
  PageResponse__Output as _learningmotors_pb_PageResponse__Output
} from "../../../learningmotors/pb/PageResponse";
import type {
  Event as _learningmotors_pb_transcript_Event,
  Event__Output as _learningmotors_pb_transcript_Event__Output
} from "../../../learningmotors/pb/transcript/Event";
import type {
  Metrics as _learningmotors_pb_idl_Metrics,
  Metrics__Output as _learningmotors_pb_idl_Metrics__Output
} from "../../../learningmotors/pb/idl/Metrics";

export interface GetSessionDetailsResponse {
  page_resp?: _learningmotors_pb_PageResponse | null;
  events?: _learningmotors_pb_transcript_Event[];
  metrics?: _learningmotors_pb_idl_Metrics | null;
}

export interface GetSessionDetailsResponse__Output {
  page_resp: _learningmotors_pb_PageResponse__Output | null;
  events: _learningmotors_pb_transcript_Event__Output[];
  metrics: _learningmotors_pb_idl_Metrics__Output | null;
}
