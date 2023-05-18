// Original file: node_modules/protobufs/src/suki/pb/ml/inference.proto

export interface PredictionResponse {
  prediction?: Buffer | Uint8Array | string;
}

export interface PredictionResponse__Output {
  prediction: Buffer;
}
