import styled from "styled-components";

import { SukiButtonProps } from "./SukiButton";

const StyledSukiButton = styled.button<SukiButtonProps & { hasIcon: boolean }>`
  background-color: ${({ size = "lg", theme, variant = "contained" }) =>
    theme.components.sukiButton[size][variant].background.normal};
  border: none;
  border-radius: ${({ size }) => (size === "lg" ? "50px" : "4px")};
  box-shadow: ${({ size = "lg", theme, variant = "contained" }) =>
    theme.components.sukiButton[size][variant].boxShadow};
  color: ${({ size = "lg", theme, variant = "contained" }) => theme.components.sukiButton[size][variant].color.normal};
  cursor: pointer;
  font-size: ${({ size = "lg", theme }) => theme.components.sukiButton[size].fontSize};
  font-weight: ${({ size = "lg", theme }) => theme.components.sukiButton[size].fontWeight};
  height: ${({ size = "lg", theme }) => theme.components.sukiButton[size].height};
  margin: ${({ theme, withMargin }) => (withMargin ? `0 ${theme.spacing(2)} ${theme.spacing(2)} 0` : 0)};
  min-width: ${({ theme, size = "lg" }) => theme.components.sukiButton[size].minWidth};
  width: ${({ isFullWidth, width }) => (width ? width : isFullWidth ? "100%" : "fit-content")};
  padding: ${({ hasIcon, size = "lg", theme }) => {
    if (hasIcon) {
      return theme.components.sukiButton[size].iconPadding;
    }
    return theme.components.sukiButton[size].padding;
  }};

  :hover {
    background-color: ${({ size = "lg", theme, variant = "contained" }) =>
      theme.components.sukiButton[size][variant].background.hover};
    color: ${({ size = "lg", theme, variant = "contained" }) => theme.components.sukiButton[size][variant].color.hover};
  }

  :active,
  &.is-active,
  &.active {
    background-color: ${({ size = "lg", theme, variant = "contained" }) =>
      theme.components.sukiButton[size][variant].background.active};
    color: ${({ size = "lg", theme, variant = "contained" }) =>
      theme.components.sukiButton[size][variant].color.active};
  }

  :disabled,
  &[disabled] {
    background-color: ${({ size = "lg", theme, variant = "contained" }) =>
      theme.components.sukiButton[size][variant].background.disabled};
    color: ${({ size = "lg", theme, variant = "contained" }) =>
      theme.components.sukiButton[size][variant].color.disabled};
    cursor: not-allowed;
  }
`;

const StyledSukiButtonContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .sukiButton-content {
    flex-grow: 1;
  }
`;

export { StyledSukiButton, StyledSukiButtonContentWrapper };
export default StyledSukiButton;
