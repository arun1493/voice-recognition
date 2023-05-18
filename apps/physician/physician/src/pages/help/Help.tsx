import store from "store2";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useIntercom } from "react-use-intercom";
import { useDispatch, useSelector } from "react-redux";
import { SUKI_DOWNLOAD_URL } from "@suki-web/suki-business";
import { FunctionComponent, useEffect, useState } from "react";

import { oobeReader } from "../../readers";
import ServiceStatus from "./ServiceStatus";
import { agentActions } from "../../redux/agent";
import { completeOobeTask } from "../../helpers";
import { PageHeader, VideoPlayer } from "../../components/molecules";
import { LOCAL_STORE, OOBE_TASKS_NON_INTEGRATED } from "../../constants";
import { selectIsOobeCompleted, selectOobeState } from "../../redux/oobe";
import { StyledHelpList, StyledHelpListItem, StyledHelpPage, StyledSection } from "./help.styled";

const HELP_URL = "https://help.suki.ai";

const Help: FunctionComponent = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);
  const { show: showIntercom } = useIntercom();
  const dispatch = useDispatch();
  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);

  const { USER_ID } = LOCAL_STORE;
  const userId = store.get(USER_ID);
  const oobeData = useSelector(selectOobeState);
  const tasksStatus = oobeReader.oobeTasksStatus(oobeData);
  const tasksCompleted = oobeReader.tasksCompleted(oobeData);
  const tasksToBeCompleted = oobeReader.tasksToBeCompleted(oobeData);
  const isOobeCompleted = useSelector(selectIsOobeCompleted);

  const { chat, download, find, play } = t("pages.help.items", { returnObjects: true });

  const openHelpTab = () => {
    const sukiHelpTab = window.open(HELP_URL, "suki-help-tab");
    sukiHelpTab && sukiHelpTab.focus();
  };

  const handleSukiDownLoad = () => {
    const sukiDownloadTab = window.open(SUKI_DOWNLOAD_URL, "suki-download-tab");
    sukiDownloadTab && sukiDownloadTab.focus();
  };

  const handleShowVideo = () => setShowVideo(true);
  const handleCloseVideo = () => setShowVideo(false);

  useEffect(() => {
    dispatch(agentActions.setBottom());
    !isOobeCompleted &&
      completeOobeTask({
        userId,
        taskType: OOBE_TASKS_NON_INTEGRATED.GET_HELP,
        tasksStatus,
        tasksCompleted,
        tasksToBeCompleted,
        dispatch
      });
  }, []);

  return showVideo ? (
    <VideoPlayer onClose={handleCloseVideo} />
  ) : (
    <StyledHelpPage data-cy="help-page">
      <StyledSection>
        <PageHeader title={t("pages.help.title")} />
        <StyledHelpList data-cy="help-page-list">
          <StyledHelpListItem icon="helpFind" label={find.label} onClick={openHelpTab} text={find.text} />
          {isEmrUser ? (
            <StyledHelpListItem icon="helpPlay" label={play.label} onClick={handleShowVideo} text={play.text} />
          ) : (
            <StyledHelpListItem
              icon="download"
              label={download.label}
              onClick={handleSukiDownLoad}
              text={download.text}
            />
          )}
          <StyledHelpListItem icon="helpChat" label={chat.label} onClick={showIntercom} text={chat.text} />
        </StyledHelpList>
        <ServiceStatus status={0} />
      </StyledSection>
    </StyledHelpPage>
  );
};

export default Help;

export { Help };
