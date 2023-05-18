import styled from "styled-components";

import { ThemeProvider } from "../theme";
import { GeneralFormInputProps } from "./FormInput";

const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    right: 12px;
    top: 12px;
  }
`;

type BorderProps = GeneralFormInputProps & {
  theme: ThemeProvider;
};

const getBorder = ({ hasBorder, hasError, theme }: BorderProps): string => {
  if (hasError) return `border: solid 2px ${theme.components.formInput.borderColor.error}`;
  if (hasBorder) return `border: solid 2px ${theme.components.formInput.borderColor.focused}`;
  return "border: 0px";
};

const StyledFormInput = styled.input<GeneralFormInputProps>`
  box-sizing: border-box;
  width: ${({ width }) => width || "352px"};
  height: ${({ height }) => height || "56px"};
  min-height: 32px;
  min-width: 70px;
  padding: 16px 36px 16px 16px;

  font-size: 18px;
  caret-color: ${({ theme }) => theme.components.formInput.caretColor.normal};
  background-color: ${({ theme }) => theme.components.formInput.backgroundColor.normal};

  border-radius: 8px;
  box-shadow: 0 0 2px 0 ${({ theme }) => theme.components.formInput.shadowColor.normal};
  ${getBorder};

  &:hover,
  &:focus {
    ${({ hasBorder, theme }) =>
      hasBorder &&
      `
      box-shadow: inherit;
      background-color: ${theme.components.formInput.backgroundColor.hovered};
    `}
    outline: 0;
  }

  &:focus {
    background-color: ${({ theme }) => theme.components.formInput.backgroundColor.focused};
    ${getBorder};
  }

  &:disabled,
  ::placeholder {
    font-size: 18px;
    color: ${({ theme }) => theme.components.formInput.color.disabled};
  }
`;

export { StyledFormInput, StyledInputContainer };
