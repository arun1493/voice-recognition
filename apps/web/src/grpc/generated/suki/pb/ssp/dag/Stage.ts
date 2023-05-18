// Original file: node_modules/protobufs/src/suki/pb/ssp/dag/dag.proto

import type {
  Any as _google_protobuf_Any,
  Any__Output as _google_protobuf_Any__Output
} from "../../../../google/protobuf/Any";
import type {
  Start as _suki_pb_ssp_dag_Start,
  Start__Output as _suki_pb_ssp_dag_Start__Output
} from "../../../../suki/pb/ssp/dag/Start";
import type {
  End as _suki_pb_ssp_dag_End,
  End__Output as _suki_pb_ssp_dag_End__Output
} from "../../../../suki/pb/ssp/dag/End";
import type {
  Conditional as _suki_pb_ssp_dag_action_Conditional,
  Conditional__Output as _suki_pb_ssp_dag_action_Conditional__Output
} from "../../../../suki/pb/ssp/dag/action/Conditional";
import type {
  RPCCall as _suki_pb_ssp_dag_action_RPCCall,
  RPCCall__Output as _suki_pb_ssp_dag_action_RPCCall__Output
} from "../../../../suki/pb/ssp/dag/action/RPCCall";
import type {
  CacheAction as _suki_pb_ssp_dag_action_CacheAction,
  CacheAction__Output as _suki_pb_ssp_dag_action_CacheAction__Output
} from "../../../../suki/pb/ssp/dag/action/CacheAction";

export interface Stage {
  node_id?: string;
  any?: _google_protobuf_Any | null;
  start?: _suki_pb_ssp_dag_Start | null;
  end?: _suki_pb_ssp_dag_End | null;
  conditional?: _suki_pb_ssp_dag_action_Conditional | null;
  rpc_call?: _suki_pb_ssp_dag_action_RPCCall | null;
  cach_action?: _suki_pb_ssp_dag_action_CacheAction | null;
  action?: "any" | "start" | "end" | "conditional" | "rpc_call" | "cach_action";
}

export interface Stage__Output {
  node_id: string;
  any?: _google_protobuf_Any__Output | null;
  start?: _suki_pb_ssp_dag_Start__Output | null;
  end?: _suki_pb_ssp_dag_End__Output | null;
  conditional?: _suki_pb_ssp_dag_action_Conditional__Output | null;
  rpc_call?: _suki_pb_ssp_dag_action_RPCCall__Output | null;
  cach_action?: _suki_pb_ssp_dag_action_CacheAction__Output | null;
  action: "any" | "start" | "end" | "conditional" | "rpc_call" | "cach_action";
}
