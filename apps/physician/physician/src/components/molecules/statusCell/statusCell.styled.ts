import styled from "styled-components";

const StyledEmptyCell = styled.div`
  width: 18px;
  height: 18px;
  box-sizing: border-box;
`;

const StyledContainer = styled.div`
  position: relative;
  margin: 0 12px 0 4px;
`;

const StyledDeleteContainer = styled(StyledContainer)`
  display: flex;
  justify-content: center;
`;

export { StyledContainer, StyledDeleteContainer, StyledEmptyCell };
