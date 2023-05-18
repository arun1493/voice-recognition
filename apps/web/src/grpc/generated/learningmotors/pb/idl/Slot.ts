// Original file: node_modules/protobufs/src/learningmotors/pb/idl/slot.proto

import type {
  SlotValue as _learningmotors_pb_idl_SlotValue,
  SlotValue__Output as _learningmotors_pb_idl_SlotValue__Output
} from "../../../learningmotors/pb/idl/SlotValue";

// Original file: node_modules/protobufs/src/learningmotors/pb/idl/slot.proto

export enum _learningmotors_pb_idl_Slot_Type {
  INVALID = 0,
  SECTION = 1,
  PATIENT = 2,
  NOTETYPE = 3,
  MACRO = 4,
  TRANSCRIPT = 5,
  SUBSECTION_HEADER = 6
}

export interface Slot {
  type?: _learningmotors_pb_idl_Slot_Type | keyof typeof _learningmotors_pb_idl_Slot_Type;
  ambiguous?: boolean;
  values?: _learningmotors_pb_idl_SlotValue[];
}

export interface Slot__Output {
  type: keyof typeof _learningmotors_pb_idl_Slot_Type;
  ambiguous: boolean;
  values: _learningmotors_pb_idl_SlotValue__Output[];
}
