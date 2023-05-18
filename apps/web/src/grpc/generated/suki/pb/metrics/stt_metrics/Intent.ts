// Original file: node_modules/protobufs/src/suki/pb/metrics/stt_metric/stt_metric.proto

import type {
  Slot as _suki_pb_metrics_stt_metrics_Slot,
  Slot__Output as _suki_pb_metrics_stt_metrics_Slot__Output
} from "../../../../suki/pb/metrics/stt_metrics/Slot";

export interface Intent {
  type?: string;
  slots?: _suki_pb_metrics_stt_metrics_Slot[];
}

export interface Intent__Output {
  type: string;
  slots: _suki_pb_metrics_stt_metrics_Slot__Output[];
}
