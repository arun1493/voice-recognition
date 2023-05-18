import styled, { css } from "styled-components";

import { flexCenter } from "../../helpers";

const StyledNavigationIcon = styled.div<{ isActive?: boolean; isDisabled?: boolean; roundSize: number }>`
  height: ${({ roundSize }) => roundSize + "px"};
  width: ${({ roundSize }) => roundSize + "px"};
  ${flexCenter};
  border-radius: 50%;
  position: relative;
  ${({ isActive, theme }) =>
    isActive &&
    `background: ${theme.components.navigationHeaderIcon.selectedBackgroundColor} !important`}; // TODO rename

  ${({ isDisabled }) =>
    !isDisabled &&
    css`
      &:hover {
        background: ${({ theme }) => theme.components.navigationHeaderIcon.hoveredBackgroundColor};
        color: ${({ theme }) => theme.components.navigationHeaderIcon.hoveredColor};
      }

      &:active {
        background: ${({ theme }) => theme.components.navigationHeaderIcon.selectedBackgroundColor};
      }
    `}
`;

export { StyledNavigationIcon };
