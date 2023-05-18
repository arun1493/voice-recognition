import { motion } from "framer-motion";
import { mediaScreenWidth } from "@suki-web/suki-ui";
import styled, { css, keyframes } from "styled-components";

import { StyledSukiAgentProps } from "./SukiAgent";
import { SukiAgentSizeVsPixels } from "../../../constants";

const AGENT_TRANSITION_TIME = "0.4s";
const INACTIVE_AGENT_MULTIPLIER = 0.95;

const MoveUpDownSmall = keyframes`
  0% {
    top: 54%;
    width: 154px;
    height: 154px;
  }
  100% {
    top: 94%;
    width: 90px;
    height: 90px;
  }
`;

const MoveUpDownMedium = keyframes`
  0% {
    top: 54%;
    width: 154px;
    height: 154px;
  }
  100% {
    top: 94%;
    width: 106px;
    height: 106px;
  }
`;

const MoveUpDownLarge = keyframes`
  0% {
    top: 52%;
    width: 220px;
    height: 220px;
  }
  100% {
    top: 94%;
    width: 106px;
    height: 106px;
  }
`;

const grayFilter = ({ isActive }: StyledSukiAgentProps) =>
  !isActive && "-webkit-filter: grayscale(100%); filter: grayscale(100%);";

const SukiAgentContainer = styled(motion.div)<StyledSukiAgentProps>`
  width: ${({ isActive, size }) => `${SukiAgentSizeVsPixels[size] * (isActive ? 1 : INACTIVE_AGENT_MULTIPLIER)}px`};
  height: ${({ isActive, size }) => `${SukiAgentSizeVsPixels[size] * (isActive ? 1 : INACTIVE_AGENT_MULTIPLIER)}px`};
  transition: all ${AGENT_TRANSITION_TIME} ease-out;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(${({ horizontalOffset }) => `calc(-50% + ${horizontalOffset}px)`}, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  ${grayFilter};

  ${({ isHidden }) => isHidden && "display: none"};

  ${({ isAnimated }) =>
    isAnimated &&
    css`
      animation: ${MoveUpDownSmall} 1s linear forwards;

      @media (min-width: ${mediaScreenWidth.md}) {
        animation: ${MoveUpDownMedium} 1s linear forwards;
      }

      @media (min-width: ${mediaScreenWidth.lg}) {
        animation: ${MoveUpDownLarge} 1s linear forwards;
      }
    `};

  ${({ isActive, isBottomPosition }) =>
    isBottomPosition &&
    css`
      top: 94%;

      &&& {
        width: ${90 * (isActive ? 1 : INACTIVE_AGENT_MULTIPLIER)}px;
        height: ${90 * (isActive ? 1 : INACTIVE_AGENT_MULTIPLIER)}px;
      }

      @media (min-width: ${mediaScreenWidth.md}) {
        &&& {
          width: ${106 * (isActive ? 1 : INACTIVE_AGENT_MULTIPLIER)}px;
          height: ${106 * (isActive ? 1 : INACTIVE_AGENT_MULTIPLIER)}px;
        }
      }
    `}
`;

const SukiAgentIcon = styled(motion.img)`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export { SukiAgentContainer, SukiAgentIcon };
