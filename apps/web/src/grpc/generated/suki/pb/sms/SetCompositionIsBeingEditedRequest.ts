// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

export interface SetCompositionIsBeingEditedRequest {
  organization_id?: string;
  composition_id?: string;
  user_id?: string;
  editing_client?: string;
}

export interface SetCompositionIsBeingEditedRequest__Output {
  organization_id: string;
  composition_id: string;
  user_id: string;
  editing_client: string;
}
