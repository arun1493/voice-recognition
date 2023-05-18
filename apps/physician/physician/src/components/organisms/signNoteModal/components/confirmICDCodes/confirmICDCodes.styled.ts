import styled from "styled-components";
import { Button, flexCenterBetween, FlexLeftColumn, Header, Modal, Text } from "@suki-web/suki-ui";

type IsWarning = {
  isWarning: boolean;
};

const StyledConfirmICDCodes = styled(Modal)`
  padding: 16px;
  ${flexCenterBetween};
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: auto;
`;

const StyledHeader = styled(Header)`
  margin-bottom: 24px;
`;

const StyledText = styled(Text)`
  padding: 0 8px;
  margin-bottom: 16px;
  text-align: center;
`;

const StyledCode = styled.div<IsWarning>`
  width: 100%;
  ${flexCenterBetween};

  ${({ theme, isWarning }) =>
    isWarning
      ? `border: 2px solid` + theme.components.formInput.borderColor.error
      : `border: 1px solid` + theme.components.modal.signNote.confirmCodes.borderColor};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px;
  margin: 8px 0px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.components.modal.signNote.confirmCodes.background.hovered};
  }

  &:active {
    background: ${({ theme }) => theme.components.modal.signNote.confirmCodes.background.active};
  }
`;

const StyledContent = styled.div`
  ${FlexLeftColumn};
  align-items: flex-start;

  p:first-child {
    margin-bottom: 4px;
  }
`;

const StyledAddCodeButton = styled.button`
  min-width: 60px;
  border: 0;
  cursor: pointer;
  background: none;
  border-radius: 4px;
  padding: 4px 8px;
`;

const StyledDescription = styled.span`
  color: ${({ theme }) => theme.components.modal.signNote.confirmCodes.secondaryTextColor};
`;

const StyledCodeName = styled.span`
  margin-left: 8px;
  padding: 0 4px;
  border-radius: 4px;
  color: ${({ theme }) => theme.components.modal.signNote.confirmCodes.icdCode.color};
  background: ${({ theme }) => theme.components.modal.signNote.confirmCodes.icdCode.background};
`;

const StyledButton = styled(Button)<{ isXXSScreen: boolean }>`
  min-height: 48px;
  margin-top: ${({ isXXSScreen }) => (isXXSScreen ? "auto" : "24px")};
`;

const StyledEpicWarningText = styled(Text)`
  margin-top: 4px;
  color: ${({ theme }) => theme.components.modal.signNote.confirmCodes.epicWarningColor};
`;

export {
  StyledAddCodeButton,
  StyledButton,
  StyledCode,
  StyledCodeName,
  StyledConfirmICDCodes,
  StyledContent,
  StyledDescription,
  StyledEpicWarningText,
  StyledHeader,
  StyledText
};
