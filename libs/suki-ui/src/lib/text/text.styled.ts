import styled from "styled-components";

import { palette } from "../theme";
import { TextColorType, TextProps } from "./Text";

const sizes = {
  "2xs": { fontSize: "11px", lineHeight: "15px" },
  "xs": { fontSize: "12px", lineHeight: "16px" },
  "sm": { fontSize: "14px", lineHeight: "20px" },
  "md": { fontSize: "16px", lineHeight: "24px" },
  "lg": { fontSize: "18px", lineHeight: "26px" },
  "xl": { fontSize: "20px", lineHeight: "28px" },
  "2xl": { fontSize: "24px", lineHeight: "36px" },
  "3xl": { fontSize: "28px", lineHeight: "40px" },
  "4xl": { fontSize: "32px", lineHeight: "44px" }
};

const textColors: Record<TextColorType, string> = {
  "": "",
  "black": palette.primary.black,
  "blackGray": palette.secondary.blackGray,
  "darkCharcoal": palette.secondary.darkCharcoal,
  "darkGray": palette.primary.black50,
  "gray": palette.primary.black35,
  "green": palette.primary.green,
  "inherit": "inherit",
  "white": palette.primary.white
};

const StyledText = styled.p<Required<TextProps>>`
  color: ${({ color, theme }) => textColors[color] || theme.components.text.baseColor};
  cursor: ${({ cursor }) => cursor};
  font-size: ${({ size }) => sizes[size].fontSize};
  font-weight: ${({ isBold }) => (isBold ? "600" : "400")};
  line-height: ${({ lineHeight, size }) => lineHeight || sizes[size].lineHeight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-top: ${({ marginTop }) => marginTop};
  text-transform: ${({ isXXSmallAllUppercase, size }) =>
    size === "2xs" && isXXSmallAllUppercase ? "uppercase" : "none"};
`;

export { StyledText };
