import styled from "styled-components";
import { flexCenter, flexCenterStart, Header, Icon, mediaScreenWidth, SukiButton, Text } from "@suki-web/suki-ui";

import { HEADER_HEIGHT } from "../../constants";

const StyledPageCenter = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexCenter}
`;

const StyledPage = styled.div`
  width: 100%;
  height: 100vh;

  @media (min-width: ${mediaScreenWidth.xs}) {
    background: ${({ theme }) => theme.pages.password.backgroundXS};
  }

  ul {
    list-style: initial;
    margin 24px;

    li {
      height: 24px;
    }
  }
`;

const StyledHeader = styled.div`
  width: 312px;
  height: ${HEADER_HEIGHT}px;
  ${flexCenterStart};
  margin: 0 auto;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 500px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 680px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 920px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    width: 1112px;
  }

  @media (min-width: ${mediaScreenWidth.xl}) {
    width: 1280px;
  }

  & svg {
    width: 84px;
    height: 24px;
  }
`;

const StyledContainer = styled.div`
  height: calc(100% - ${HEADER_HEIGHT}px);
  background: ${({ theme }) => theme.pages.password.contentBackground};
  width: 100%;
  margin: 0 auto;
  padding: 0 16px 16px;
  border-width: 1px 0px 0px;
  border-style: solid;
  border-color: ${({ theme }) => theme.pages.password.contentBorderColor};
  box-sizing: border-box;
  ${flexCenterStart};
  flex-direction: column;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 484px;
    border-width: 1px;
    padding: 0 52px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 664px;
    padding: 0 124px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 776px;
    padding: 0 180px;
  }
`;

const StyledTitle = styled(Header)`
  margin: 32px auto;
  text-align: center;
  width: 230px;
  line-height: 24px;
  font-size: 18px;

  @media (min-width: ${mediaScreenWidth.sm}) {
    font-size: 20px;
    width: 256px;
  }
`;

const StyledContent = styled.div`
  width: ${mediaScreenWidth.xxs};
  ${flexCenter};
  align-items: flex-start;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 100%;
  }
`;

const StyledFormInput = styled.input<{ hasError?: boolean }>`
  width: 272px;
  height: 40px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.pages.password.input.color};
  border: ${({ theme, hasError }) =>
    hasError
      ? `2px solid ${theme.pages.password.input.errorBorderColor}`
      : `1px solid ${theme.pages.signUp.input.border}`};
  border-radius: 8px;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.pages.signUp.input.background};

  &:hover {
    background-color: ${({ theme }) => theme.pages.signUp.input.hoverBackground};
    box-shadow: none;
    outline: none;
  }
  &:focus-visible {
    background-color: ${({ theme }) => theme.pages.signUp.input.activeBackground};
    border: ${({ theme, hasError }) =>
      `2px solid ${hasError ? theme.pages.password.input.errorBorderColor : theme.pages.signUp.input.border}`};
    box-shadow: none;
    outline: none;
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 312px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 352px;
  }
`;

const StyledSeparator = styled.div`
  border-top: 1px solid ${({ theme }) => theme.pages.password.contentBorderColor};
  height: 0px;
  width: 100%;
  margin: 24px 0;
`;

const StyledIcon = styled(Icon)`
  margin-right: 16px;
  min-width: 40px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    margin-right: 24px;
  }
`;

const StyledText = styled(Text)`
  margin-top: 16px;
`;

const StyledToastIcon = styled(Icon)`
  margin-right: 16px;
`;

const StyledButton = styled(SukiButton)<{ height: string }>`
  height: ${({ height }) => height};
`;

export {
  StyledButton,
  StyledContainer,
  StyledContent,
  StyledFormInput,
  StyledHeader,
  StyledIcon,
  StyledPage,
  StyledPageCenter,
  StyledSeparator,
  StyledText,
  StyledTitle,
  StyledToastIcon
};
