// Original file: node_modules/protobufs/src/learningmotors/pb/data_validator/data_validator.proto

import type { _learningmotors_pb_idl_Intent_Type } from "../../../learningmotors/pb/idl/Intent";
import type {
  SlotValue as _learningmotors_pb_data_validator_SlotValue,
  SlotValue__Output as _learningmotors_pb_data_validator_SlotValue__Output
} from "../../../learningmotors/pb/data_validator/SlotValue";
import type { ValidationState as _learningmotors_pb_data_validator_ValidationState } from "../../../learningmotors/pb/data_validator/ValidationState";
import type {
  Context as _learningmotors_pb_Context,
  Context__Output as _learningmotors_pb_Context__Output
} from "../../../learningmotors/pb/Context";

export interface Data {
  id?: string;
  input?: string;
  intent_type?: _learningmotors_pb_idl_Intent_Type | keyof typeof _learningmotors_pb_idl_Intent_Type;
  slot_values?: _learningmotors_pb_data_validator_SlotValue[];
  validation_state?:
    | _learningmotors_pb_data_validator_ValidationState
    | keyof typeof _learningmotors_pb_data_validator_ValidationState;
  biased?: boolean;
  ui_context?: _learningmotors_pb_Context | null;
}

export interface Data__Output {
  id: string;
  input: string;
  intent_type: keyof typeof _learningmotors_pb_idl_Intent_Type;
  slot_values: _learningmotors_pb_data_validator_SlotValue__Output[];
  validation_state: keyof typeof _learningmotors_pb_data_validator_ValidationState;
  biased: boolean;
  ui_context: _learningmotors_pb_Context__Output | null;
}
