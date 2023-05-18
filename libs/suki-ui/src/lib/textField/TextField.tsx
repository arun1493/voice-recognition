import { ForwardedRef, forwardRef, FunctionComponent, ReactElement } from "react";

import { HelperText, Input } from "./components";
import { StyledTextField } from "./textField.styled";

interface InputProps {
  autoComplete?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  endAdornment?: ReactElement;
  hasErrors?: boolean;
  id?: string;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  ref?: ForwardedRef<HTMLInputElement>;
  startAdornment?: ReactElement;
  type?: string;
  value?: string;
}
interface TextFieldProps {
  FormHelperTextProps?: Record<string, string>;
  helperText?: string;
  label?: string;
  labelPosition?: "left" | "top" | "right";
}

const TextField: FunctionComponent<TextFieldProps & InputProps> = forwardRef<
  HTMLInputElement,
  TextFieldProps & InputProps
>(
  (
    {
      autoComplete = "off",
      autoFocus,
      defaultValue,
      endAdornment,
      hasErrors = false,
      helperText = "",
      id,
      isFullWidth,
      isDisabled = false,
      label = "",
      name,
      onChange,
      placeholder,
      startAdornment,
      type = "text",
      value
    },
    ref
  ) => (
    <StyledTextField>
      {label && <label>{label}</label>}
      <Input
        {...(autoComplete && { autoComplete })}
        {...(autoFocus && { autoFocus })}
        {...(!!defaultValue && { defaultValue })}
        endAdornment={endAdornment}
        hasErrors={hasErrors}
        {...(id && { id })}
        isDisabled={isDisabled}
        isFullWidth={isFullWidth}
        {...(name && { name })}
        onChange={onChange}
        {...(placeholder && { placeholder })}
        ref={ref}
        startAdornment={startAdornment}
        type={type}
        value={value ?? undefined}
      />
      {helperText && <HelperText text={helperText} hasErrors={hasErrors} />}
    </StyledTextField>
  )
);

export { InputProps, TextField };
export default TextField;
