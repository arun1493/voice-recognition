import styled from "styled-components";
import { flexCenterStart, mediaScreenWidth } from "@suki-web/suki-ui";

import { HEADER_HEIGHT } from "../../constants";

const StyledSignUp = styled.div`
  height: 100vh;
  overflow-y: auto;
  width: 100%;
  background: ${({ theme }) => theme.pages.signUp.background};
  ${flexCenterStart};
  flex-direction: column;
  text-align: center;
  min-width: ${mediaScreenWidth.xxs};

  input::placeholder {
    color: ${({ theme }) => theme.pages.signUp.placeholderColor};
    opacity: 1; /* Firefox */
    font-size: 16px;
  }
`;

const StyledHeader = styled.div`
  width: 312px;
  min-height: ${HEADER_HEIGHT}px;
  ${flexCenterStart};

  & svg {
    width: 84px;
    height: 24px;
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 500px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 680px;
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    width: 920px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    width: 1112px;
  }

  @media (min-width: ${mediaScreenWidth.xl}) {
    width: 1280px;
  }
`;

export { StyledHeader, StyledSignUp };
