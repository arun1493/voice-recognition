// Original file: node_modules/protobufs/src/suki/pb/nms/nms_event.proto

import type { EventType as _suki_pb_nms_EventType } from "../../../suki/pb/nms/EventType";
import type {
  VoiceToTextEvent as _suki_pb_nms_VoiceToTextEvent,
  VoiceToTextEvent__Output as _suki_pb_nms_VoiceToTextEvent__Output
} from "../../../suki/pb/nms/VoiceToTextEvent";
import type {
  CommandEvent as _suki_pb_nms_CommandEvent,
  CommandEvent__Output as _suki_pb_nms_CommandEvent__Output
} from "../../../suki/pb/nms/CommandEvent";
import type {
  KeyboardEvent as _suki_pb_nms_KeyboardEvent,
  KeyboardEvent__Output as _suki_pb_nms_KeyboardEvent__Output
} from "../../../suki/pb/nms/KeyboardEvent";
import type {
  ClickEvent as _suki_pb_nms_ClickEvent,
  ClickEvent__Output as _suki_pb_nms_ClickEvent__Output
} from "../../../suki/pb/nms/ClickEvent";
import type {
  SignalEvent as _suki_pb_nms_SignalEvent,
  SignalEvent__Output as _suki_pb_nms_SignalEvent__Output
} from "../../../suki/pb/nms/SignalEvent";

export interface NMSEvent {
  type?: _suki_pb_nms_EventType | keyof typeof _suki_pb_nms_EventType;
  voice_to_text_event?: _suki_pb_nms_VoiceToTextEvent | null;
  voice_intent_event?: _suki_pb_nms_CommandEvent | null;
  keyboard_event?: _suki_pb_nms_KeyboardEvent | null;
  click_event?: _suki_pb_nms_ClickEvent | null;
  signal_event?: _suki_pb_nms_SignalEvent | null;
  event?: "voice_to_text_event" | "voice_intent_event" | "keyboard_event" | "click_event" | "signal_event";
}

export interface NMSEvent__Output {
  type: keyof typeof _suki_pb_nms_EventType;
  voice_to_text_event?: _suki_pb_nms_VoiceToTextEvent__Output | null;
  voice_intent_event?: _suki_pb_nms_CommandEvent__Output | null;
  keyboard_event?: _suki_pb_nms_KeyboardEvent__Output | null;
  click_event?: _suki_pb_nms_ClickEvent__Output | null;
  signal_event?: _suki_pb_nms_SignalEvent__Output | null;
  event: "voice_to_text_event" | "voice_intent_event" | "keyboard_event" | "click_event" | "signal_event";
}
