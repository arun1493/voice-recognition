// Original file: node_modules/protobufs/src/learningmotors/pb/idl/intent.proto

import type { _learningmotors_pb_idl_Intent_Type } from "../../../learningmotors/pb/idl/Intent";
import type { _learningmotors_pb_Context_View } from "../../../learningmotors/pb/Context";
import type {
  SlotDefinition as _learningmotors_pb_idl_SlotDefinition,
  SlotDefinition__Output as _learningmotors_pb_idl_SlotDefinition__Output
} from "../../../learningmotors/pb/idl/SlotDefinition";
import type { _learningmotors_pb_idl_Intent_Source } from "../../../learningmotors/pb/idl/Intent";

export interface _learningmotors_pb_idl_IntentDefinition_FuzzyStrMatchConfig {
  keywords?: string[];
}

export interface _learningmotors_pb_idl_IntentDefinition_FuzzyStrMatchConfig__Output {
  keywords: string[];
}

export interface _learningmotors_pb_idl_IntentDefinition_GoogleSpeechConfig {
  hints?: string[];
}

export interface _learningmotors_pb_idl_IntentDefinition_GoogleSpeechConfig__Output {
  hints: string[];
}

export interface IntentDefinition {
  type?: _learningmotors_pb_idl_Intent_Type | keyof typeof _learningmotors_pb_idl_Intent_Type;
  views_allowed?: (_learningmotors_pb_Context_View | keyof typeof _learningmotors_pb_Context_View)[];
  views_not_allowed?: (_learningmotors_pb_Context_View | keyof typeof _learningmotors_pb_Context_View)[];
  slot_defs?: _learningmotors_pb_idl_SlotDefinition[];
  fuzzy_config?: _learningmotors_pb_idl_IntentDefinition_FuzzyStrMatchConfig | null;
  google_speech_config?: _learningmotors_pb_idl_IntentDefinition_GoogleSpeechConfig | null;
  is_early_detect?: boolean;
  source?: _learningmotors_pb_idl_Intent_Source | keyof typeof _learningmotors_pb_idl_Intent_Source;
  is_demo?: boolean;
}

export interface IntentDefinition__Output {
  type: keyof typeof _learningmotors_pb_idl_Intent_Type;
  views_allowed: (keyof typeof _learningmotors_pb_Context_View)[];
  views_not_allowed: (keyof typeof _learningmotors_pb_Context_View)[];
  slot_defs: _learningmotors_pb_idl_SlotDefinition__Output[];
  fuzzy_config: _learningmotors_pb_idl_IntentDefinition_FuzzyStrMatchConfig__Output | null;
  google_speech_config: _learningmotors_pb_idl_IntentDefinition_GoogleSpeechConfig__Output | null;
  is_early_detect: boolean;
  source: keyof typeof _learningmotors_pb_idl_Intent_Source;
  is_demo: boolean;
}
