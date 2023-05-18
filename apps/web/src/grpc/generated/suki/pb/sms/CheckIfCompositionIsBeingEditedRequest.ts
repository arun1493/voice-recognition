// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

export interface CheckIfCompositionIsBeingEditedRequest {
  organization_id?: string;
  composition_id?: string;
  user_id?: string;
}

export interface CheckIfCompositionIsBeingEditedRequest__Output {
  organization_id: string;
  composition_id: string;
  user_id: string;
}
