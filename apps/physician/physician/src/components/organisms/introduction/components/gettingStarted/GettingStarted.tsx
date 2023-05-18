import store from "store2";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Icon, Text } from "@suki-web/suki-ui";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { Header, ICON_COLORS } from "@suki-web/suki-ui";
import { SUKI_DOWNLOAD_URL, SUKI_WINDOWS_URL } from "@suki-web/suki-business";

import {
  HeaderContainer,
  StyledAnchorTag,
  StyledCloseButton,
  StyledGettingStarted,
  StyledTaskList
} from "./gettingStarted.styled";
import {
  oobeTasksList,
  oobeTasksListNonIntegrated,
  selectIsOobeCompleted,
  selectOobeState
} from "../../../../../redux/oobe";
import { Task } from "../../../../molecules";
import { ProgressBar } from "../../../../atoms";
import { oobeReader } from "../../../../../readers";
import { getCompletedNotes } from "../../../../../api";
import { completeOobe, completeOobeTask } from "../../../../../helpers";
import { LOCAL_STORE, OOBE_TASKS, OOBE_TASKS_NON_INTEGRATED, QUERY_NAMES } from "../../../../../constants";

const GettingStarted: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const oobeData = useSelector(selectOobeState);
  const oobeTasksStatus = oobeReader.oobeTasksStatus(oobeData);
  const { data: completedNotesData } = useQuery([QUERY_NAMES.COMPLETED_NOTES], getCompletedNotes);
  const notesCompleted = completedNotesData?.data?.count || 0;
  const notesToBeCompleted = oobeReader.notesToBeCompleted(oobeData);
  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);

  const { USER_ID } = LOCAL_STORE;
  const userId = store.get(USER_ID);
  const tasksStatus = oobeReader.oobeTasksStatus(oobeData);
  const tasksCompleted = oobeReader.tasksCompleted(oobeData);
  const tasksToBeCompleted = oobeReader.tasksToBeCompleted(oobeData);
  const isOobeCompleted = useSelector(selectIsOobeCompleted);

  const tasksListToRender = isEmrUser ? oobeTasksList : oobeTasksListNonIntegrated;

  const handleClickDownload = () => {
    !isOobeCompleted &&
      completeOobeTask({
        userId,
        taskType: OOBE_TASKS_NON_INTEGRATED.DOWNLOAD_MOBILE_APP,
        tasksStatus,
        tasksCompleted,
        tasksToBeCompleted,
        dispatch
      });
  };
  const handleClickLearn = () => {
    !isOobeCompleted &&
      completeOobeTask({
        userId,
        taskType: OOBE_TASKS_NON_INTEGRATED.INSTALL_SUKI_WINDOWS,
        tasksStatus,
        tasksCompleted,
        tasksToBeCompleted,
        dispatch
      });
  };
  const handleCloseOobe = () => {
    completeOobe(dispatch, userId);
  };

  const renderTask = (taskType: string) => {
    const title = t(`pages.gettingStarted.commands.${[taskType]}`);
    let titleContent = <Text size="md">{title}</Text>;
    if (taskType === OOBE_TASKS_NON_INTEGRATED.DOWNLOAD_MOBILE_APP) {
      titleContent = (
        <Text size="md">
          {title}
          <StyledAnchorTag href={SUKI_DOWNLOAD_URL} onClick={handleClickDownload} rel="noreferrer" target="_blank">
            {t(`pages.gettingStarted.commands.CLICK_TO_DOWNLOAD`)}
          </StyledAnchorTag>
        </Text>
      );
    }
    if (taskType === OOBE_TASKS_NON_INTEGRATED.INSTALL_SUKI_WINDOWS) {
      titleContent = (
        <Text size="md">
          {title}
          <StyledAnchorTag href={SUKI_WINDOWS_URL} onClick={handleClickLearn} rel="noreferrer" target="_blank">
            {t(`pages.gettingStarted.commands.CLICK_TO_LEARN`)}
          </StyledAnchorTag>
        </Text>
      );
    }

    return (
      <Task id={taskType} isSmall={isEmrUser} key={taskType} status={oobeTasksStatus[taskType]} title={titleContent}>
        {taskType === OOBE_TASKS.NOTES_COMPLETION && (
          <ProgressBar
            data-cy="intro-screen4-progress-bar"
            tasksCompleted={notesCompleted}
            tasksToBeCompleted={notesToBeCompleted}
          />
        )}
      </Task>
    );
  };

  return (
    <StyledGettingStarted isSmall={isEmrUser}>
      <StyledCloseButton aria-label="Close" className="getting-started-close">
        <Icon color={ICON_COLORS.green} icon="close" onClick={handleCloseOobe} size="xs" />
      </StyledCloseButton>
      <HeaderContainer>
        <Header className="title" data-cy="intro-screen4-header" level="h1">
          {t("pages.gettingStarted.heading")}
        </Header>
        {isEmrUser && (
          <div data-cy="intro-screen4-description" role="doc-subtitle">
            {t("pages.gettingStarted.description")}
          </div>
        )}
      </HeaderContainer>

      <StyledTaskList data-cy="intro-screen4-list">{tasksListToRender.map(renderTask)}</StyledTaskList>
    </StyledGettingStarted>
  );
};

export default GettingStarted;

export { GettingStarted };
