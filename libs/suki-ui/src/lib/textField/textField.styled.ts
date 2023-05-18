import styled from "styled-components";

const StyledTextField = styled.div`
  .helperText {
    padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  }
`;

const StyledAdornment = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(1)};
`;

export { StyledAdornment, StyledTextField };

export default StyledTextField;
