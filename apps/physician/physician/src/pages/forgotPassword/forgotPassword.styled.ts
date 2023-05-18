import styled from "styled-components";
import { mediaScreenWidth } from "@suki-web/suki-ui";

const StyledForgotPasswordContainer = styled.div`
  width: 284px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100vh;

  & h5 {
    margin-bottom: 20px;
  }

  & a {
    margin-top: 32px;
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 344px;

    & input {
      width: 344px;
    }
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 400px;
  }
`;

const SukiEmailFieldWrapper = styled.div`
  margin-bottom: 40px;
  margin-top: 32px;
  width: 334px;
`;

const StyledCancelButton = styled.div`
  margin-top: 16px;
`;

export { StyledCancelButton, StyledForgotPasswordContainer, SukiEmailFieldWrapper };
