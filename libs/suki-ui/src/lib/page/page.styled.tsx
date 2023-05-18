import styled from "styled-components";

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.common.pageBackground};
  color: ${({ theme }) => theme.common.pageColor};
`;

export { StyledPage };

export default StyledPage;
