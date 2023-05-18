import styled from "styled-components";
import { flexCenter, mediaScreenWidth } from "@suki-web/suki-ui";

const StyledCenterContent = styled.div`
  ${flexCenter};
  height: 100%;
`;

const StyledNoteTypeList = styled.ul`
  height: max-content;
  padding: 8px;
  user-select: none;
`;

const StyledNoteTypeListItem = styled.li`
  align-items: center;
  display: flex;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: ${({ theme }) => theme.components.noteTypes.hoveredItemBackgroundColor};
  }

  &:active {
    background: ${({ theme }) => theme.components.noteTypes.activeItemBackgroundColor};
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    padding: 16px;
  }
`;

const StyledEmptyContainer = styled.div`
  padding: 0 8px;
`;

const StyledButtonContainer = styled.div`
  ${flexCenter};
  margin: 80px 0 20px;
`;

export { StyledButtonContainer, StyledCenterContent, StyledEmptyContainer, StyledNoteTypeList, StyledNoteTypeListItem };
