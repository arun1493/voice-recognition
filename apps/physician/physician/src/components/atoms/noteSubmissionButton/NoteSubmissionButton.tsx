import _noop from "lodash/noop";
import { Icon } from "@suki-web/suki-ui";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import { StyledNoteSubmissionButton, StyledText } from "./noteSubmissionButton.styled";

interface NoteSubmissionButtonProps {
  isDisabled?: boolean;
  onClick: VoidFunction;
  size: NoteSubmissionButtonSize;
}

type NoteSubmissionButtonSize = "xs" | "md";

const NoteSubmissionButton: FunctionComponent<NoteSubmissionButtonProps> = ({
  isDisabled = false,
  onClick,
  size,
  ...props
}) => {
  const { t } = useTranslation();

  const textSize = size === "xs" ? "xs" : "md";

  return (
    <StyledNoteSubmissionButton onClick={isDisabled ? _noop : onClick} size={size} {...props}>
      <Icon icon="check" isDisabled={isDisabled} size="2xs" />
      <StyledText color="inherit" isBold={true} size={textSize}>
        {t("components.noteSubmissionButton")}
      </StyledText>
    </StyledNoteSubmissionButton>
  );
};

export default NoteSubmissionButton;

export { NoteSubmissionButton, NoteSubmissionButtonProps, NoteSubmissionButtonSize };
