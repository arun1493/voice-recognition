import styled from "styled-components";
import { mediaScreenWidth } from "@suki-web/suki-ui";

import { SukiAgentContainer } from "../../components/molecules";

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.pages.home.backgroundColor};

  ${SukiAgentContainer} {
    top: 54%;
    height: 154px;
    width: 154px;
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    ${SukiAgentContainer} {
      top: 52%;
      height: 220px;
      width: 220px;
    }
  }
`;

export { StyledHome };
