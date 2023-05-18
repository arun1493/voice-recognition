import { AllHTMLAttributes, ElementType, FunctionComponent } from "react";

import { StyledTypography } from "./typography.styled";

type TypographyVariantType =
  | "body1"
  | "body2"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2";

interface TypographyProps {
  align?: "center" | "inherit" | "justify" | "left" | "right";
  className?: string;
  component?: string | ElementType;
  noWrap?: boolean; // If true, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
  variant: TypographyVariantType;
}

const variantMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span"
};

const Typography: FunctionComponent<TypographyProps> = ({
  align = "inherit",
  children,
  component,
  noWrap = false,
  variant = "body1"
}) => {
  if (!component) {
    component = variantMap[variant];
  }
  return (
    <StyledTypography align={align} as={component} noWrap={noWrap} variant={variant}>
      {children}
    </StyledTypography>
  );
};

export { Typography, TypographyProps, TypographyVariantType };
export default Typography;
