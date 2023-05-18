import styled from "styled-components";

const StyledTask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  color: ${({ theme }) => theme.components.gettingStarted.textColor};
`;

const StyledItem = styled.div<{ isSmall: boolean }>`
  display: flex;
  justify-content: center;
  align-items: start;

  min-height: ${({ isSmall }) => (isSmall ? "52px" : "76px")};

  svg {
    margin-right: 8px;
  }
`;

const StyledCheckmarkContainer = styled.div`
  width: 32px;
  height: 32px;
`;

const StyledChildrenContainer = styled.div`
  width: 100%;
  padding-left: 32px;
  box-sizing: border-box;
  transform: translateY(-2px);
`;

export { StyledCheckmarkContainer, StyledChildrenContainer, StyledItem, StyledTask };
