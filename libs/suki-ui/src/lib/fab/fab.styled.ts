import styled, { css } from "styled-components";

import { FabPosition, FabSize } from "./Fab";

const TEXT_PADDING_RIGHT = 16;

const StyledFabTextWrapper = styled.div`
  color: ${({ theme }) => theme.components.sukiIcon.color.primary};
  font-size: 12px;
  font-weight: 600;
  overflow: hidden;
  transition: width 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  width: 0;
`;
const StyledFabText = styled.div`
  display: block;
  opacity: 0;
  white-space: nowrap;
  width: max-content;
  transition: opacity 450ms ease-out;
`;

const StyledFab = styled.button<{ position: FabPosition; textWidth: number }>`
  background: ${({ theme }) => theme.components.fab.background.normal};
  box-shadow: ${({ theme }) => theme.components.fab.boxShadow};
  border: none;
  border-radius: 100px;
  padding: 0;
  position: absolute;
  ${({ position }) => {
    const [posV, posH] = position.split("");

    return css`
      ${posV === "t" ? "top" : "bottom"}: ${posV === "m" ? "50%" : "4%"};
      ${posH === "l" ? "left" : "right"}: ${posH === "c" ? "50%" : "4%"};
    `;
  }};

  user-select: none;
  overflow: hidden;
  z-index: 20;

  &:not([disabled]):hover {
    background: ${({ theme }) => theme.components.fab.background.hover};

    ${StyledFabTextWrapper} {
      width: ${({ textWidth }) => textWidth + TEXT_PADDING_RIGHT + "px"};
    }

    ${StyledFabText} {
      opacity: 1;
    }
  }

  &:not([disabled]):active {
    background: ${({ theme }) => theme.components.fab.background.active};
  }
`;

const StyledFabContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledFabIconWrapper = styled.div<{ size: FabSize }>`
  height: ${({ size, theme }) => theme.components.fab.size[size] + "px"};
  width: ${({ size, theme }) => theme.components.fab.size[size] + "px"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { StyledFab, StyledFabContent, StyledFabIconWrapper, StyledFabText, StyledFabTextWrapper };
export default StyledFab;
