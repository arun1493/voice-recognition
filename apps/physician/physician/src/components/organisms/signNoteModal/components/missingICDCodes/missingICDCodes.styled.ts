import styled from "styled-components";
import { Button, flexCenter, Header } from "@suki-web/suki-ui";

const StyledMissingICDCodes = styled.div`
  padding: 16px 16px 24px 16px;
  ${flexCenter};
  flex-direction: column;
`;

const StyledTitle = styled(Header)`
  padding: 0 24px;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;

  ${({ isPrimary, theme }) =>
    !isPrimary &&
    `
    border-color: ${theme.components.modal.signNote.secondaryButton.borderColor}; 
    color: ${theme.components.modal.signNote.secondaryButton.color};
  `};
`;

export { StyledButton, StyledMissingICDCodes, StyledTitle };
