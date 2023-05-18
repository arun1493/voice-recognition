enum SukiAgentState {
  AWAKE = "AWAKE",
  PROCESSING = "PROCESSING",
  CANCELLED = "CANCELLED",
  READY = "READY",
  MUTED = "MUTED",
  LISTENING = "LISTENING"
}

type SukiAgentStateType = SukiAgentState;

export { SukiAgentState, SukiAgentStateType };
