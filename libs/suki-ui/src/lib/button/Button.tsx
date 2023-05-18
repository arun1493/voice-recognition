import { FunctionComponent, HtmlHTMLAttributes } from "react";

import { StyledButton } from "./button.styled";

type ButtonType = "submit" | "reset" | "button";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children?: string | React.ReactNode;
  formNoValidate?: boolean;
  height?: string;
  isDark?: boolean;
  isDisabled?: boolean;
  isPrimary?: boolean;
  isSmall?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
  width?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  children = "Log In",
  isDisabled = false,
  type = "button",
  ...props
}) => (
  <StyledButton type={type} disabled={isDisabled} data-cy="button" {...props}>
    {children}
  </StyledButton>
);

export { Button, ButtonProps };

export default Button;
