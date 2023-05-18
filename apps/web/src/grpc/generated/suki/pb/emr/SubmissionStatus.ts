// Original file: node_modules/protobufs/src/suki/pb/emr/submission.proto

import type {
  SubmissionWarning as _suki_pb_emr_SubmissionWarning,
  SubmissionWarning__Output as _suki_pb_emr_SubmissionWarning__Output
} from "../../../suki/pb/emr/SubmissionWarning";
import type { Destination as _suki_pb_emr_Destination } from "../../../suki/pb/emr/Destination";

export interface SubmissionStatus {
  warning?: _suki_pb_emr_SubmissionWarning | null;
  final_destination?: _suki_pb_emr_Destination | keyof typeof _suki_pb_emr_Destination;
  status?: "warning" | "final_destination";
}

export interface SubmissionStatus__Output {
  warning?: _suki_pb_emr_SubmissionWarning__Output | null;
  final_destination?: keyof typeof _suki_pb_emr_Destination;
  status: "warning" | "final_destination";
}
