// Original file: node_modules/protobufs/src/suki/pb/ml/ms_online.proto

export interface ModelResults {
  accuracy?: number | string;
  uri?: string;
  id?: string;
  hyperparameters?: { [key: string]: string };
}

export interface ModelResults__Output {
  accuracy: number;
  uri: string;
  id: string;
  hyperparameters: { [key: string]: string };
}
