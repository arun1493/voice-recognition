import store from "store2";
import _noop from "lodash/noop";
import ReactPlayer from "react-player";
import { Icon } from "@suki-web/suki-ui";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useEffect } from "react";

import { LOCAL_STORE } from "../../../constants";
import { agentActions } from "../../../redux/agent";
import { CloseButton, PlayerContainer, PlayerWrapper } from "./videoPlayer.styled";

interface VideoPlayerProps {
  onClose?: () => void;
}

const VideoPlayer: FunctionComponent<VideoPlayerProps> = ({ onClose = _noop }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);

  const videoURL = isEmrUser
    ? "https://storage.googleapis.com/oobe-videos/web-oobe-non-emr.mp4"
    : "https://storage.googleapis.com/oobe-videos/tutorial-web.mp4";

  useEffect(() => {
    dispatch(agentActions.setIsHidden(true));
    return () => {
      dispatch(agentActions.setIsHidden(false));
    };
  }, []);

  return (
    <PlayerWrapper>
      <PlayerContainer isSmall={isEmrUser}>
        <CloseButton data-cy="video-player-close-btn" onClick={onClose}>
          <Icon color="white" icon="close" size="xs" />
          {t("pages.introScreen2.video.button")}
        </CloseButton>
        <ReactPlayer controls={true} data-cy="video-player" height="100%" playing={true} url={videoURL} width="100%" />
      </PlayerContainer>
    </PlayerWrapper>
  );
};

export default VideoPlayer;

export { VideoPlayer };
