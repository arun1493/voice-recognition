// Original file: node_modules/protobufs/src/suki/pb/ssp/dag/dag.proto

export interface Edge {
  source_id?: string;
  target_ids?: string[];
}

export interface Edge__Output {
  source_id: string;
  target_ids: string[];
}
