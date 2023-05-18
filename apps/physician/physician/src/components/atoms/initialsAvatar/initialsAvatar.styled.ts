import styled, { css } from "styled-components";
import { flexCenter, mediaScreenWidth } from "@suki-web/suki-ui";

import { StyledAvatarProps } from "./InitialsAvatar";

const StyledInitialsAvatar = styled.div<Required<StyledAvatarProps>>`
  width: 96px;
  height: 96px;
  font-size: 36px;
  ${flexCenter};
  font-weight: 400;
  margin-bottom: 16px;
  border-radius: 50%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.components.initialsAvatar.color};
  background: ${({ theme }) => theme.components.initialsAvatar.backgroundColor};
  transition-property: transform, opacity, height, width;
  transition-duration: 800ms, 800ms, 200ms, 200ms;
  transition-timing-function: ease-in-out, ease-in-out, linear, linear;
  transition-delay: 0s, 0s, 300ms, 300ms;
  cursor: default;

  ${({ isMinimized }) =>
    isMinimized &&
    css`
      width: 0;
      height: 0;
      opacity: 0;
      margin-bottom: 0;
      transform: scale(0);
    `};

  @media (min-width: ${mediaScreenWidth.md}) {
    font-size: 40px;
  }
`;

export { StyledInitialsAvatar };
