import styled from "styled-components";

const StyledPageNotFound = styled.div`
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.pages.pageNotFound.backgroundColor};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPageNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin-bottom: 12px;
  }
`;

export { StyledPageNotFound, StyledPageNotFoundContainer };
