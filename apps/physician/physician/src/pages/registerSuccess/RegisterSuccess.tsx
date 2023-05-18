import { useTranslation } from "react-i18next";

import { FunctionComponent } from "react";
import { ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  StyledButtonsContainer,
  StyledContainer,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledLoginContainer,
  StyledMainContent,
  StyledPhoneImage,
  StyledStepTwoText,
  StyledTitleText
} from "./registerSuccess.styled";
import { SukiLogoR } from "../../components/atoms";
import { getWindowsDownloadLink } from "../../helpers";
import { MinimalLogin } from "../../components/organisms";
import { IntercomWidget } from "../../components/molecules";
import { ANDROID_APP_DOWNLOAD_LINK, APPLE_APP_DOWNLOAD_LINK } from "../../constants";

const RegisterSuccess: FunctionComponent = () => {
  const { t } = useTranslation();

  const isSmallScreen = useBreakpointIncludes(ScreenSize.XXS, ScreenSize.XS, ScreenSize.SM);

  const PhonesImage = <StyledPhoneImage alt="phone application example" src="../../assets/images/phones@2x.png" />;

  return (
    <StyledContainer>
      <StyledHeader>
        <SukiLogoR />
      </StyledHeader>
      <StyledContent>
        <Text size={isSmallScreen ? "3xl" : "4xl"}>{t("pages.registerSuccess.welcome")}</Text>
      </StyledContent>
      <StyledContent>
        <StyledMainContent>
          <StyledTitleText size={isSmallScreen ? "md" : "lg"}>
            {t("pages.registerSuccess.textLineOnePart1")}
          </StyledTitleText>
          <>
            {isSmallScreen && (
              <StyledStepTwoText size="md">{t("pages.registerSuccess.textLineOnePart2")}</StyledStepTwoText>
            )}
            {!isSmallScreen && (
              <StyledStepTwoText size="lg">{t("pages.registerSuccess.textStepOne")}</StyledStepTwoText>
            )}
            <StyledButtonsContainer>
              <a
                data-cy="register-success-section1-button1"
                href={APPLE_APP_DOWNLOAD_LINK}
                rel="noreferrer"
                target="_blank"
              >
                <img alt="apple download application" src="../../assets/images/btn-apple@2x.png" />
              </a>
              <a
                data-cy="register-success-section1-button2"
                href={ANDROID_APP_DOWNLOAD_LINK}
                rel="noreferrer"
                target="_blank"
              >
                <img alt="android download application" src="../../assets/images/btn-google@2x.png" />
              </a>
              {!isSmallScreen && (
                <a
                  data-cy="register-success-section1-button3"
                  href={getWindowsDownloadLink("releaseNotes")}
                  rel="noreferrer"
                >
                  <img alt="windows download application" src="../../assets/images/btn-windows@2x.png" />
                </a>
              )}
            </StyledButtonsContainer>
          </>
        </StyledMainContent>
        {isSmallScreen && PhonesImage}
        {!isSmallScreen && (
          <StyledLoginContainer>
            <MinimalLogin />
          </StyledLoginContainer>
        )}
      </StyledContent>
      <StyledFooter>
        <Text data-cy="register-success-footer" size="sm">
          {t("pages.registerSuccess.footerTextLineOne")}
        </Text>
        <Text data-cy="register-success-footer" size="sm">
          {t("pages.registerSuccess.footerTextLineTwo")}
        </Text>
      </StyledFooter>
      <IntercomWidget />
    </StyledContainer>
  );
};

export default RegisterSuccess;

export { RegisterSuccess };
