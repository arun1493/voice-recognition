// Original file: node_modules/protobufs/src/suki/pb/nms/property_engine/properties.proto

import type { SukiEntityProperties as _suki_pb_nms_property_engine_SukiEntityProperties } from "../../../../suki/pb/nms/property_engine/SukiEntityProperties";
import type { MedicalCodeProperties as _suki_pb_nms_property_engine_MedicalCodeProperties } from "../../../../suki/pb/nms/property_engine/MedicalCodeProperties";
import type { LabTestProperties as _suki_pb_nms_property_engine_LabTestProperties } from "../../../../suki/pb/nms/property_engine/LabTestProperties";
import type { LabResultProperties as _suki_pb_nms_property_engine_LabResultProperties } from "../../../../suki/pb/nms/property_engine/LabResultProperties";
import type { RecommendationProperties as _suki_pb_nms_property_engine_RecommendationProperties } from "../../../../suki/pb/nms/property_engine/RecommendationProperties";
import type { DisplayProperties as _suki_pb_nms_property_engine_DisplayProperties } from "../../../../suki/pb/nms/property_engine/DisplayProperties";
import type { VersionProperties as _suki_pb_nms_property_engine_VersionProperties } from "../../../../suki/pb/nms/property_engine/VersionProperties";
import type { EhrProperties as _suki_pb_nms_property_engine_EhrProperties } from "../../../../suki/pb/nms/property_engine/EhrProperties";
import type { ScribeProperties as _suki_pb_nms_property_engine_ScribeProperties } from "../../../../suki/pb/nms/property_engine/ScribeProperties";
import type { TextSourceProperties as _suki_pb_nms_property_engine_TextSourceProperties } from "../../../../suki/pb/nms/property_engine/TextSourceProperties";
import type { EventProperties as _suki_pb_nms_property_engine_EventProperties } from "../../../../suki/pb/nms/property_engine/EventProperties";
import type {
  Any as _google_protobuf_Any,
  Any__Output as _google_protobuf_Any__Output
} from "../../../../google/protobuf/Any";

// Original file: node_modules/protobufs/src/suki/pb/nms/property_engine/properties.proto

export enum _suki_pb_nms_property_engine_Property_ProtoDataType {
  UNKNOWN = 0,
  STRING = 1,
  INT32 = 2,
  INT64 = 3,
  UINT32 = 4,
  UINT64 = 5,
  SINT32 = 6,
  SINT64 = 7,
  FIXED32 = 8,
  FIXED64 = 9,
  SFIXED32 = 10,
  SFIXED64 = 11,
  FLOAT = 12,
  DOUBLE = 13,
  BOOL = 14,
  BYTES = 15,
  TIMESTAMP = 16,
  ANY = 17,
  ENUM = 18,
  MESSAGE = 19
}

export interface Property {
  entity_type?:
    | _suki_pb_nms_property_engine_SukiEntityProperties
    | keyof typeof _suki_pb_nms_property_engine_SukiEntityProperties;
  medical_code_type?:
    | _suki_pb_nms_property_engine_MedicalCodeProperties
    | keyof typeof _suki_pb_nms_property_engine_MedicalCodeProperties;
  lab_test_type?:
    | _suki_pb_nms_property_engine_LabTestProperties
    | keyof typeof _suki_pb_nms_property_engine_LabTestProperties;
  lab_result_type?:
    | _suki_pb_nms_property_engine_LabResultProperties
    | keyof typeof _suki_pb_nms_property_engine_LabResultProperties;
  recommendation_type?:
    | _suki_pb_nms_property_engine_RecommendationProperties
    | keyof typeof _suki_pb_nms_property_engine_RecommendationProperties;
  display_type?:
    | _suki_pb_nms_property_engine_DisplayProperties
    | keyof typeof _suki_pb_nms_property_engine_DisplayProperties;
  version_type?:
    | _suki_pb_nms_property_engine_VersionProperties
    | keyof typeof _suki_pb_nms_property_engine_VersionProperties;
  ehr_type?: _suki_pb_nms_property_engine_EhrProperties | keyof typeof _suki_pb_nms_property_engine_EhrProperties;
  scribe_type?:
    | _suki_pb_nms_property_engine_ScribeProperties
    | keyof typeof _suki_pb_nms_property_engine_ScribeProperties;
  text_source_type?:
    | _suki_pb_nms_property_engine_TextSourceProperties
    | keyof typeof _suki_pb_nms_property_engine_TextSourceProperties;
  event_type?: _suki_pb_nms_property_engine_EventProperties | keyof typeof _suki_pb_nms_property_engine_EventProperties;
  type?:
    | _suki_pb_nms_property_engine_Property_ProtoDataType
    | keyof typeof _suki_pb_nms_property_engine_Property_ProtoDataType;
  value?: _google_protobuf_Any | null;
  property_type?:
    | "entity_type"
    | "medical_code_type"
    | "lab_test_type"
    | "lab_result_type"
    | "recommendation_type"
    | "display_type"
    | "version_type"
    | "ehr_type"
    | "scribe_type"
    | "text_source_type"
    | "event_type";
}

export interface Property__Output {
  entity_type?: keyof typeof _suki_pb_nms_property_engine_SukiEntityProperties;
  medical_code_type?: keyof typeof _suki_pb_nms_property_engine_MedicalCodeProperties;
  lab_test_type?: keyof typeof _suki_pb_nms_property_engine_LabTestProperties;
  lab_result_type?: keyof typeof _suki_pb_nms_property_engine_LabResultProperties;
  recommendation_type?: keyof typeof _suki_pb_nms_property_engine_RecommendationProperties;
  display_type?: keyof typeof _suki_pb_nms_property_engine_DisplayProperties;
  version_type?: keyof typeof _suki_pb_nms_property_engine_VersionProperties;
  ehr_type?: keyof typeof _suki_pb_nms_property_engine_EhrProperties;
  scribe_type?: keyof typeof _suki_pb_nms_property_engine_ScribeProperties;
  text_source_type?: keyof typeof _suki_pb_nms_property_engine_TextSourceProperties;
  event_type?: keyof typeof _suki_pb_nms_property_engine_EventProperties;
  type: keyof typeof _suki_pb_nms_property_engine_Property_ProtoDataType;
  value: _google_protobuf_Any__Output | null;
  property_type:
    | "entity_type"
    | "medical_code_type"
    | "lab_test_type"
    | "lab_result_type"
    | "recommendation_type"
    | "display_type"
    | "version_type"
    | "ehr_type"
    | "scribe_type"
    | "text_source_type"
    | "event_type";
}
