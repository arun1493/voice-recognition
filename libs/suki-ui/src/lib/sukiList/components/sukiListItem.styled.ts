import styled from "styled-components";

import { SukiListItemProps } from "./SukiListItem";

const StyledSukiListItem = styled.li<SukiListItemProps>`
  align-items: center;
  color: ${({ theme, variant }) => theme.components.sukiListItemTitle[variant].fontColor};
  justify-items: center;
  display: flex;
  position: relative;
  flex-direction: row;
  min-height: ${({ variant, theme }) => theme.components.sukiListItem[variant].height[0]};
  padding: 0px ${({ wrapText }) => (wrapText ? "16px" : "8px")};
  margin-top: ${({ hasBottomBorder }) => (hasBottomBorder ? "16px" : "8px")};
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme, variant }) => theme.components.sukiListItem[variant].background.hover};
  }

  &:active {
    background-color: ${({ theme, variant }) => theme.components.sukiListItem[variant].background.active};
  }

  ${({ hasBottomBorder, theme }) => {
    if (hasBottomBorder) {
      return `&:after {
      content: "";
      height: 1px;
      width: calc(100% - 16px);
      background: ${theme.components.listPanel.borderBottomColor};
      position: absolute;
      bottom: -8px;
      left: 8px;`;
    } else {
      return "";
    }
  }};

  .sukiIcon-action {
    align-items: center;
  }
`;

// 40px is the width of the icon (Cross)
const StyledSukiTitleAreaWrapper = styled.div<{ hasLeftIcon: boolean }>`
  flex-direction: column;
  width: 100%;
  max-width: calc(100% - 40px);
  padding: ${({ hasLeftIcon, theme }) => (hasLeftIcon ? theme.components.sukiListItemTitle.padding : 0)};
`;

export { StyledSukiListItem, StyledSukiTitleAreaWrapper };
