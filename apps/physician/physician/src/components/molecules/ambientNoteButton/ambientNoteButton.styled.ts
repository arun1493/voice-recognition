import styled, { css } from "styled-components";
import { Button, flexCenter, mediaScreenWidth, screenSize, Text } from "@suki-web/suki-ui";

type StyledFabButtonProps = {
  position: 'right' | 'left';
};

const StyledAmbientStartButton = styled(Button)`
  background: ${({ theme }) => theme.components.fabButton.backgroundColor};
  box-shadow: ${({ theme }) => theme.components.fabButton.boxShadow};
  height: 40px;
  width: 40px;
  user-select: none;

  border: none;
  position: fixed;
  bottom: 4%;
  left: calc(50% - 240px);
  overflow: hidden;
  z-index: 20;

  &:not([disabled]):active {
    background: ${({ theme }) => theme.components.fabButton.activeBackgroundColor};
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    height: 48px;
    width: 48px;
  }
`;

const StyledBanner = styled.div`
  height: 60vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 30;
  border-radius: 12px 12px 0px 0px;
  background-color: white;
  background-image: url("../../../assets/images/ambient-banner.png");
  background-size: 100% 100%;

  @media (min-width: ${mediaScreenWidth.xxs}) {
    width: 484px;
  }

  @media (min-width: ${mediaScreenWidth.sm}) {
    width: 524px;
    left: calc(50% - 262px)
  }
`;

const StyledCancelButton = styled(Button)`
  background: transparent;
  border: none;
  height: initial;
  width: initial;
  margin: 16px;
  display: block;
`;

const StyledAmbientText = styled(Text)`
  ${flexCenter}
  margin-top: 28px;
  line-height: 36px;
`;

const StyledPausedText = styled(Text)`
  ${flexCenter}
  color: ${({ theme }) => theme.palette.secondary.darkGray};
  margin-top: 8px;
  line-height: 32px;
`;

const StyledSoundWaves = styled.div`
  background-color: transparent;
  background-image: url("../../../assets/images/sound-waves.png");
  background-size: 100% 100%;
  height: 50%;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledFabButton = styled(Button) <StyledFabButtonProps>`
  ${flexCenter};
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.components.fabButton.backgroundColor};
  box-shadow: ${({ theme }) => theme.components.fabButton.boxShadow};
  user-select: none;

  border: none;
  position: fixed;
  bottom: 4%;
  right: calc(50% - 240px);
  overflow: hidden;
  z-index: 20;

  ${({ position }) =>
    position === "right" ?
      css`
      right: calc(50% - 240px);
    ` : css`
    left: calc(50% - 240px);
    `
  };

  &:not([disabled]):active {
    background: ${({ theme }) => theme.components.fabButton.activeBackgroundColor};
  }

  @media (min-width: ${mediaScreenWidth.xs}) {
    height: 48px;
    width: 48px;
  }
`;


export { StyledAmbientText, StyledBanner, StyledCancelButton, StyledFabButton, StyledPausedText, StyledSoundWaves };
