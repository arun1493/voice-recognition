import _noop from "lodash/noop";
import { FunctionComponent } from "react";

import { StyledText } from "./text.styled";

type TextColorType = "" | "black" | "gray" | "green" | "inherit" | "white" | "blackGray" | "darkCharcoal" | "darkGray";

type TextSizeType = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

interface TextProps {
  color?: TextColorType;
  cursor?: string;
  isBold?: boolean;
  isXXSmallAllUppercase?: boolean;
  lineHeight?: string;
  marginBottom?: string;
  marginTop?: string;
  size?: TextSizeType;
  onClick?: () => void;
}

const Text: FunctionComponent<TextProps> = ({
  children,
  color = "inherit",
  cursor = "default",
  isBold = false,
  isXXSmallAllUppercase = true,
  lineHeight = "",
  marginBottom = "0",
  marginTop = "0",
  size = "md",
  onClick = _noop,
  ...props
}) => {
  return (
    <StyledText
      color={color}
      cursor={cursor}
      isBold={isBold}
      isXXSmallAllUppercase={isXXSmallAllUppercase}
      lineHeight={lineHeight}
      marginBottom={marginBottom}
      marginTop={marginTop}
      size={size}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export { Text, TextColorType, TextProps, TextSizeType };

export default Text;
