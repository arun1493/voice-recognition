import styled from "styled-components";
import { Button, flexCenter, mediaScreenWidth, Text } from "@suki-web/suki-ui";

import { NoteSubmissionButtonProps } from ".";

const StyledText = styled(Text)`
  display: none;
  opacity: 0;
  transition: opacity 150ms ease-out;
  white-space: nowrap;
`;

const StyledNoteSubmissionButton = styled(Button)<NoteSubmissionButtonProps>`
  ${flexCenter};
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.components.noteSubmissionButton.backgroundColor};
  box-shadow: ${({ theme }) => theme.components.noteSubmissionButton.boxShadow};
  transition: width 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  user-select: none;

  &:not([disabled]):hover {
    opacity: 1;
    width: 108px;

    ${StyledText} {
      display: block;
      opacity: 1;
      margin-left: 8px;
    }
  }

  &:not([disabled]):active {
    background: ${({ theme }) => theme.components.noteSubmissionButton.activeBackgroundColor};
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    height: 48px;
    width: 48px;

    &:not([disabled]):hover {
      width: 124px;
    }
  }
`;

export { StyledNoteSubmissionButton, StyledText };
