import { useTranslation } from "react-i18next";
import { FunctionComponent, useEffect, useRef } from "react";
import { Header, ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import { WakeArrowLg, WakeArrowSm } from "./WakeArrow";
import { StyledIntroContainer, SukiAgentSpacer } from "./introScreen1.styled";

const IntroScreen1: FunctionComponent = () => {
  const { t } = useTranslation();

  const { XXS, XS, LG, XL } = ScreenSize;

  const isLargeScreen = useBreakpointIncludes(LG, XL);

  const textSize = useBreakpointIncludes(XXS, XS) ? "md" : "xl";

  /* Begin: Positioning the suki agent element relative to the oobe screen (per design) */
  const spacerRef = useRef<HTMLDivElement>(null);
  let spacerElOffsetTop = spacerRef.current?.offsetTop || 0;
  let spacerElOffsetHeight = spacerRef.current?.offsetHeight || 0;

  useEffect(() => {
    spacerElOffsetTop = spacerRef.current?.offsetTop || 0;
    spacerElOffsetHeight = spacerRef.current?.offsetHeight || 0;
  }, [spacerRef]);

  useEffect(() => {
    const agentEl = document.querySelector("[data-cy=suki-agent]") as HTMLElement;
    const top = spacerElOffsetTop + spacerElOffsetHeight / 2 + "px";

    if (agentEl?.style) {
      agentEl.style.top = top;
    }

    return function cleanup() {
      if (agentEl?.style) {
        agentEl.style.top = "94%";
      }
    };
  }, [spacerElOffsetTop]);
  /* End: Positioning the suki agent element (for more info read comments at bottom of this file) */

  return (
    <StyledIntroContainer>
      <div className="intro-screen1-header-container">
        <Header className="intro-screen1-header" data-cy="intro-screen1-header" level="h1">
          {t("pages.introScreen1.heading")}
        </Header>
        {isLargeScreen ? <WakeArrowLg /> : <WakeArrowSm />}
      </div>
      <SukiAgentSpacer ref={spacerRef} />
      <Text data-cy="intro-screen1-description" size={textSize}>
        {t("pages.introScreen1.description")}
      </Text>
    </StyledIntroContainer>
  );
};

export default IntroScreen1;

export { IntroScreen1 };

/*
 * Comments regarding special positioning of Suki agent element.
 *
 * The design calls for the container to be centered (both horizontally and vertically) on the screen.
 * The design also calls for specific positioning of and spaces between elements such as the heading, wake arrow, suki agent, etc.
 * The agent element is not a child of the container.
 * The solution is to add a transparent child element (spacer) with same dimensions as the suki
 * agent, and then programmatically position the agent in the center of it. We need to calculate
 * the position of the spacer first b/c it's different for different screen sizes.
 * When the component is exited (cleanup function) we need to return the agent to its desired position.
 */
