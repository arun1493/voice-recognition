// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

export interface SetCompositionIsBeingEditedResponse {
  composition_id?: string;
  is_already_being_edited?: boolean;
  is_set_to_being_edited_successfully?: boolean;
  editing_client?: string;
  is_s2_client?: boolean;
}

export interface SetCompositionIsBeingEditedResponse__Output {
  composition_id: string;
  is_already_being_edited: boolean;
  is_set_to_being_edited_successfully: boolean;
  editing_client: string;
  is_s2_client: boolean;
}
