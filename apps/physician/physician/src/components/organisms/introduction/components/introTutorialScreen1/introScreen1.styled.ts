import styled from "styled-components";
import { screenSize } from "@suki-web/suki-ui";

import { getBreakpoint } from "../../../../..//helpers";

const SukiAgentSpacer = styled.div`
  height: 240px;
  margin-bottom: 16px;

  @media (min-width: ${getBreakpoint(screenSize.md)}) {
    margin-bottom: 32px;
  }
`;

const StyledIntroContainer = styled.div`
  text-align: center;
  width: 328px;

  .intro-screen1-header-container {
    margin-bottom: 16px;

    @media (min-width: ${getBreakpoint(screenSize.md)}) {
      margin-bottom: 24px;
    }
  }

  .intro-screen1-header {
    font-size: 24px;
    margin-bottom: 32px;
  }

  @media (min-width: ${getBreakpoint(screenSize.xxs)}) {
    width: 512px;

    .intro-screen1-header {
      font-size: 28px;
    }
  }

  @media (min-width: ${getBreakpoint(screenSize.md)}) {
    .intro-screen1-header {
      font-size: 40px;
      margin-bottom: 24px;
    }
  }
`;

export { SukiAgentSpacer, StyledIntroContainer };
