// Original file: node_modules/protobufs/src/suki/pb/suki_internal/suki_server/speech.proto

export interface SpeechContent {
  audio_data?: Buffer | Uint8Array | string;
}

export interface SpeechContent__Output {
  audio_data: Buffer;
}
