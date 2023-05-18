// Original file: node_modules/protobufs/src/suki/pb/ssp/ce/ssp_commands_engine_v0_5.proto

import type {
  DetectIntentResult as _suki_pb_ssp_ce_DetectIntentResult,
  DetectIntentResult__Output as _suki_pb_ssp_ce_DetectIntentResult__Output
} from "../../../../suki/pb/ssp/ce/DetectIntentResult";

export interface IntentContext {
  intent_result?: _suki_pb_ssp_ce_DetectIntentResult | null;
}

export interface IntentContext__Output {
  intent_result: _suki_pb_ssp_ce_DetectIntentResult__Output | null;
}
