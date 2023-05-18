import styled from "styled-components";

const StyledBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 8px;
  flex-direction: row;
  align-content: stretch;
  gap: 1px;
  box-sizing: border-box;
  border-radius: 2px;
  overflow: hidden;
  margin-top: -12px;
`;

const StyledProgressItem = styled.div`
  flex-grow: 1;
  height: 8px;
`;

const StyledPendingItem = styled(StyledProgressItem)`
  background-color: ${({ theme }) => theme.components.progressBar.pendingColor};
`;

const StyledCompletedItem = styled(StyledProgressItem)`
  background-color: ${({ theme }) => theme.components.progressBar.completedColor};
`;

export { StyledBarContainer, StyledCompletedItem, StyledPendingItem };
