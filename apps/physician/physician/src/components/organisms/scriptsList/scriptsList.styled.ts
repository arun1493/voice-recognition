import styled from "styled-components";
import { flexCenter, styledCenterContent } from "@suki-web/suki-ui";

const StyledListContainer = styled.ul`
  height: max-content;
  margin-bottom: 8px;
`;

const StyledListItem = styled.li`
  align-items: center;
  display: flex;
  height: 56px;
  padding: 0 8px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: ${({ theme }) => theme.components.insertScriptMenuListItem.hoveredItemBackgroundColor};
  }

  &:active {
    background: ${({ theme }) => theme.components.insertScriptMenuListItem.selectedBackgroundColor};
  }
`;

const StyledCenterContent = styled.div`
  ${styledCenterContent};
  margin-top: 80px;
`;

const StyledButtonContainer = styled.div`
  ${flexCenter};
  margin: 40px 0;
`;

export { StyledButtonContainer, StyledCenterContent, StyledListContainer, StyledListItem };
