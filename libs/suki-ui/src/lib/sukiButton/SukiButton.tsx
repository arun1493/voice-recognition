import React, { FunctionComponent, ReactElement } from "react";

import { StyledSukiButton, StyledSukiButtonContentWrapper } from "./sukiButton.styled";

interface SukiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  isFullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  variant?: "buttonText" | "contained" | "outlined" | "text";
  width?: string;
  withMargin?: boolean;
}

const SukiButton: FunctionComponent<SukiButtonProps> = ({
  children,
  isFullWidth,
  size = "lg",
  startIcon,
  variant = "contained",
  width,
  withMargin,
  type = "button",
  ...htmlButtonProps
}) => {
  return (
    <StyledSukiButton
      hasIcon={!!startIcon}
      isFullWidth={isFullWidth}
      size={size}
      variant={variant}
      width={width}
      withMargin={withMargin}
      type={type}
      {...htmlButtonProps}
    >
      <StyledSukiButtonContentWrapper>
        {!!startIcon && startIcon}
        <div className="sukiButton-content">{children}</div>
      </StyledSukiButtonContentWrapper>
    </StyledSukiButton>
  );
};

export { SukiButton, SukiButtonProps };
export default SukiButton;
