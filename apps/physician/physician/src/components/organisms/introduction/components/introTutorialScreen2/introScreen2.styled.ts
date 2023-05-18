import styled from "styled-components";
import { motion } from "framer-motion";
import { flexCenter, screenSize } from "@suki-web/suki-ui";

import { getBreakpoint } from "../../../../../helpers";

const StyledIntro2Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 328px;

  .intro-screen2-header {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 40px;
  }

  .skip-btn {
    border: none;
    font-size: 16px;
    line-height: 24px;
    height: auto;
    margin-top: 32px;
  }

  @media (min-width: ${getBreakpoint(screenSize.xxs)}) {
    width: 336px;

    .intro-screen2-header {
      font-size: 28px;
      line-height: 36px;
    }
  }

  @media (min-width: ${getBreakpoint(screenSize.xs)}) {
    width: 456px;

    p {
      font-size: 20px;
      line-height: 24px;
    }

    .skip-btn {
      font-size: 18px;
    }
  }

  @media (min-width: ${getBreakpoint(screenSize.sm)}) {
    width: 616px;
  }

  @media (min-width: ${getBreakpoint(screenSize.md)}) {
    width: 552px;

    .intro-screen2-header {
      font-size: 40px;
      line-height: 48px;
    }
  }

  @media (min-width: ${getBreakpoint(screenSize.lg)}) {
    width: 636px;
  }
`;

const StyledButtonWrapper = styled(motion.div)`
  ${flexCenter};
  flex-direction: column;
`;

export { StyledButtonWrapper, StyledIntro2Container };
