// Original file: node_modules/protobufs/src/suki/pb/ssp/dag/action/conditional.proto

export interface Conclusion {
  target_id_if_true?: string;
  target_id_if_false?: string;
}

export interface Conclusion__Output {
  target_id_if_true: string;
  target_id_if_false: string;
}
