// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/resource.proto

export interface TranscriptionConfig {
  detect_end_of_utterance?: boolean;
  provide_intermediate_results?: boolean;
  provide_alternate_results?: boolean;
  max_alternates?: number;
  identify_phi?: boolean;
}

export interface TranscriptionConfig__Output {
  detect_end_of_utterance: boolean;
  provide_intermediate_results: boolean;
  provide_alternate_results: boolean;
  max_alternates: number;
  identify_phi: boolean;
}
