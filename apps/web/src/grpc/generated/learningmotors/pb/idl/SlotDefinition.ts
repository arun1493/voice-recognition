// Original file: node_modules/protobufs/src/learningmotors/pb/idl/slot.proto

import type { _learningmotors_pb_idl_Slot_Type } from "../../../learningmotors/pb/idl/Slot";

export interface SlotDefinition {
  type?: _learningmotors_pb_idl_Slot_Type | keyof typeof _learningmotors_pb_idl_Slot_Type;
  is_mandatory?: boolean;
}

export interface SlotDefinition__Output {
  type: keyof typeof _learningmotors_pb_idl_Slot_Type;
  is_mandatory: boolean;
}
