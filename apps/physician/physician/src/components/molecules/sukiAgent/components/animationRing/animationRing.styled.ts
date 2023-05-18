import { motion } from "framer-motion";
import styled from "styled-components";

import { getRingWidth } from "./helpers";
import { SukiAgentSize } from "../../../../../constants";

type RingProps = {
  agentPosition: "center" | "bottom";
  agentSize: SukiAgentSize;
  opacity: number;
};

const Ring = styled(motion.div)<RingProps>`
  border: ${({ agentPosition, agentSize, theme }) =>
    `${getRingWidth(agentSize, agentPosition)}px solid ${theme.components.ring.color}`};
  border-radius: 50%;
  height: 100%;
  width: 100%;
  opacity: ${({ opacity }) => opacity};
  position: absolute;
`;

export { Ring };
