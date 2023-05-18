// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/dag/action/cache.proto

// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/dag/action/cache.proto

export enum _suki_pb_ssp_v1_dag_action_CacheAction_Type {
  UNKNOWN = 0,
  GET = 1,
  SET = 2
}

export interface CacheAction {
  key?: string;
  type?: _suki_pb_ssp_v1_dag_action_CacheAction_Type | keyof typeof _suki_pb_ssp_v1_dag_action_CacheAction_Type;
}

export interface CacheAction__Output {
  key: string;
  type: keyof typeof _suki_pb_ssp_v1_dag_action_CacheAction_Type;
}
