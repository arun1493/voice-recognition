import styled from "styled-components";

const StyledNavigationToolbar = styled.nav`
  height: ${({ theme }) => theme.spacing(5)};
  display: flex;
  align-items: center;

  & > * {
    margin-left: ${({ theme }) => theme.spacing(2)};
  }

  & > *,
  & button {
    cursor: pointer;
  }
`;

export { StyledNavigationToolbar };
