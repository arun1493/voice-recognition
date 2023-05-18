import styled, { css } from "styled-components";
import { flexCenter, flexCenterEnd, mediaScreenWidth, Text } from "@suki-web/suki-ui";

import sukiLogo from "../../assets/images/sukiLogoWhite.png";

const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.pages.windowsDownload.backgroundColor.bottomContainer};
`;

const HorizontalContainer = css`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: ${mediaScreenWidth.xxs}) {
    height: 100%;
    flex-direction: column;
  }
`;

const TopContainer = styled.div`
  ${HorizontalContainer};
  background: ${({ theme }) => theme.pages.windowsDownload.backgroundColor.topContainer};
`;

const BottomContainer = styled.div`
  ${HorizontalContainer};
`;

interface ContentContainerProps {
  isAlignCenter?: boolean;
}

const ContentContainer = styled.div<ContentContainerProps>`
  width: 100%;
  height: 90%;
  margin: 4% 0 2%;
  display: flex;
  align-items: ${({ isAlignCenter }) => (isAlignCenter ? "center" : "flex-start")};

  @media (max-width: ${mediaScreenWidth.xxs}) {
    flex-direction: column;
  }
`;

interface SectionContainerProps {
  hasBorderLeft?: boolean;
  hasExtraRightIndent?: boolean;
  isBiggerFont?: boolean;
  isLeft?: boolean;
  isRight?: boolean;
  textColor?: string;
}

const SectionContainer = styled.div<SectionContainerProps>`
  width: ${({ isLeft }) => (isLeft ? "40%" : "60%")};
  display: flex;
  flex-direction: column;
  padding: ${({ hasExtraRightIndent }) => (hasExtraRightIndent ? "0 7% 0 3%" : "0 5%")};
  color: ${({ textColor }) => (textColor === "white" ? "white" : "black")};
  font-size: ${({ isBiggerFont }) => (isBiggerFont ? "1.1em" : "1em")};
  align-items: ${({ isRight }) => (isRight ? "flex-start" : "flex-end")};
  border-left: ${({ hasBorderLeft }) => hasBorderLeft && "1px outset black"};

  @media (max-width: ${mediaScreenWidth.xxs}) {
    width: 80%;
    padding: 10%;
  }
`;

const SukiLogo = styled.div`
  width: 275px;
  height: 75px;
  background-image: url(${sukiLogo});
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${mediaScreenWidth.sm}) {
    width: 145px;
    height: 40px;
  }

  @media (max-width: ${mediaScreenWidth.md}) {
    width: 195px;
    height: 50px;
  }
`;

const TextSectionAlignRight = styled.div`
  text-align: right;
  line-height: 30px;
  margin-top: 5%;
`;

const RegularTextSection = styled.div`
  font-size: 14px;
  line-height: normal;
  margin: 5px 0;

  ul {
    margin: 5px;
    list-style: disc;

    li {
      margin: 5px 0 0 30px;
    }
  }
`;

const WindowsDownloadBtn = styled.a`
  width: 200px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  ${flexCenter};
  margin: 25px 0 5px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  background: ${({ theme }) => theme.pages.windowsDownload.backgroundColor.downloadButton};
  border-radius: 20px;
  margin-bottom: 20px;

  &:hover {
    background: ${({ theme }) => theme.pages.windowsDownload.backgroundColor.hoveredDownloadButton};
  }
`;

const StyledRow = styled.div`
  ${flexCenterEnd};

  margin-bottom: 8px;

  p {
    margin-left: 10px;
  }
`;

interface StyledTextProps {
  lineHeight?: string;
  margin?: string;
}

const StyledText = styled(Text)<StyledTextProps>`
  ${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight}` : "")};
  ${({ margin }) => (margin ? `margin: ${margin}` : "")};
`;

const StyledRightAlignText = styled(StyledText)`
  text-align: right;
`;

const StyledA = styled.a`
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  line-height: 28px;
  color: inherit;
`;

const StyledP = styled.p`
  font-size: 14px;
`;

export {
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
};
