import styled, { css } from "styled-components";

import { Text } from "../text";
import { CardContentProps, CardFooterProps, CardProps } from "./";

const StyledCard = styled.div<CardProps>`
  background: ${({ theme }) => theme.components.card.background};
  color: ${({ theme }) => theme.components.card.color};
  border: 1px solid ${({ theme }) => theme.components.card.borderColor};
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;

  ${({ isFullScreenMobile }) =>
    isFullScreenMobile &&
    css`
      height: 100vh;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    `};

  width: 100%;

  ${({ theme, size = "sm" }) => `${theme.breakpoints.up("sm")} {
    position: relative;
    width: ${{ sm: "484px", md: "528px", lg: "528px" }[size]};
  }`}

  ${({ theme, size = "sm" }) => `${theme.breakpoints.up("md")} {
    width: ${{ sm: "528px", md: "600px", lg: "664px" }[size]};
  }`}

  ${({ theme, size = "sm" }) => `${theme.breakpoints.up("xxl")} {
    width: ${{ sm: "528px", md: "600px", lg: "776px" }[size]};
  }`}
`;

const StyledCardHeader = styled.header<{ hasBorder: boolean; isSticky: boolean }>`
  ${({ hasBorder, theme }) => (hasBorder ? theme.common.borderBottom : "")};
  width: auto;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.components.card.background};
  ${({ isSticky, theme }) =>
    isSticky &&
    `
    position: sticky;
    top: 0;
    background: ${theme.palette.primary.white};
  `}

  .cardHeader-wrapper {
    display: flex;
    align-items: center;
    height: 64px;
  }

  .cardHeader-action {
    min-width: 32px;
  }
`;

const StyledCardTitle = styled(Text)`
  flex-grow: 1;
  text-align: center;
`;

const StyledCardContent = styled.div<CardContentProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: ${({ overflow }) => overflow};
`;

const StyledCardFooter = styled.footer<CardFooterProps>`
  ${({ hasBorder, theme }) => (hasBorder ? theme.common.borderTop : "")};
  height: 64px;
  width: auto;
  padding: 0 16px;
`;

export { StyledCard, StyledCardContent, StyledCardFooter, StyledCardHeader, StyledCardTitle };
