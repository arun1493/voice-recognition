import styled from "styled-components";
import { Button, flexCenter } from "@suki-web/suki-ui";

const StyledOrText = styled.div`
  margin: 16px 0;
`;

type StyledButtonProps = {
  isInitial?: boolean;
  isXXSScreen: boolean;
};

const StyledButton = styled(Button)<StyledButtonProps>`
  position: relative;
  ${flexCenter};
  ${({ isXXSScreen }) => isXXSScreen && "height: 48px"};
  margin-bottom: 12px;

  ${({ isPrimary, theme }) =>
    isPrimary &&
    `
      &:hover {
        background: ${theme.components.modal.signNote.confirmSignButton.activeColor};
      }

      &:active p {
        color: ${theme.components.modal.signNote.confirmSignButton.activeColor};
      }

      &:active path {
        fill: ${theme.components.modal.signNote.confirmSignButton.activeColor};
      }
    `};

  ${({ isPrimary, isInitial, theme }) =>
    isPrimary &&
    !isInitial &&
    `
      border: 4px solid ${theme.components.modal.signNote.confirmSignButton.normalBorderColor};

      &:hover {
        border: 4px solid ${theme.components.modal.signNote.confirmSignButton.hoverBorderColor};
      }

      &:active {
        border: 4px solid ${theme.components.modal.signNote.confirmSignButton.hoverBorderColor};
      }
    `};

  svg {
    position: absolute;
    left: 28px;
  }
`;

const StyledSecondaryButton = styled(StyledButton)`
  border: 1px solid ${({ theme }) => theme.components.modal.signNote.secondaryButton.color};
  color: ${({ theme }) => theme.components.modal.signNote.secondaryButton.color};

  &:hover {
    background: ${({ theme }) => theme.components.modal.signNote.secondaryButton.background};
  }
`;

export { StyledButton, StyledOrText, StyledSecondaryButton };
