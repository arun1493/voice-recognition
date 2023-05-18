import styled from "styled-components";

const StyledTooltip = styled.div<{ isShown: boolean; sidePosition?: "left" | "right"; topPosition?: number }>`
  position: absolute;
  opacity: ${({ isShown }) => (isShown ? "1" : "0")};
  top: ${({ topPosition }) => `${topPosition || 36}px`};
  padding: 4px 8px;
  background: ${({ theme }) => theme.components.tooltip.background};
  border-radius: 4px;
  white-space: nowrap;
  ${({ sidePosition }) => sidePosition && `${sidePosition}: 0`};
  transition: opacity 150ms ease-in-out;
  z-index: 1500;
`;

export { StyledTooltip };
