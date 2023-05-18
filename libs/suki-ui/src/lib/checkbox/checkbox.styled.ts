import styled from "styled-components";

import { flexCenter } from "../../helpers";

const StyledCheckbox = styled.div<{ hasError: boolean }>`
  height: 24px;
  min-width: 24px;
  width: 24px;
  ${flexCenter};
  background: ${({ theme }) => theme.components.checkbox.backgroundColor};
  border: 1px solid ${({ theme }) => theme.components.checkbox.borderColor};
  ${({ hasError, theme }) => hasError && `border: 2px solid ${theme.components.checkbox.errorColor}`};
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;

  &:hover {
    background: ${({ theme }) => theme.components.checkbox.hoveredBackgroundColor};
  }

  &:focus {
    border-width: 2px;
  }
`;

export { StyledCheckbox };
