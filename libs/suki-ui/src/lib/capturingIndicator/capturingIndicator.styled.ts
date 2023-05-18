import styled, { keyframes } from "styled-components";

import { flexCenter } from "../../helpers";

const StyledWrapper = styled.div`
  ${flexCenter};
  width: fit-content;
`;

const passive = `
  opacity: 0;
  transform: scale(1);
`;

const active = `
  opacity: 1;
  transform: scale(1.3);
`;

const halfVisibleAnimationPercent = 15;
const animationDurationS = 3;

const generateDot = (activePoint: number) => keyframes`
  0% {
    ${passive};
  }
  ${activePoint - halfVisibleAnimationPercent}% {
    ${passive};
  }
  ${activePoint}% {
    ${active};
  }
  ${activePoint + halfVisibleAnimationPercent}% {
    ${passive};
  } 
  100% {
    ${passive};
  }
`;

const Dot = styled.div<{ dotSize: number }>`
  height: ${({ dotSize }) => dotSize}px;
  width: ${({ dotSize }) => dotSize}px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.components.capturingIndicator.background};
  margin: 0px 4px;
`;

const DotIndicator1 = styled(Dot)`
  animation: ${generateDot(20)} ${animationDurationS}s linear infinite;
`;

const DotIndicator2 = styled(Dot)`
  animation: ${generateDot(30)} ${animationDurationS}s linear infinite;
`;

const DotIndicator3 = styled(Dot)`
  animation: ${generateDot(40)} ${animationDurationS}s linear infinite;
`;

export { DotIndicator1, DotIndicator2, DotIndicator3, StyledWrapper };
