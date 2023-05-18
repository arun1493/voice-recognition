// Original file: node_modules/protobufs/src/learningmotors/pb/emr/update_notification.proto

// Original file: node_modules/protobufs/src/learningmotors/pb/emr/update_notification.proto

export enum _learningmotors_pb_emr_RecordDataDetail_RefreshType {
  FULL = 0,
  CHANGED = 1
}

export interface RecordDataDetail {
  refresh_type?:
    | _learningmotors_pb_emr_RecordDataDetail_RefreshType
    | keyof typeof _learningmotors_pb_emr_RecordDataDetail_RefreshType;
}

export interface RecordDataDetail__Output {
  refresh_type: keyof typeof _learningmotors_pb_emr_RecordDataDetail_RefreshType;
}
