// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

export interface CheckIfCompositionIsBeingEditedResponse {
  composition_id?: string;
  is_being_edited?: boolean;
  editing_client?: string;
  is_s2_client?: boolean;
}

export interface CheckIfCompositionIsBeingEditedResponse__Output {
  composition_id: string;
  is_being_edited: boolean;
  editing_client: string;
  is_s2_client: boolean;
}
