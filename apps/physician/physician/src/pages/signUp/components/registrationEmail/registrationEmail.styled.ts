import styled from "styled-components";
import { Header, mediaScreenWidth, Text } from "@suki-web/suki-ui";

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

const StyledHeader = styled(Header)`
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

export { StyledHeader, StyledRegistrationEmail, StyledReRequestEmail, StyledText, StyledTextQuestion };
