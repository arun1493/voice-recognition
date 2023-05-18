import styled from "styled-components";
import { flexCenterStart, FlexLeftColumn, mediaScreenWidth, Text } from "@suki-web/suki-ui";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: ${mediaScreenWidth.xxs};
  background: ${({ theme }) => theme.pages.registerSuccess.background};
  color: ${({ theme }) => theme.pages.registerSuccess.color};
  ${flexCenterStart};
  flex-direction: column;

  @media (min-width: ${mediaScreenWidth.md}) {
    min-height: 600px;
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    overflow: hidden;
  }
`;

const StyledLoginContainer = styled.div`
  width: 304px;
  height: 300px;
  border-radius: 8px;
  background: ${({ theme }) => theme.pages.registerSuccess.login.background};
  margin-top: 24px;
`;

const StyledLoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
    width: 100%;
    margin-left: 36px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    margin-left: 44px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    margin-left: 60px;
  }
`;

const StyledContent = styled.div`
  width: 328px;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 484px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 664px;
    gap: 52px;
    flex-direction: row;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 840px;
    gap: 56px;
  }
`;

const StyledMainContent = styled(FlexLeftColumn)`
  align-items: flex-start;
  width: 100%;
  flex-direction: column;

  @media (min-width: ${mediaScreenWidth.sm}) {
    height: 480px;
    justify-content: flex-start;
  }

  @media (min-width: ${mediaScreenWidth.sm} && max-width: ${mediaScreenWidth.md}) {
    margin-top: 24px;
  }
`;

const StyledFooter = styled.div`
  width: 288px;
  color: ${({ theme }) => theme.pages.registerSuccess.footerColor};
  margin: 48px 0 32px;
  box-sizing: border-box;
  text-align: center;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 408px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 784px;
  }
`;

const StyledTitleText = styled(Text)`
  margin: 24px 0;
  padding-right: 8px;

  @media (min-width: ${mediaScreenWidth.sm}) {
    margin-bottom: 0;
  }

  @media (max-width: ${mediaScreenWidth.sm}) {
    padding-right: 0;
  }
`;

const StyledStepTwoText = styled(Text)`
  margin: 0 0 24px;
  padding-right: 8px;

  @media (max-width: ${mediaScreenWidth.sm}) {
    padding-right: 0;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    margin-top: 24px;
  }
`;

const StyledButtonsContainer = styled.div`
  width: 100%;
  ${flexCenterStart};
  gap: 16px;

  & img {
    max-width: 100%;
    max-height: 100%;
  }

  a {
    height: 38px;
    width: 140px;

    @media (min-width: ${mediaScreenWidth.xs}) {
      height: 40px;
      width: 148px;
    }
  }

  & img {
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: ${mediaScreenWidth.sm}) {
    margin-bottom: 24px;
    justify-content: space-evenly;
  }

  @media (max-width: ${mediaScreenWidth.md}) {
    justify-content: center;
  }
`;

const StyledPhoneImage = styled.img`
  margin: 24px 0 0;
  height: 280px;
  width: 180px;
  align-self: center;

  @media (min-width: ${mediaScreenWidth.sm}) {
    align-self: flex-start;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    margin-left: 64px;
  }
`;

export {
  StyledButtonsContainer,
  StyledContainer,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledLoginContainer,
  StyledLoginButtons,
  StyledMainContent,
  StyledPhoneImage,
  StyledStepTwoText,
  StyledTitleText
};
