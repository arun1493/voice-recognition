import { useTranslation } from "react-i18next";
import { useIntercom } from "react-use-intercom";
import { FunctionComponent, useEffect } from "react";
import { SUKI_WINDOWS_URL } from "@suki-web/suki-business";
import { ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  StyledAnchorTag,
  StyledCenteredBlock,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledLargeScreenAnchorTag,
  StyledMainContent,
  StyledXLiteSuccess
} from "./xLiteSuccess.styled";
import { SukiLogoR } from "../../components/atoms";
import { getWindowsDownloadLink } from "../../helpers";
import { IntercomWidget } from "../../components/molecules";
import { HOW_TO_INSTALL_WINDOWS_LINK } from "../../constants";

const XLiteSuccess: FunctionComponent = () => {
  const { t } = useTranslation();
  const { MD, LG, XL } = ScreenSize;
  const isDesktopScreen = useBreakpointIncludes(MD, LG, XL);

  const { hide: hideIntercom } = useIntercom();

  useEffect(() => {
    hideIntercom();
  }, []);

  return (
    <StyledXLiteSuccess>
      <StyledHeader>
        <SukiLogoR />
      </StyledHeader>
      <StyledContent>
        <Text size={isDesktopScreen ? "4xl" : "3xl"}>{t("pages.xLiteSuccess.title")}</Text>
        <StyledMainContent>
          <div>
            <Text size="md">{t("pages.xLiteSuccess.lineOne")}</Text>
            {!isDesktopScreen && (
              <Text size="md">
                {t("pages.xLiteSuccess.lineTwoPart1")}{" "}
                <StyledAnchorTag href={SUKI_WINDOWS_URL} rel="noreferrer" target="_blank">
                  {t("pages.xLiteSuccess.lineTwoPart2")}
                </StyledAnchorTag>{" "}
                {t("pages.xLiteSuccess.lineTwoPart3")}
              </Text>
            )}
            {isDesktopScreen && (
              <>
                <Text size="lg">{t("pages.xLiteSuccess.lineTwoLargeScreen")}</Text>
                <StyledCenteredBlock>
                  <a
                    data-cy="register-success-lite-windows-button"
                    href={getWindowsDownloadLink("releaseNotes")}
                    rel="noreferrer"
                  >
                    <img
                      alt="btn windows download white"
                      height="40"
                      src="../../assets/images/btn-windows-white@2x.png"
                      width="148"
                    />
                  </a>
                  <StyledLargeScreenAnchorTag href={HOW_TO_INSTALL_WINDOWS_LINK} rel="noreferrer" target="_blank">
                    {t("pages.xLiteSuccess.lineThreeDowloadWindowsText")}
                  </StyledLargeScreenAnchorTag>
                </StyledCenteredBlock>
              </>
            )}
          </div>
          <img
            alt="windows-EHR"
            height={isDesktopScreen ? 220 : 164}
            src="../../assets/images/windows-EHR@2x.png"
            width={isDesktopScreen ? 388 : 288}
          />
        </StyledMainContent>
      </StyledContent>
      <StyledFooter>
        <Text size="sm">{t("pages.xLiteSuccess.footerTextLineOne")}</Text>
        <Text size="sm">{t("pages.xLiteSuccess.footerTextLineTwo")}</Text>
      </StyledFooter>
      <IntercomWidget />
    </StyledXLiteSuccess>
  );
};

export default XLiteSuccess;

export { XLiteSuccess };
