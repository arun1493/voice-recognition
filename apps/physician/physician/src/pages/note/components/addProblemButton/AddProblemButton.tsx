import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { ScreenSize, Text, useBreakpoint } from "@suki-web/suki-ui";

import { StyledProblem, StyledProblemButton } from "./addProblemButton.styled";

interface AddProblemButtonProps {
  isDisabled?: boolean;
  onClick: () => void;
}

const AddProblemButton: FunctionComponent<AddProblemButtonProps> = ({ isDisabled = false, onClick }) => {
  const { t } = useTranslation();
  const { LG, XL } = ScreenSize;
  const breakpoint = useBreakpoint();
  const isLargeScreen = [LG, XL].includes(breakpoint);
  const size = isLargeScreen ? "md" : "sm";

  if (isDisabled) {
    return (
      <StyledProblem>
        <Text color="inherit" isBold={true} lineHeight="24px" size={size}>
          +&nbsp;{t("pages.note.button.newProblem")}
        </Text>
      </StyledProblem>
    );
  }

  return (
    <StyledProblemButton onClick={onClick}>
      <Text color="inherit" cursor="pointer" isBold={true} size={size}>
        +&nbsp;{t("pages.note.button.newProblem")}
      </Text>
    </StyledProblemButton>
  );
};

export { AddProblemButton };

export default AddProblemButton;
