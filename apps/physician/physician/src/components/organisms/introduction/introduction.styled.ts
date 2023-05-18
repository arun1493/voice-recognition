import styled from "styled-components";
import { StyledIntroContainerProps } from "./Introduction";

const StyledIntroContainer = styled.div<StyledIntroContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: ${({ isTopAligned }) => (isTopAligned ? "start" : "center")};
  justify-content: center;
`;

export { StyledIntroContainer };
