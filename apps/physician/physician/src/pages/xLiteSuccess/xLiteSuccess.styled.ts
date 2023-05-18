import styled from "styled-components";
import { flexCenter, flexCenterStart, mediaScreenWidth, screenSize } from "@suki-web/suki-ui";

const StyledXLiteSuccess = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: ${mediaScreenWidth.xxs};
  overflow: hidden;
  background: ${({ theme }) => theme.pages.xLiteSuccess.background};
  color: ${({ theme }) => theme.pages.xLiteSuccess.color};
  ${flexCenterStart};
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
  width: 328px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 484px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 664px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 840px;
  }
`;

const StyledFooter = styled.div`
  width: 328px;
  color: ${({ theme }) => theme.pages.registerSuccess.footerColor};
  margin: 48px 0 24px;
  text-align: center;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 484px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 528px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 840px;
  }
`;

const StyledMainContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 24px;

  p {
    margin-bottom: 24px;
  }

  img {
    margin: 0 auto;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    flex-direction: row;
  }
`;

const StyledAnchorTag = styled.a`
  color: ${({ theme }) => theme.pages.xLiteSuccess.color};
  font-weight: 600;
`;

const StyledLargeScreenAnchorTag = styled(StyledAnchorTag)`
  font-size: 18px;
  margin-top: 40px;
`;

const StyledCenteredBlock = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-top: 40px;
`;

export {
  StyledAnchorTag,
  StyledCenteredBlock,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledLargeScreenAnchorTag,
  StyledMainContent,
  StyledXLiteSuccess
};
