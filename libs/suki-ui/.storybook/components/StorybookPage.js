import styled from "styled-components";

const StorybookPage = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.common.pageBackground};
`;

export { StorybookPage };

export default StorybookPage;
