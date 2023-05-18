import styled from "styled-components";
import { screenSize } from "@suki-web/suki-ui";

import { getBreakpoint } from "../../../../..//helpers";

const HeaderContainer = styled.div`
  margin-bottom: 32px;
  text-align: center;
`;

const StyledGettingStarted = styled.div<{ isSmall: boolean }>`
  width: 328px;
  min-height: ${({ isSmall }) => (isSmall ? "364px" : "468px")};
  padding: 24px;
  background: ${({ theme }) => theme.components.gettingStarted.backgroundColor};
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  border: 1px solid ${({ theme }) => theme.components.gettingStarted.borderColor};
  margin: 16px;

  &:hover {
    .getting-started-close {
      display: flex;
    }
  }

  .title {
    font-size: 24px;
    line-height: 32px;
  }

  [role="doc-subtitle"] {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: ${getBreakpoint(screenSize.xxs)}) {
    width: 484px;

    [role="doc-subtitle"] {
      font-size: 18px;
    }
  }

  @media (min-width: ${getBreakpoint(screenSize.xs)}) {
    width: 484px;

    .title {
      font-size: 28px;
      line-height: 36px;
    }
  }

  @media (min-width: ${getBreakpoint(screenSize.sm)}) {
    width: 528px;
  }

  @media (min-width: ${getBreakpoint(screenSize.md)}) {
    width: 528px;
  }

  @media (min-width: ${getBreakpoint(screenSize.lg)}) {
    width: 528px;
  }
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledAnchorTag = styled.a`
  margin: 0 0 0 4px;
  color: ${({ theme }) => theme.pages.signUp.linkColor};
  font-weight: 400;
  text-decoration: none;
`;

const StyledCloseButton = styled.div`
  height: 28px;
  width: 28px;
  background: ${({ theme }) => theme.components.gettingStarted.backgroundColor};
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.components.gettingStarted.closeButton.boxShadow};

  display: none;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  outline: 0;
  padding: 0;
  position: absolute;
  right: -16px;
  top: -16px;
  z-index: 100;

  &:hover {
    background: ${({ theme }) => theme.components.gettingStarted.closeButton.backgroundHover};
  }

  &:active {
    background: ${({ theme }) => theme.components.gettingStarted.closeButton.backgroundActive};
  }
`;

export { HeaderContainer, StyledAnchorTag, StyledCloseButton, StyledGettingStarted, StyledTaskList };
