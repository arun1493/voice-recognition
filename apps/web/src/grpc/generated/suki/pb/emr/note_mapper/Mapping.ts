// Original file: node_modules/protobufs/src/suki/pb/emr/note_mapper/ms_emr_note_mapper.proto

// Original file: node_modules/protobufs/src/suki/pb/emr/note_mapper/ms_emr_note_mapper.proto

export enum _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus {
  PRELIMINARY = 0,
  FINAL = 1
}

export interface Mapping {
  patient_id?: string;
  emr_user_id?: string;
  emr_note_id?: string;
  emr_encounter_id?: string;
  composition_id?: string;
  emr_note_status?:
    | _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus
    | keyof typeof _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus;
  emr_appointment_id?: string;
}

export interface Mapping__Output {
  patient_id: string;
  emr_user_id: string;
  emr_note_id: string;
  emr_encounter_id: string;
  composition_id: string;
  emr_note_status: keyof typeof _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus;
  emr_appointment_id: string;
}
