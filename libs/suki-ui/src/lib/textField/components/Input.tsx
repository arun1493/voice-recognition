import { forwardRef, FunctionComponent, useState } from "react";

import { StyledAdornment, StyledInput } from "./input.styled";
import { InputProps } from "../TextField";

type InputClasses = { disabled: string; focus?: string; error?: string; fullWidth: string };

const Input: FunctionComponent<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoComplete,
      autoFocus,
      defaultValue,
      endAdornment,
      hasErrors,
      id,
      isDisabled,
      isFullWidth,
      name,
      onChange,
      placeholder,
      startAdornment,
      type = "text",
      value
    },
    ref
  ) => {
    const [hasFocus, setHasFocus] = useState(false);
    const handleBlur = () => setHasFocus(false);
    const handleFocus = () => setHasFocus(true);

    const inputClasses: InputClasses = {
      focus: hasFocus ? "has-focus" : "",
      error: hasErrors ? "has-errors" : "",
      disabled: isDisabled ? "is-disabled" : "",
      fullWidth: isFullWidth ? "is-fullWidth" : ""
    };
    const inputClassName = Object.values(inputClasses).join(" ");
    return (
      <StyledInput className={inputClassName}>
        {startAdornment && <StyledAdornment>{startAdornment}</StyledAdornment>}
        <input
          autoComplete={autoComplete}
          autoCorrect="off"
          autoFocus={autoFocus}
          {...(!!defaultValue && { defaultValue })}
          disabled={isDisabled}
          {...(id && { id })}
          {...(name && { name })}
          onBlur={handleBlur}
          onChange={onChange}
          onFocus={handleFocus}
          {...(placeholder && { placeholder })}
          ref={ref}
          type={type}
          value={value ?? undefined}
        />
        {endAdornment && <StyledAdornment>{endAdornment}</StyledAdornment>}
      </StyledInput>
    );
  }
);

export { Input };
export default Input;
