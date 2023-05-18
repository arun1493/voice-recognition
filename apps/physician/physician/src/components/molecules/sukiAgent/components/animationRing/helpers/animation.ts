import { RING_ANIMATION_DURATION, RING_BASE_OPACITY, RING_SCALE, SukiAgentState } from "../../../../../../constants";

function isValidSukiAgentStateForSingleRingAnimation(agentStatus: SukiAgentState, isAgentActive: boolean) {
  return (isAgentActive && agentStatus === SukiAgentState.AWAKE) || agentStatus === SukiAgentState.PROCESSING;
}

function isValidSukiAgentStateForMultipleRingAnimation(agentStatus: SukiAgentState, isAgentActive: boolean) {
  return (
    isAgentActive &&
    !isValidSukiAgentStateForSingleRingAnimation(agentStatus, isAgentActive) &&
    agentStatus === SukiAgentState.LISTENING
  );
}

function getDictationRingVariants(ringsCount: number) {
  const dictationRingVariants = [];
  for (let i = ringsCount; i > 0; i--) {
    const RING_VARIANTS = {
      oscillate: {
        opacity: RING_BASE_OPACITY - i * 0.2,
        scale: RING_SCALE + i * 0.01,
        transition: {
          yoyo: Infinity,
          duration: RING_ANIMATION_DURATION,
          type: "tween",
          delay: i * 0.1,
          ease: "easeInOut"
        }
      }
    };

    dictationRingVariants.push(RING_VARIANTS);
  }
  return dictationRingVariants;
}

export {
  getDictationRingVariants,
  isValidSukiAgentStateForMultipleRingAnimation,
  isValidSukiAgentStateForSingleRingAnimation
};
