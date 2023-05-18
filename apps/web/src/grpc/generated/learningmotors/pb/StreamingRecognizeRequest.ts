// Original file: node_modules/protobufs/src/learningmotors/pb/speechproxy.proto

import type {
  StreamingRecognitionConfig as _learningmotors_pb_StreamingRecognitionConfig,
  StreamingRecognitionConfig__Output as _learningmotors_pb_StreamingRecognitionConfig__Output
} from "../../learningmotors/pb/StreamingRecognitionConfig";
import type {
  SilenceDetection as _learningmotors_pb_SilenceDetection,
  SilenceDetection__Output as _learningmotors_pb_SilenceDetection__Output
} from "../../learningmotors/pb/SilenceDetection";

export interface StreamingRecognizeRequest {
  streaming_config?: _learningmotors_pb_StreamingRecognitionConfig | null;
  audio_content?: Buffer | Uint8Array | string;
  silence?: _learningmotors_pb_SilenceDetection | null;
  streaming_request?: "streaming_config" | "audio_content" | "silence";
}

export interface StreamingRecognizeRequest__Output {
  streaming_config?: _learningmotors_pb_StreamingRecognitionConfig__Output | null;
  audio_content?: Buffer;
  silence?: _learningmotors_pb_SilenceDetection__Output | null;
  streaming_request: "streaming_config" | "audio_content" | "silence";
}
