import styled from "styled-components";

import { ListItemVariant } from "./";

const StyledSukiListItemTitle = styled.div<{ isTitleBold: boolean; variant: ListItemVariant; wrapText?: boolean }>`
  display: flex;
  align-items: center;
  line-height: 20px;
  padding: ${({ wrapText }) => (wrapText ? "8px" : "0")};
  white-space: ${({ wrapText }) => (wrapText ? "normal" : "nowrap")};
  ${({ variant }) => variant === "title" && "justify-content: center"};
  ${({ wrapText }) => wrapText && "overflow-wrap: anywhere"};
  font-size: ${({ theme, variant }) => theme.components.sukiListItemTitle[variant].fontSize};
  min-height: ${({ theme, variant }) => theme.components.sukiListItemTitle[variant].height};
  font-weight: ${({ isTitleBold, theme }) => {
    if (isTitleBold) {
      return theme.components.sukiListItemTitle.fontWeight[1];
    } else {
      return theme.components.sukiListItemTitle.fontWeight[0];
    }
  }};
`;

export { StyledSukiListItemTitle };
