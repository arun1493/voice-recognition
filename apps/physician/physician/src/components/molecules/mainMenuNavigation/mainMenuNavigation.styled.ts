import styled from "styled-components";

const MainAndDropDownMenuContainer = styled.div`
  position: relative;
`;

const NotificationDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  position: absolute;
  top: 6px;
  right: 4px;
  background: ${({ theme }) => theme.components.unfinishedNotesBadge.backgroundColor};
`;

export { MainAndDropDownMenuContainer, NotificationDot };
