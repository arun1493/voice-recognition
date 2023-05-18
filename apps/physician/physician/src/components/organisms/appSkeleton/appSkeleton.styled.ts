import styled from "styled-components";
import { HeaderProps, mediaScreenWidth } from "@suki-web/suki-ui";

import { EMR_TOOLBAR_HEIGHT, HEADER_HEIGHT } from "../../../constants";

interface ContentProps {
  isHeaderHidden?: boolean;
  isNotFoundPage?: boolean;
  shouldShowEmrToolbar?: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.components.appSkeleton.background};
`;

const EMRConnectionToolbar = styled.div`
  height: ${EMR_TOOLBAR_HEIGHT}px;
  width: 100%;
  min-width: ${mediaScreenWidth.xs};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.components.emrConnectionToolbar.backgroundColor};
`;

const EMRConnectionText = styled.div`
  margin-right: 72px;
`;

const Header = styled.header<HeaderProps>`
  height: ${HEADER_HEIGHT}px;
  width: ${mediaScreenWidth.xxs};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 16px 16px 24px;
  transition: opacity 0.2s ease-in;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};

  @media (min-width: ${mediaScreenWidth.xs}) {
    padding-left: 36px;
    padding-right: 36px;
    width: ${mediaScreenWidth.xs};
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    padding-left: 44px;
    padding-right: 44px;
    width: ${mediaScreenWidth.sm};
  }

  @media (min-width: ${mediaScreenWidth.md}) {
    padding-left: 36px;
    padding-right: 36px;
    width: ${mediaScreenWidth.md};
  }

  @media (min-width: ${mediaScreenWidth.lg}) {
    padding-left: 44px;
    padding-right: 44px;
    width: ${mediaScreenWidth.lg};
  }

  @media (min-width: ${mediaScreenWidth.xl}) {
    padding-left: 60px;
    padding-right: 60px;
    width: ${mediaScreenWidth.xl};
  }
`;

const Content = styled.div<ContentProps>`
  width: 100%;
  height: calc(
    100vh -
      ${({ isHeaderHidden, isNotFoundPage, shouldShowEmrToolbar }) =>
        shouldShowEmrToolbar
          ? `${HEADER_HEIGHT + EMR_TOOLBAR_HEIGHT}px`
          : isNotFoundPage || isHeaderHidden
          ? "0px"
          : `${HEADER_HEIGHT}px`}
  );
  overflow-y: auto;
  overflow-x: hidden;
`;

export { Container, Content, EMRConnectionText, EMRConnectionToolbar, Header };
