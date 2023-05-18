// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/resource.proto

import type {
  CommandResult as _suki_pb_ssp_v1_CommandResult,
  CommandResult__Output as _suki_pb_ssp_v1_CommandResult__Output
} from "../../../../suki/pb/ssp/v1/CommandResult";

export interface IntentResult {
  intent?: _suki_pb_ssp_v1_CommandResult | null;
  intent_type?: string;
  intent_alternates?: _suki_pb_ssp_v1_CommandResult[];
}

export interface IntentResult__Output {
  intent: _suki_pb_ssp_v1_CommandResult__Output | null;
  intent_type: string;
  intent_alternates: _suki_pb_ssp_v1_CommandResult__Output[];
}
