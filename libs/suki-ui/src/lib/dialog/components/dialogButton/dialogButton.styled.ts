import styled from "styled-components";

import { DialogButtonType } from "./DialogButton";
import { flexCenter } from "../../../../helpers/styles";

const StyledDialogButton = styled.button<DialogButtonType & { isXXSScreen?: boolean }>`
  background: inherit;
  border: none;
  border-radius: 4px;
  ${flexCenter};
  flex-direction: row;
  color: ${({ theme, btnType }) =>
    btnType === "secondary"
      ? theme.components.dialog.button.color.secondary
      : theme.components.dialog.button.color.primary};
  cursor: pointer;
  font-weight: 600;
  font-size: ${({ isXXSScreen }) => (isXXSScreen ? "14px" : "16px")};
  line-height: 24px;
  height: ${({ isXXSScreen }) => (isXXSScreen ? "32px" : "40px")};
  min-width: ${({ isXXSScreen }) => (isXXSScreen ? "76px" : "96px")};
  padding: 0 8px;

  &:hover {
    background-color: ${({ theme }) => theme.components.dialog.button.backgroundColor.hovered};
  }

  &:active {
    background-color: ${({ theme }) => theme.components.dialog.button.backgroundColor.focused};
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: transparent;
    cursor: not-allowed;
  }
`;

export { StyledDialogButton };
