// Original file: node_modules/protobufs/src/learningmotors/pb/transcript/transcript.proto

export interface TranscriptResponse {
  uri?: string;
  raw_content_type?: string;
  raw_content?: string[];
  text_content?: string[];
}

export interface TranscriptResponse__Output {
  uri: string;
  raw_content_type: string;
  raw_content: string[];
  text_content: string[];
}
