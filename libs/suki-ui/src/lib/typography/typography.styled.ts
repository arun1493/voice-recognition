import styled, { css } from "styled-components";

import { TypographyProps } from "./Typography";
import { noWrap as noWrapStyles } from "../../helpers";

const headerStyles = css`
  line-height: normal;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

const StyledTypography = styled.div<TypographyProps>`
  font-size: ${({ theme, variant }) => {
    const { fontSize, unit } = theme.components.typography;
    return fontSize[variant] + unit;
  }};

  line-height: ${({ theme, variant }) => {
    const { lineHeight, unit } = theme.components.typography;
    return lineHeight[variant] + unit;
  }};

  ${({ variant }) => {
    if (variant.search(/^h\d/) > -1) {
      return headerStyles;
    }
    return "";
  }}

  ${({ noWrap }) => (noWrap ? noWrapStyles : "")}

  text-align: ${({ align }) => align};
`;

export { StyledTypography };
export default StyledTypography;
