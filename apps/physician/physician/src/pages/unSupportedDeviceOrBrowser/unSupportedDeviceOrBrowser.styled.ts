import styled from "styled-components";
import { flexCenter, flexCenterStart, FlexLeftColumn, mediaScreenWidth } from "@suki-web/suki-ui";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: ${mediaScreenWidth.xxs};
  color: ${({ theme }) => theme.pages.registerSuccess.color};
  ${flexCenterStart};
  flex-direction: column;

  @media (min-width: ${mediaScreenWidth.md}) {
    min-height: 600px;
  }
`;

const StyledHeader = styled.div`
  width: 312px;
  margin: 24px 0 36px 0;
  display: flex;
  justify-content: flex-start;

  & svg {
    width: 84px;
    height: 24px;
  }

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
`;

const StyledHeaderAndContent = styled.div`
  height: 100%;
  width: 100vw;
  background: ${({ theme }) => theme.pages.registerSuccess.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 100%;

  @media (max-width: ${mediaScreenWidth.xxs}) {
    justify-content: flex-start;
  }
`;

const StyledContent = styled.div`
  width: 328px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 484px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 664px;
    gap: 52px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 840px;
  }
`;

const StyledMainContent = styled(FlexLeftColumn)`
  align-items: flex-start;
  width: 100%;
  flex-direction: column;

  @media (min-width: ${mediaScreenWidth.sm}) {
    height: 480px;
    justify-content: center;
  }
`;

const StyledFooter = styled.div`
  width: 288px;
  color: ${({ theme }) => theme.pages.registerSuccess.footerColor};
  box-sizing: border-box;
  text-align: center;

  @media (min-width: ${mediaScreenWidth.xxs}) {
    margin: 16px;
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 408px;
    margin: 32px 0;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 784px;
  }
`;

const StyledButtonsContainer = styled.div`
  width: 100%;
  ${flexCenter};
  margin-top: 24px;

  & img {
    max-width: 100%;
    max-height: 100%;
  }

  a {
    height: 38px;
    width: 140px;

    &:first-child {
      margin-right: 8px;
    }

    @media (min-width: ${mediaScreenWidth.xs}) {
      height: 40px;
      width: 148px;

      &:first-child {
        margin-right: 16px;
      }
    }
  }

  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const StyledPhoneImage = styled.img`
  margin: 0 auto;
  height: 280px;
  width: 180px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    height: 320px;
    width: 200px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    height: 480px;
    width: 288px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 304px;
  }
`;

const StyledListItem = styled.li`
  width: 100%;
  ${flexCenterStart};
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
`;

export {
  StyledButtonsContainer,
  StyledContainer,
  StyledContent,
  StyledFooter,
  StyledHeaderAndContent,
  StyledHeader,
  StyledListItem,
  StyledMainContent,
  StyledPhoneImage
};
