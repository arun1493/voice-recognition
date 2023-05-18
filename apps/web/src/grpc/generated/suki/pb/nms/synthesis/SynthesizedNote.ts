// Original file: node_modules/protobufs/src/suki/pb/nms/synthesis/synthesizer.proto

import type {
  V1Response as _suki_pb_nms_synthesis_V1Response,
  V1Response__Output as _suki_pb_nms_synthesis_V1Response__Output
} from "../../../../suki/pb/nms/synthesis/V1Response";
import type {
  V2Response as _suki_pb_nms_synthesis_V2Response,
  V2Response__Output as _suki_pb_nms_synthesis_V2Response__Output
} from "../../../../suki/pb/nms/synthesis/V2Response";

export interface SynthesizedNote {
  v1Response?: _suki_pb_nms_synthesis_V1Response | null;
  v2Response?: _suki_pb_nms_synthesis_V2Response | null;
  response?: "v1Response" | "v2Response";
}

export interface SynthesizedNote__Output {
  v1Response?: _suki_pb_nms_synthesis_V1Response__Output | null;
  v2Response?: _suki_pb_nms_synthesis_V2Response__Output | null;
  response: "v1Response" | "v2Response";
}
