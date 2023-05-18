// Original file: node_modules/protobufs/src/learningmotors/pb/idl/metrics.proto

import type { Long } from "@grpc/proto-loader";

export interface Metrics {
  intent_frequency?: { [key: number]: number | string | Long };
}

export interface Metrics__Output {
  intent_frequency: { [key: number]: string };
}
