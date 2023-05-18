import store from "store2";
import _get from "lodash/get";
import _isNil from "lodash/isNil";
import _isEmpty from "lodash/isEmpty";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";

import { VideoPlayer } from "../../molecules";
import { oobeReader } from "../../../readers";
import { getCompletedNotes } from "../../../api";
import { selectOobeState } from "../../../redux/oobe";
import { StyledIntroContainer } from "./introduction.styled";
import { completeOobeTask, isTaskCompleted } from "../../../helpers";
import { agentActions, selectIsAgentActive } from "../../../redux/agent";
import { GettingStarted, IntroScreen1, IntroScreen2 } from "./components";
import { introActions, selectIntroActiveScreen } from "../../../redux/introduction";
import { IntroScreens, LOCAL_STORE, OOBE_TASKS, QUERY_NAMES } from "../../../constants";

interface StyledIntroContainerProps {
  isTopAligned?: boolean;
}

const Introduction: FunctionComponent = () => {
  const { Screen1, Screen2, Screen3, Screen4 } = IntroScreens;
  const dispatch = useDispatch();

  const activeScreen = useSelector(selectIntroActiveScreen);
  const isAgentActive = useSelector(selectIsAgentActive);

  const { data: completedNotesData } = useQuery([QUERY_NAMES.COMPLETED_NOTES], getCompletedNotes);
  const notesCompleted = _get(completedNotesData, "data.count", 0);

  const { USER_ID } = LOCAL_STORE;
  const userId = store.get(USER_ID);
  const oobeData = useSelector(selectOobeState);
  const tasksStatus = oobeReader.oobeTasksStatus(oobeData);
  const tasksCompleted = oobeReader.tasksCompleted(oobeData);
  const notesToBeCompleted = oobeReader.notesToBeCompleted(oobeData);
  const tasksToBeCompleted = oobeReader.tasksToBeCompleted(oobeData);

  useEffect(() => {
    if (notesCompleted >= notesToBeCompleted) {
      completeOobeTask({
        userId,
        taskType: OOBE_TASKS.NOTES_COMPLETION,
        tasksStatus,
        tasksCompleted,
        tasksToBeCompleted,
        dispatch
      });
    }
  }, [notesCompleted, notesToBeCompleted, tasksStatus]);

  const onPlayClick = () => {
    batch(() => {
      dispatch(introActions.setActiveScreen(Screen3));
      dispatch(agentActions.setIsHidden(true));
    });
  };

  const onPlayerClose = () => {
    batch(() => {
      dispatch(introActions.setActiveScreen(Screen4));
      dispatch(agentActions.setIsHidden(false));
    });
    completeOobeTask({
      userId,
      taskType: OOBE_TASKS.PLAY_DEMO,
      tasksStatus,
      tasksCompleted,
      tasksToBeCompleted,
      dispatch
    });
  };

  const onSkipClick = () => {
    dispatch(introActions.setActiveScreen(Screen4));
    completeOobeTask({
      userId,
      taskType: OOBE_TASKS.PLAY_DEMO,
      tasksStatus,
      tasksCompleted,
      tasksToBeCompleted,
      dispatch
    });
  };

  useEffect(() => {
    if (activeScreen === Screen1 && isTaskCompleted(tasksStatus, OOBE_TASKS.TOGGLE_AGENT)) {
      batch(() => {
        dispatch(introActions.setActiveScreen(Screen2));
        dispatch(agentActions.setBottom());
      });
    }
  }, [activeScreen, isAgentActive, tasksStatus]);

  useEffect(() => {
    let initialState = Screen1;
    if (!_isEmpty(tasksStatus)) {
      if (isTaskCompleted(tasksStatus, OOBE_TASKS.TOGGLE_AGENT)) initialState = Screen2;
      if (isTaskCompleted(tasksStatus, OOBE_TASKS.PLAY_DEMO)) initialState = Screen4;
    }

    dispatch(introActions.setActiveScreen(initialState));
  }, [tasksStatus]);

  useEffect(() => {
    if (activeScreen !== Screen1 && !_isNil(activeScreen)) {
      dispatch(agentActions.setBottom());
    }
  }, [activeScreen]);

  return (
    <StyledIntroContainer isTopAligned={activeScreen === Screen4}>
      {activeScreen === Screen1 && <IntroScreen1 />}
      {activeScreen === Screen2 && <IntroScreen2 onPlay={onPlayClick} onSkip={onSkipClick} />}
      {activeScreen === Screen3 && <VideoPlayer onClose={onPlayerClose} />}
      {activeScreen === Screen4 && <GettingStarted />}
    </StyledIntroContainer>
  );
};

export default Introduction;

export { Introduction, StyledIntroContainerProps };
