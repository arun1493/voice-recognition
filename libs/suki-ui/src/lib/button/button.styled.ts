import styled from "styled-components";

import { ButtonProps } from "./Button";

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width || "248px"};
  height: ${({ height }) => height || "56px"};
  border: ${({ isPrimary, isDark, theme }) =>
    isPrimary
      ? "none"
      : isDark
      ? `1px solid ${theme.components.button.borderColor.dark}`
      : `2px solid ${theme.components.button.borderColor.normal}`};
  border-radius: ${({ isSmall }) => (isSmall ? "4px" : "28px")};
  font-size: ${({ isSmall }) => (isSmall ? "14px" : "20px")};
  background: ${({ isPrimary, theme }) =>
    isPrimary ? theme.components.button.backgroundColor.primary : theme.components.button.backgroundColor.secondary};
  color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.components.button.color.primary : theme.components.button.color.secondary};
  cursor: pointer;

  &:not([disabled]):hover {
    ${({ isPrimary, theme }) =>
      isPrimary
        ? `box-shadow: 0 6px 10px 0 ${theme.components.button.boxShadowColor.primaryNotDisabledHovered};`
        : `opacity: .5;`}
  }

  &:active:not([disabled]) {
    background: ${({ theme }) => theme.components.button.backgroundColor.active};
    ${({ isPrimary, theme }) =>
      isPrimary && `box-shadow: 0 1px 8px 0 ${theme.components.button.boxShadowColor.primaryActive}`};

    span {
      opacity: 0.5;
    }
  }

  &:not([disabled]) p {
    cursor: pointer;
  }

  &:disabled {
    background: ${({ theme }) => theme.components.button.backgroundColor.disabled};
    color: ${({ isPrimary, theme }) =>
      isPrimary ? theme.components.button.disabled.color.primary : theme.components.button.disabled.color.secondary};
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.components.button.borderColor.disabled};
  }
`;

export { StyledButton };
