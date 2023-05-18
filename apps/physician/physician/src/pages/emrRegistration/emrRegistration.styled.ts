import styled from "styled-components";
import { flexCenter, flexCenterStart, mediaScreenWidth, screenSize, SukiButton } from "@suki-web/suki-ui";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: ${mediaScreenWidth.xxs};
  overflow: hidden;
  background: ${({ theme }) => theme.pages.xLiteSuccess.background};
  color: ${({ theme }) => theme.pages.xLiteSuccess.color};
  ${flexCenterStart}
  flex-direction: column;
`;

const StyledHeader = styled.div`
  width: ${screenSize.xxs - 48}px;
  margin: 24px 0 36px 0;
  display: flex;
  justify-content: flex-start;

  & svg {
    width: 84px;
    height: 24px;
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: ${screenSize.xs - 76}px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: ${screenSize.sm - 88}px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: ${screenSize.md - 120}px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    width: ${screenSize.lg - 120}px;
  }
`;

const StyledContent = styled.div`
  width: 296px;
  ${flexCenter};
  flex-direction: column;
  padding: 32px 16px;
  gap: 16px;
  background: #ffffff;
  text-align: center;

  border: 1px solid #e6e6e6;
  border-radius: 8px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 436px;
    padding: 32px 24px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 462px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding: 32px;
  }
`;

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.components.text.black};
  font-weight: 600;
  line-height: 36px;
`;

const StyledText = styled.div`
  color: ${({ theme }) => theme.components.text.black};

  span {
    color: ${({ theme }) => theme.palette.secondary.darkGray};
  }
`;

const StyledCalendlyButton = styled(SukiButton)`
  margin: 8px 0;
  padding: 0 18px;
  font-size: 18px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    font-size: 20px;
    padding: 0 64px;
  }
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.pages.signUp.linkColor};
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;

  @media (min-width: ${mediaScreenWidth.xs}) {
    font-size: 20px;
  }
`;

export { StyledCalendlyButton, StyledContainer, StyledContent, StyledHeader, StyledLink, StyledText, StyledTitle };
