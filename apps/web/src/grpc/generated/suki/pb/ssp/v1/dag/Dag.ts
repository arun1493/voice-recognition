// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/dag/dag.proto

import type {
  Stage as _suki_pb_ssp_v1_dag_Stage,
  Stage__Output as _suki_pb_ssp_v1_dag_Stage__Output
} from "../../../../../suki/pb/ssp/v1/dag/Stage";
import type {
  Edge as _suki_pb_ssp_v1_dag_Edge,
  Edge__Output as _suki_pb_ssp_v1_dag_Edge__Output
} from "../../../../../suki/pb/ssp/v1/dag/Edge";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../../../google/protobuf/Timestamp";

export interface Dag {
  dag_id?: string;
  stages?: _suki_pb_ssp_v1_dag_Stage[];
  edges?: _suki_pb_ssp_v1_dag_Edge[];
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
}

export interface Dag__Output {
  dag_id: string;
  stages: _suki_pb_ssp_v1_dag_Stage__Output[];
  edges: _suki_pb_ssp_v1_dag_Edge__Output[];
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
}
