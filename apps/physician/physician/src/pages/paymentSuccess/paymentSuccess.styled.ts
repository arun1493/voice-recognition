import styled from "styled-components";
import { flexCenterStart, Header, mediaScreenWidth, Text } from "@suki-web/suki-ui";

import { HEADER_HEIGHT } from "../../constants";

const StyledContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  background: ${({ theme }) => theme.pages.signUp.background};
  ${flexCenterStart};
  flex-direction: column;
  text-align: center;
  min-width: ${mediaScreenWidth.xxs};

  input::placeholder {
    color: ${({ theme }) => theme.pages.signUp.placeholderColor};
    opacity: 1; /* Firefox */
    font-size: 16px;
  }
`;

const StyledHeader = styled.div`
  width: 312px;
  min-height: ${HEADER_HEIGHT}px;
  ${flexCenterStart};

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

const StyledRegistrationEmail = styled.div`
  background: ${({ theme }) => theme.pages.signUp.registrationEmail.backgroundColor};
  border: 1px solid ${({ theme }) => theme.pages.signUp.registrationEmail.borderColor};
  border-radius: 8px;
  padding: 24px 0;
  width: 328px;

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 484px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 526;
  }
`;

const StyledTitle = styled(Header)`
  margin-top: 16px;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.pages.signUp.registrationEmail.secondaryTextColor};
`;

const StyledTextQuestion = styled(StyledText)`
  margin: 16px 0;
`;

const StyledReRequestEmail = styled.span`
  color: ${({ theme }) => theme.pages.signUp.linkColor};
  font-size: 14px;
  margin-left: 4px;
  text-decoration: underline;
  cursor: pointer;
`;

export {
  StyledContainer,
  StyledHeader,
  StyledRegistrationEmail,
  StyledReRequestEmail,
  StyledText,
  StyledTextQuestion,
  StyledTitle
};
