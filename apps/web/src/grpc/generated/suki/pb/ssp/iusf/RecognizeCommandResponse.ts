// Original file: node_modules/protobufs/src/suki/pb/ssp/iusf/digi_iusf.proto

import type {
  IntentResult as _suki_pb_ssp_v1_IntentResult,
  IntentResult__Output as _suki_pb_ssp_v1_IntentResult__Output
} from "../../../../suki/pb/ssp/v1/IntentResult";

export interface RecognizeCommandResponse {
  intent_result?: _suki_pb_ssp_v1_IntentResult | null;
}

export interface RecognizeCommandResponse__Output {
  intent_result: _suki_pb_ssp_v1_IntentResult__Output | null;
}
