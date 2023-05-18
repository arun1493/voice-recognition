import styled from "styled-components";
import { FunctionComponent } from "react";

import { StyledTypography } from "../../typography";

const StyledHelperText = styled(StyledTypography)<{ hasErrors?: boolean }>`
  color: ${({ hasErrors, theme }) => theme.components.textField.helperText.color[hasErrors ? "error" : "normal"]};
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
`;

interface HelperTextProps {
  hasErrors: boolean;
  text: string;
}

const HelperText: FunctionComponent<HelperTextProps> = ({ hasErrors, text }) => {
  return (
    <StyledHelperText hasErrors={hasErrors} variant="body2">
      {text}
    </StyledHelperText>
  );
};

export { HelperText, HelperTextProps };
export default HelperText;
