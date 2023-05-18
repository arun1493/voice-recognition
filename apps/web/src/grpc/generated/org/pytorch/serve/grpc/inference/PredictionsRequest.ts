// Original file: node_modules/protobufs/src/suki/pb/ml/inference.proto

export interface PredictionsRequest {
  model_name?: string;
  model_version?: string;
  input?: { [key: string]: Buffer | Uint8Array | string };
}

export interface PredictionsRequest__Output {
  model_name: string;
  model_version: string;
  input: { [key: string]: Buffer };
}
