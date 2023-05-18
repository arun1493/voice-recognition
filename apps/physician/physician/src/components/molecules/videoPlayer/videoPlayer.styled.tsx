import styled from "styled-components";
import { flexCenter, mediaScreenWidth } from "@suki-web/suki-ui";

const PlayerWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  ${flexCenter}
  backdrop-filter: brightness(0.5);
`;

const PlayerContainer = styled.div<{ isSmall: boolean }>`
  position: fixed;
  top: 80px;
  width: 100vw;
  ${({ isSmall }) => !isSmall && "height: 80vh;"}
  background-color: black;
  opacity: 0.9;
  z-index: 9;

  @media (min-width: ${mediaScreenWidth.xxs}) {
    width: 328px;
  }
  @media (min-width: ${mediaScreenWidth.xs}) {
    width: 480px;
  }
  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 640px;
  }
  @media (min-width: ${mediaScreenWidth.md}) {
    width: 776px;
  }
  @media (min-width: ${mediaScreenWidth.lg}) {
    width: 936px;
  }
  @media (min-width: ${mediaScreenWidth.xl}) {
    width: 1080px;
  }
`;

const CloseButton = styled.button`
  border: 1px solid ${({ theme }) => theme.components.videoPlayer.closeButton.borderColor};
  border-radius: 2px;
  padding: 0 10px;
  text-align: center;
  line-height: 35px;
  color: ${({ theme }) => theme.components.videoPlayer.closeButton.backgroundColor};
  background: transparent;
  font-size: 16px;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  top: 4px;
  right: 4px;
  ${flexCenter}
`;

export { PlayerContainer, CloseButton, PlayerWrapper };
