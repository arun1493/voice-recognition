// Original file: node_modules/protobufs/src/suki/pb/audit/audit.proto

// Original file: node_modules/protobufs/src/suki/pb/audit/audit.proto

export enum _suki_pb_audit_Data_Category {
  UNKNOWN = 0,
  PATIENT = 1,
  COMPOSITION = 2,
  NOTETYPE = 3,
  TRANSCRIPT = 4
}

export interface Data {
  category?: _suki_pb_audit_Data_Category | keyof typeof _suki_pb_audit_Data_Category;
  organization_id?: string;
  ids?: string[];
}

export interface Data__Output {
  category: keyof typeof _suki_pb_audit_Data_Category;
  organization_id: string;
  ids: string[];
}
