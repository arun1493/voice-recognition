import _get from "lodash/get";
import _map from "lodash/map";
import { Text } from "@suki-web/suki-ui";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";

import {
  BottomContainer,
  ContentContainer,
  MainContainer,
  RegularTextSection,
  SectionContainer,
  StyledA,
  StyledP,
  StyledRightAlignText,
  StyledRow,
  StyledText,
  SukiLogo,
  TextSectionAlignRight,
  TopContainer,
  WindowsDownloadBtn
} from "./windowsDownload.styled";
import { releaseNotesReader } from "../../readers";
import { getWindowsReleaseNotes } from "../../api";
import { getWindowsDownloadLink } from "../../helpers";
import { HOW_TO_INSTALL_WINDOWS_LINK, QUERY_NAMES } from "../../constants";

const WindowsDownload: FunctionComponent = () => {
  const { t } = useTranslation();
  const { data } = useQuery([QUERY_NAMES.WINDOWS_RELEASE_NOTES], getWindowsReleaseNotes);

  const releaseData = _get(data, "data.releaseData");
  const version = releaseNotesReader.version(releaseData);
  const date = releaseNotesReader.date(releaseData);
  const description = releaseNotesReader.description(releaseData);
  const notes = releaseNotesReader.notes(releaseData);
  const issues = releaseNotesReader.issues(releaseData);

  const DownloadSukiWindowsAppComponent = () => {
    return (
      <>
        <StyledText color="white" data-cy="windows-update-download-header" margin="0 0 5px 0" size="2xl">
          {t("pages.windowsDownload.top.heading1")}
        </StyledText>
        <StyledText color="white" data-cy="windows-update-assistant" margin="0 0 25px 0" size="4xl">
          {t("pages.windowsDownload.top.heading2")}
        </StyledText>
        <StyledText color="white" lineHeight="30px">
          {t("pages.windowsDownload.top.description")}
        </StyledText>
        <WindowsDownloadBtn data-cy="windows-update-download-btn" href={getWindowsDownloadLink()}>
          {t("pages.windowsDownload.top.button")}
        </WindowsDownloadBtn>
        <StyledA href={getWindowsDownloadLink("dotNet3")}>{t("pages.windowsDownload.top.downloadNet3")}</StyledA>
        <StyledP>
          {t("pages.windowsDownload.top.needHelp")}
          <StyledA href={HOW_TO_INSTALL_WINDOWS_LINK}>{t("pages.windowsDownload.top.howToInstallWindows")}</StyledA>
        </StyledP>
      </>
    );
  };

  const DownloadVersionComponent = () => {
    return (
      <>
        <StyledRightAlignText data-cy="windows-update-download-whats-new" isBold={true} margin="0 0 35px 0" size="3xl">
          {t("pages.windowsDownload.left.heading")}
        </StyledRightAlignText>
        <TextSectionAlignRight>
          <StyledRow>
            <Text data-cy="windows-update-version" isBold={true} size="xl">
              {t("pages.windowsDownload.left.versionLabel")}
            </Text>
            <Text size="xl">{version}</Text>
          </StyledRow>
          <StyledRow>
            <Text data-cy="windows-update-date" isBold={true} size="xl">
              {t("pages.windowsDownload.left.dateLabel")}
            </Text>
            <Text size="xl">{date}</Text>
          </StyledRow>
        </TextSectionAlignRight>
      </>
    );
  };

  const ReleaseNotesComponent = () => {
    return (
      <>
        <StyledText data-cy="windows-update-release-notes" isBold={true} margin="0 0 13px 0" size="xl">
          {t("pages.windowsDownload.right.heading1")}
        </StyledText>
        <RegularTextSection>{description}</RegularTextSection>
        <StyledText data-cy="windows-update-you-can" isBold={true} margin="15px 0 10px 0" size="lg">
          {t("pages.windowsDownload.right.heading2")}
        </StyledText>
        <RegularTextSection>
          <ul>
            {_map(notes, (note) => (
              <li>{note}</li>
            ))}
          </ul>
        </RegularTextSection>

        <StyledText data-cy="windows-update-issues" isBold={true} margin="10px 0 3px 0" size="lg">
          {t("pages.windowsDownload.right.heading3")}
        </StyledText>
        <RegularTextSection>
          <ul>
            {_map(issues, (issue) => (
              <li>{issue}</li>
            ))}
          </ul>
        </RegularTextSection>
      </>
    );
  };

  return (
    <MainContainer>
      <TopContainer>
        <ContentContainer isAlignCenter={true}>
          <SectionContainer isLeft={true}>
            <SukiLogo data-cy="suki-logo" />
          </SectionContainer>
          <SectionContainer isBiggerFont={true} isRight={true} textColor="white">
            <DownloadSukiWindowsAppComponent />
          </SectionContainer>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <ContentContainer>
          <SectionContainer hasExtraRightIndent={true} isLeft={true}>
            <DownloadVersionComponent />
          </SectionContainer>
          <SectionContainer hasBorderLeft={true} isRight={true}>
            <ReleaseNotesComponent />
          </SectionContainer>
        </ContentContainer>
      </BottomContainer>
    </MainContainer>
  );
};

export default WindowsDownload;

export { WindowsDownload };
