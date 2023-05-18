import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import { StyledClearInputButton, StyledText, StyledVerticalDivider } from "./clearInputButton.styled";

type ClearInputButtonProps = {
  hasCloseInInput: boolean;
  onClearSearchValue: VoidFunction;
};

const ClearInputButton: FunctionComponent<ClearInputButtonProps> = ({ hasCloseInInput, onClearSearchValue }) => {
  const { t } = useTranslation();

  return (
    <StyledClearInputButton onClick={onClearSearchValue}>
      <StyledText cursor="pointer" size="sm">
        {t("components.clearInputButton")}
      </StyledText>
      {hasCloseInInput && <StyledVerticalDivider />}
    </StyledClearInputButton>
  );
};

export default ClearInputButton;

export { ClearInputButton };
