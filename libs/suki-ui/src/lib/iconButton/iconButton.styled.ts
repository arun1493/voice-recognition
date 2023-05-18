import styled from "styled-components";

import { SizeType } from "./IconButton";

const StyledIconButton = styled.button.attrs({
  type: "button"
})<{ size: SizeType }>`
  background-color: ${({ theme }) => theme.components.iconButton.background.primary};
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  color: ${({ theme }) => theme.components.iconButton.color.primary};
  :hover {
    background-color: ${({ theme }) => theme.components.iconButton.background.hover};
    color: ${({ theme }) => theme.components.iconButton.color.hover};
  }

  &.is-active {
    background-color: ${({ theme }) => theme.components.iconButton.background.active};
    color: ${({ theme }) => theme.components.iconButton.color.active};
  }

  :disabled {
    background-color: ${({ theme }) => theme.components.iconButton.background.disabled};
    color: ${({ theme }) => theme.components.iconButton.color.disabled};
  }

  i {
    height: ${({ size, theme }) => `${theme.components.iconButton.sizes[size]}px`};
    width: ${({ size, theme }) => `${theme.components.iconButton.sizes[size]}px`};
  }
`;

export { StyledIconButton };
