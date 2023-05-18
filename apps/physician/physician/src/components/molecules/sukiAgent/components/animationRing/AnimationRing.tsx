import _map from "lodash/map";
import { Variants } from "framer-motion";
import { FunctionComponent, memo } from "react";

import {
  getDictationRingVariants,
  isValidSukiAgentStateForMultipleRingAnimation,
  isValidSukiAgentStateForSingleRingAnimation
} from "./helpers";
import {
  RING_BASE_OPACITY,
  RING_OPACITY_INDEX,
  SINGLE_RING_VARIANTS,
  SukiAgentSize,
  SukiAgentState
} from "../../../../../constants";
import { Ring } from "./animationRing.styled";

interface AnimationRingProps {
  agentPosition: "center" | "bottom";
  agentStatus: SukiAgentState;
  isActive: boolean;
  size: SukiAgentSize;
}

const DICTATION_RING_VARIANTS = getDictationRingVariants(6);

const AnimationRing: FunctionComponent<AnimationRingProps> = ({ agentPosition, agentStatus, isActive, size }) => {
  const renderRing = (ringVariants: Variants, ringIndex: number, isSingleRing?: boolean) => {
    const opacity = isSingleRing ? RING_BASE_OPACITY : ringIndex * RING_OPACITY_INDEX;

    return (
      <Ring
        agentPosition={agentPosition}
        agentSize={size}
        animate="oscillate"
        key={ringIndex}
        opacity={opacity}
        variants={ringVariants}
      />
    );
  };

  if (isValidSukiAgentStateForSingleRingAnimation(agentStatus, isActive)) {
    return renderRing(SINGLE_RING_VARIANTS, 0, true);
  }

  if (isValidSukiAgentStateForMultipleRingAnimation(agentStatus, isActive)) {
    return <>{_map(DICTATION_RING_VARIANTS, (variants, index) => renderRing(variants, index))}</>;
  }
  return null;
};

export default memo(AnimationRing);
