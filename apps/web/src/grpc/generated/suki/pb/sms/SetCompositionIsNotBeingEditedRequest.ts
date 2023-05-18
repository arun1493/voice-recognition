// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

export interface SetCompositionIsNotBeingEditedRequest {
  organization_id?: string;
  composition_id?: string;
  user_id?: string;
  editing_client?: string;
}

export interface SetCompositionIsNotBeingEditedRequest__Output {
  organization_id: string;
  composition_id: string;
  user_id: string;
  editing_client: string;
}
