// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/resource.proto

import type {
  PhraseBias as _suki_pb_ssp_v1_PhraseBias,
  PhraseBias__Output as _suki_pb_ssp_v1_PhraseBias__Output
} from "../../../../suki/pb/ssp/v1/PhraseBias";
import type {
  PhraseTolerance as _suki_pb_ssp_v1_PhraseTolerance,
  PhraseTolerance__Output as _suki_pb_ssp_v1_PhraseTolerance__Output
} from "../../../../suki/pb/ssp/v1/PhraseTolerance";

export interface SpeechAdaptation {
  phrase_biasing_set?: _suki_pb_ssp_v1_PhraseBias[];
  phrase_tolerance_set?: _suki_pb_ssp_v1_PhraseTolerance[];
  language_class_phrases?: string[];
}

export interface SpeechAdaptation__Output {
  phrase_biasing_set: _suki_pb_ssp_v1_PhraseBias__Output[];
  phrase_tolerance_set: _suki_pb_ssp_v1_PhraseTolerance__Output[];
  language_class_phrases: string[];
}
