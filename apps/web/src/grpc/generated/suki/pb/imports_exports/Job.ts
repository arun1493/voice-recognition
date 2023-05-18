// Original file: node_modules/protobufs/src/suki/pb/imports_exports/imports_exports.proto

import type { JobType as _suki_pb_imports_exports_JobType } from "../../../suki/pb/imports_exports/JobType";
import type { JobStatus as _suki_pb_imports_exports_JobStatus } from "../../../suki/pb/imports_exports/JobStatus";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  ImportJobDetails as _suki_pb_imports_exports_ImportJobDetails,
  ImportJobDetails__Output as _suki_pb_imports_exports_ImportJobDetails__Output
} from "../../../suki/pb/imports_exports/ImportJobDetails";

export interface Job {
  id?: string;
  organization_id?: string;
  user_id?: string;
  job_type?: _suki_pb_imports_exports_JobType | keyof typeof _suki_pb_imports_exports_JobType;
  status?: _suki_pb_imports_exports_JobStatus | keyof typeof _suki_pb_imports_exports_JobStatus;
  created_at?: _google_protobuf_Timestamp | null;
  started_at?: _google_protobuf_Timestamp | null;
  completed_at?: _google_protobuf_Timestamp | null;
  import_job_details?: _suki_pb_imports_exports_ImportJobDetails | null;
  job_details?: "import_job_details";
}

export interface Job__Output {
  id: string;
  organization_id: string;
  user_id: string;
  job_type: keyof typeof _suki_pb_imports_exports_JobType;
  status: keyof typeof _suki_pb_imports_exports_JobStatus;
  created_at: _google_protobuf_Timestamp__Output | null;
  started_at: _google_protobuf_Timestamp__Output | null;
  completed_at: _google_protobuf_Timestamp__Output | null;
  import_job_details?: _suki_pb_imports_exports_ImportJobDetails__Output | null;
  job_details: "import_job_details";
}
