// Original file: node_modules/protobufs/src/learningmotors/pb/lighthouse.proto

import type {
  PageResponse as _learningmotors_pb_PageResponse,
  PageResponse__Output as _learningmotors_pb_PageResponse__Output
} from "../../learningmotors/pb/PageResponse";
import type {
  LighthouseEvent as _learningmotors_pb_LighthouseEvent,
  LighthouseEvent__Output as _learningmotors_pb_LighthouseEvent__Output
} from "../../learningmotors/pb/LighthouseEvent";
import type {
  Statistics as _learningmotors_pb_Statistics,
  Statistics__Output as _learningmotors_pb_Statistics__Output
} from "../../learningmotors/pb/Statistics";

export interface SessionDetailsResponse {
  page_resp?: _learningmotors_pb_PageResponse | null;
  events?: _learningmotors_pb_LighthouseEvent[];
  data?: _learningmotors_pb_Statistics[];
}

export interface SessionDetailsResponse__Output {
  page_resp: _learningmotors_pb_PageResponse__Output | null;
  events: _learningmotors_pb_LighthouseEvent__Output[];
  data: _learningmotors_pb_Statistics__Output[];
}
