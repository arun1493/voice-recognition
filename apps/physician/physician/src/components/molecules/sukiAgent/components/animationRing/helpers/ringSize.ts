import { SukiAgentRingWidth, SukiAgentSize } from "../../../../../../constants";

function getRingWidth(agentSize: SukiAgentSize, agentPosition: "center" | "bottom") {
  if (agentPosition === "bottom") return SukiAgentRingWidth[SukiAgentSize.SM];
  return SukiAgentRingWidth[agentSize] || SukiAgentRingWidth[SukiAgentSize.XL];
}

export { getRingWidth };
