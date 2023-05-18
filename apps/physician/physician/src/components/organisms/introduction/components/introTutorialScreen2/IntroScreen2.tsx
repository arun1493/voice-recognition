import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Button, Header, Text } from "@suki-web/suki-ui";

import { StyledButtonWrapper, StyledIntro2Container } from "./introScreen2.styled";

interface IntroScreen2Props {
  onPlay: () => void;
  onSkip: () => void;
}

const IntroScreen2: FunctionComponent<IntroScreen2Props> = ({ onPlay, onSkip }) => {
  const { t } = useTranslation();

  return (
    <StyledIntro2Container>
      <Header className="intro-screen2-header" data-cy="intro-screen2-header" level="h1">
        {t("pages.introScreen2.heading")}
      </Header>
      <Text data-cy="intro-screen2-description">{t("pages.introScreen2.description")}</Text>

      <StyledButtonWrapper
        animate={{
          opacity: 1
        }}
        initial={{
          opacity: 0
        }}
        transition={{
          duration: 1
        }}
      >
        <Button data-cy="intro-screen2-play" isPrimary={true} onClick={onPlay} width="200px">
          {t("pages.introScreen2.buttons.play")}
        </Button>

        <Button className="skip-btn" data-cy="intro-screen2-skip" onClick={onSkip} width="200px">
          {t("pages.introScreen2.buttons.skip")}
        </Button>
      </StyledButtonWrapper>
    </StyledIntro2Container>
  );
};

export default IntroScreen2;

export { IntroScreen2 };
