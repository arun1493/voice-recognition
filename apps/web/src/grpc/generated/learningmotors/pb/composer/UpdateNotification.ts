// Original file: node_modules/protobufs/src/learningmotors/pb/composer/update_notification.proto

import type { ServiceName as _learningmotors_pb_service_ServiceName } from "../../../learningmotors/pb/service/ServiceName";

// Original file: node_modules/protobufs/src/learningmotors/pb/composer/update_notification.proto

export enum _learningmotors_pb_composer_UpdateNotification_Type {
  SECTION_UPDATE = 0,
  USERDONE_UPDATE = 1
}

export interface UpdateNotification {
  service_name?: _learningmotors_pb_service_ServiceName | keyof typeof _learningmotors_pb_service_ServiceName;
  organization_id?: string;
  user_id?: string;
  id?: string;
  section_ids?: string[];
  type?:
    | _learningmotors_pb_composer_UpdateNotification_Type
    | keyof typeof _learningmotors_pb_composer_UpdateNotification_Type;
}

export interface UpdateNotification__Output {
  service_name: keyof typeof _learningmotors_pb_service_ServiceName;
  organization_id: string;
  user_id: string;
  id: string;
  section_ids: string[];
  type: keyof typeof _learningmotors_pb_composer_UpdateNotification_Type;
}
