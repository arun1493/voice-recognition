import { ChangeEvent, FocusEventHandler, FunctionComponent } from "react";

import { Icon, IconType } from "../icon";
import { StyledFormInput, StyledInputContainer } from "./formInput.styled";

interface GeneralFormInputProps {
  hasBorder?: boolean;
  hasError?: boolean;
  height?: string;
  icon?: IconType;
  isDisabled?: boolean;
  width?: string;
}

interface FormInputProps extends GeneralFormInputProps {
  inputRef?: React.RefObject<HTMLInputElement> | React.RefCallback<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
}

const FormInput: FunctionComponent<FormInputProps> = ({
  hasBorder = false,
  icon,
  inputRef,
  isDisabled = false,
  name,
  type = "text",
  ...props
}) => {
  return (
    <StyledInputContainer>
      <StyledFormInput
        data-cy="form-input"
        disabled={isDisabled}
        hasBorder={hasBorder}
        name={name}
        ref={inputRef}
        type={type}
        {...props}
      />
      {icon && <Icon icon={icon} opacity={".3"} />}
    </StyledInputContainer>
  );
};

export { FormInput, GeneralFormInputProps };

export default FormInput;
