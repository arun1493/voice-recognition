import styled from "styled-components";

import { flexCenterBetween } from "../../../helpers";

const StyledInput = styled.div`
  ${flexCenterBetween}
  background-color: ${({ theme }) => theme.components.textField.background.normal};
  border-radius: ${({ theme }) => theme.components.textField.borderRadius};
  box-shadow: ${({ theme }) => theme.components.textField.boxShadow.normal};
  min-width: ${({ theme }) => theme.spacing(52)};
  height: ${({ theme }) => theme.spacing(5)};
  border: 1px solid ${({ theme }) => theme.components.textField.border.color};
  &.is-fullWidth {
    min-width: 0;
    width: 100%;
  }

  &.is-disabled,
  input[disabled] {
    cursor: not-allowed;
  }

  &:not(.is-disabled):hover {
    background-color: ${({ theme }) => theme.components.textField.background.hover};
  }

  &:not(.is-disabled):focus,
  &:not(.is-disabled)&.has-focus,
  &:not(.is-disabled):active,
  &:not(.is-disabled)&.is-active {
    background-color: ${({ theme }) => theme.components.textField.background.active};
    border: 2px solid ${({ theme }) => theme.components.textField.border.color};
  }

  &.has-errors {
    border: 2px solid ${({ theme }) => theme.components.textField.border.errorColor};
  }

  > input {
    flex-grow: 1;
    background: none;
    border: none;
    caret-color: ${({ theme }) => theme.components.textField.caretColor};
    color: ${({ theme }) => theme.components.textField.color.normal};
    font-size: ${({ theme }) => theme.components.textField.font.size};
    font-weight: ${({ theme }) => theme.components.textField.font.weight};
    outline: none;
    text-align: left;
    padding-left: ${({ theme }) => theme.spacing(1)};

    :focus,
    :active {
      border: none;
      outline: none;
    }

    ::placeholder {
      color: ${({ theme }) => theme.components.textField.placeholder.normal};
    }
  }
`;

const StyledAdornment = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(1)};
`;

export { StyledAdornment, StyledInput };
export default StyledInput;
