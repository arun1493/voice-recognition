import styled from "styled-components";
import { flexCenterStart } from "@suki-web/suki-ui";

const StyledNoteMenuListItem = styled.div<{ disabled?: boolean }>`
  ${flexCenterStart};
  width: 100%;
  white-space: pre;
  padding: 4px 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};

  &:hover {
    background: ${({ theme }) => theme.components.noteMenuListItem.hoveredItemBackgroundColor};
  }

  &:active {
    background: ${({ theme }) => theme.components.noteMenuListItem.activeItemBackgroundColor};
  }
`;

const StyledNoteMenuIcon = styled.div`
  margin: 4px 12px 0 0;
`;

export { StyledNoteMenuIcon, StyledNoteMenuListItem };
