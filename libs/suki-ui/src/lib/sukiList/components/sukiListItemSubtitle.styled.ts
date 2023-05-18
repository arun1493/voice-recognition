import styled from "styled-components";

import { ListItemVariant } from "./";

const StyledSukiListItemSubtitle = styled.div<{ variant: ListItemVariant }>`
  align-items: center;
  color: ${({ theme, variant }) => theme.components.sukiListItemSubtitle[variant].fontColor};
  font-size: ${({ theme, variant }) => {
    return theme.components.sukiListItemSubtitle[variant].fontSize;
  }};
`;

export { StyledSukiListItemSubtitle };
export default StyledSukiListItemSubtitle;
