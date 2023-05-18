import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const generalStyles = css`
  color: ${({ theme }) => theme.components.link.color.normal};
  font-size: 16px;
  line-height: 22px;
  &:active,
  &:visited {
    color: ${({ theme }) => theme.components.link.color.visited};
  }
  &:hover {
    color: ${({ theme }) => theme.components.link.color.hovered};
  }
`;

const StyledLink = styled(Link)<{ fontSize: string; textDecoration: string }>`
  ${generalStyles};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`}
  text-decoration: ${({ textDecoration }) => (textDecoration ? textDecoration : "none")};
`;

const StyledExternalLink = styled.a`
  ${generalStyles};
`;

export { StyledExternalLink, StyledLink };
