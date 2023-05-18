import styled, { css } from "styled-components";
import { Button, flexCenterAround, mediaScreenWidth, screenSize, Text } from "@suki-web/suki-ui";

const getBreakpoint = (width: number) => `${width + 1}px`;

interface StyledNewNoteButtonProps {
  floatExtremeRight: boolean;
}

const StyledNewNoteText = styled(Text)`
  display: none;
  opacity: 0;
  transition: opacity 150ms ease-out;
  white-space: nowrap;
`;

const StyledNewNoteButton = styled(Button)<StyledNewNoteButtonProps>`
  background: ${({ theme }) => theme.components.fabButton.backgroundColor};
  box-shadow: ${({ theme }) => theme.components.fabButton.boxShadow};
  border: none;
  height: 40px;
  width: 40px;
  padding: 0 8px;
  position: absolute;
  bottom: 4%;
  right: 4%;
  user-select: none;
  overflow: hidden;
  transition: width 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 20;

  ${({ floatExtremeRight }) =>
    !floatExtremeRight &&
    css`
      @media (min-width: ${mediaScreenWidth.xs}) {
        right: calc(50% - 240px);
      }
    `};

  &:not([disabled]):hover {
    opacity: 1;
    width: 114px;

    ${StyledNewNoteText} {
      display: block;
      opacity: 1;
    }
  }

  &:not([disabled]):active {
    background: ${({ theme }) => theme.components.fabButton.activeBackgroundColor};
  }

  @media (min-width: ${getBreakpoint(screenSize.xs)}) {
    height: 48px;
    width: 48px;
    padding: 0 12px;

    &:not([disabled]):hover {
      width: 140px;
    }
  }
`;

const StyledNewNoteButtonContent = styled.div`
  ${flexCenterAround};
`;

export { StyledNewNoteButton, StyledNewNoteButtonContent, StyledNewNoteText };
