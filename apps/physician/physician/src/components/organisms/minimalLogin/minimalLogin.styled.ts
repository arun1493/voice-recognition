import styled from "styled-components";
import { Link, SukiButton } from "@suki-web/suki-ui";

const StyledLoginContent = styled.div`
  padding: 40px 32px;
`;

const StyledLoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledForgotPasswordContainer = styled.div`
  display: flex;
  margin-top: 12px;
  line-height: 18px;
  text-align: end;
`;

const StyledSukiButton = styled(SukiButton)`
  margin: 36px 0 0;
  padding: 0;
`;

const StyledForgotPasswordLink = styled(Link)`
  margin: 0 8px 0 auto;
`;

export {
  StyledForgotPasswordContainer,
  StyledForgotPasswordLink,
  StyledLoginButtons,
  StyledLoginContent,
  StyledSukiButton
};
