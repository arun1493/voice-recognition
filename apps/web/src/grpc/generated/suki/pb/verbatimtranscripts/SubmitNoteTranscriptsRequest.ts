// Original file: node_modules/protobufs/src/suki/pb/verbatimtranscripts/verbatimtranscripts.proto

import type {
  TranscriptData as _suki_pb_verbatimtranscripts_TranscriptData,
  TranscriptData__Output as _suki_pb_verbatimtranscripts_TranscriptData__Output
} from "../../../suki/pb/verbatimtranscripts/TranscriptData";

export interface SubmitNoteTranscriptsRequest {
  note_id?: string;
  composition_id?: string;
  organization_id?: string;
  user_id?: string;
  transcripts_data?: _suki_pb_verbatimtranscripts_TranscriptData[];
}

export interface SubmitNoteTranscriptsRequest__Output {
  note_id: string;
  composition_id: string;
  organization_id: string;
  user_id: string;
  transcripts_data: _suki_pb_verbatimtranscripts_TranscriptData__Output[];
}
