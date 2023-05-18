enum SukiAgentSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  OOBE_SM = "oobe_sm",
  OOBE_LG = "oobe_lg"
}

const SukiAgentSizeVsPixels = {
  [SukiAgentSize.SM]: 154,
  [SukiAgentSize.MD]: 200,
  [SukiAgentSize.LG]: 220,
  [SukiAgentSize.XL]: 252,
  [SukiAgentSize.OOBE_SM]: 240,
  [SukiAgentSize.OOBE_LG]: 278
};

const SukiAgentRingWidth = {
  [SukiAgentSize.SM]: 2,
  [SukiAgentSize.MD]: 4,
  [SukiAgentSize.LG]: 6,
  [SukiAgentSize.XL]: 8,
  [SukiAgentSize.OOBE_SM]: 8,
  [SukiAgentSize.OOBE_LG]: 8
};

export { SukiAgentRingWidth, SukiAgentSize, SukiAgentSizeVsPixels };
