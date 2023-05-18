// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  Dosage as _suki_pb_patientcharts_Dosage,
  Dosage__Output as _suki_pb_patientcharts_Dosage__Output
} from "../../../suki/pb/patientcharts/Dosage";

// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

export enum _suki_pb_patientcharts_MedicationStructuredSig_FrequencyType {
  UNKNOWN_FREQ = 0,
  DAILY = 1,
  EVERY_OTHER_DAY = 2,
  BID = 3,
  TID = 4,
  QID = 5,
  QHS = 6,
  Q4H = 7,
  Q4_6H = 8,
  QWK = 9
}

// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

export enum _suki_pb_patientcharts_MedicationStructuredSig_RouteType {
  UNKNOWN_ROUTE = 0,
  PO = 1,
  PR = 2,
  IM = 3,
  IV = 4,
  ID = 5,
  IN = 6,
  TP = 7,
  SL = 8,
  BUCC = 9,
  IP = 10
}

export interface MedicationStructuredSig {
  dosage?: _suki_pb_patientcharts_Dosage | null;
  route?:
    | _suki_pb_patientcharts_MedicationStructuredSig_RouteType
    | keyof typeof _suki_pb_patientcharts_MedicationStructuredSig_RouteType;
  frequency?:
    | _suki_pb_patientcharts_MedicationStructuredSig_FrequencyType
    | keyof typeof _suki_pb_patientcharts_MedicationStructuredSig_FrequencyType;
  duration_in_days?: number;
  refills?: number;
  order_type_id?: string;
}

export interface MedicationStructuredSig__Output {
  dosage: _suki_pb_patientcharts_Dosage__Output | null;
  route: keyof typeof _suki_pb_patientcharts_MedicationStructuredSig_RouteType;
  frequency: keyof typeof _suki_pb_patientcharts_MedicationStructuredSig_FrequencyType;
  duration_in_days: number;
  refills: number;
  order_type_id: string;
}
