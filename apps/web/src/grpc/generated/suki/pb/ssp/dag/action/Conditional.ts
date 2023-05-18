// Original file: node_modules/protobufs/src/suki/pb/ssp/dag/action/conditional.proto

import type {
  Hypothesis as _suki_pb_ssp_dag_action_Hypothesis,
  Hypothesis__Output as _suki_pb_ssp_dag_action_Hypothesis__Output
} from "../../../../../suki/pb/ssp/dag/action/Hypothesis";
import type {
  Conclusion as _suki_pb_ssp_dag_action_Conclusion,
  Conclusion__Output as _suki_pb_ssp_dag_action_Conclusion__Output
} from "../../../../../suki/pb/ssp/dag/action/Conclusion";

export interface Conditional {
  hypothesis?: _suki_pb_ssp_dag_action_Hypothesis | null;
  conclusion?: _suki_pb_ssp_dag_action_Conclusion | null;
}

export interface Conditional__Output {
  hypothesis: _suki_pb_ssp_dag_action_Hypothesis__Output | null;
  conclusion: _suki_pb_ssp_dag_action_Conclusion__Output | null;
}
