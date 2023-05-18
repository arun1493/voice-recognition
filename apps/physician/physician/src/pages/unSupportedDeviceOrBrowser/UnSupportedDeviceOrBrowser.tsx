import { useTranslation } from "react-i18next";
import { useIntercom } from "react-use-intercom";
import { FunctionComponent, useEffect } from "react";
import { ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  StyledButtonsContainer,
  StyledContainer,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledHeaderAndContent,
  StyledListItem,
  StyledMainContent,
  StyledPhoneImage
} from "./unSupportedDeviceOrBrowser.styled";
import { SukiLogoR } from "../../components/atoms";
import { ANDROID_APP_DOWNLOAD_LINK, APPLE_APP_DOWNLOAD_LINK } from "../../constants";

const UnSupportedDeviceOrBrowser: FunctionComponent = () => {
  const { t } = useTranslation();
  const { hide: hideIntercom } = useIntercom();
  const isXSScreen = useBreakpointIncludes(ScreenSize.XXS, ScreenSize.XS);

  const PhonesImage = <StyledPhoneImage alt="phone application example" src="../../assets/images/phones@2x.png" />;

  useEffect(() => {
    hideIntercom();
  }, []);

  return (
    <StyledContainer>
      <StyledHeaderAndContent>
        <StyledHeader>
          <SukiLogoR />
        </StyledHeader>
        <StyledContent>
          <StyledMainContent>
            <StyledListItem>
              <Text>{t("pages.unSupportedDeviceOrBrowser.error")}</Text>
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
              </StyledButtonsContainer>
            </StyledListItem>
            {isXSScreen && PhonesImage}
          </StyledMainContent>
          {!isXSScreen && PhonesImage}
        </StyledContent>
      </StyledHeaderAndContent>
      <StyledFooter>
        <Text data-cy="register-success-footer" size="sm">
          {t("pages.registerSuccess.footerTextLineOne")}
        </Text>
        <Text data-cy="register-success-footer" size="sm">
          {t("pages.registerSuccess.footerTextLineTwo")}
        </Text>
      </StyledFooter>
    </StyledContainer>
  );
};

export default UnSupportedDeviceOrBrowser;

export { UnSupportedDeviceOrBrowser };
