// Original file: node_modules/protobufs/src/learningmotors/pb/speechproxy.proto

export interface TextResponse {
  transcript?: string;
  confidence?: number | string;
  final?: boolean;
  alternative?: boolean;
}

export interface TextResponse__Output {
  transcript: string;
  confidence: number;
  final: boolean;
  alternative: boolean;
}
