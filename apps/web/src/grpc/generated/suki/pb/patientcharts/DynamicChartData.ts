// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type { DynamicDataType as _suki_pb_patientcharts_DynamicDataType } from "../../../suki/pb/patientcharts/DynamicDataType";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface DynamicChartData {
  type?: _suki_pb_patientcharts_DynamicDataType | keyof typeof _suki_pb_patientcharts_DynamicDataType;
  content?: string;
  recorded_date?: _google_protobuf_Timestamp | null;
  error?: string;
  json_content?: string;
  effective_date?: _google_protobuf_Timestamp | null;
  resulted_date?: _google_protobuf_Timestamp | null;
  should_have_dates?: boolean;
}

export interface DynamicChartData__Output {
  type: keyof typeof _suki_pb_patientcharts_DynamicDataType;
  content: string;
  recorded_date: _google_protobuf_Timestamp__Output | null;
  error: string;
  json_content: string;
  effective_date: _google_protobuf_Timestamp__Output | null;
  resulted_date: _google_protobuf_Timestamp__Output | null;
  should_have_dates: boolean;
}
