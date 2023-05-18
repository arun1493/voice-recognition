import store from "store2";
import _some from "lodash/some";
import ReactDOM from "react-dom";
import Mousetrap from "mousetrap";
import { useLocation } from "react-router-dom";
import { useBreakpoint } from "@suki-web/suki-ui";
import { FunctionComponent, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { WebVoiceProcessor } from "@picovoice/web-voice-processor";
import { ClientEmitEventTypes, Paths } from "@suki-web/suki-business";

import {
  noteActions,
  selectActiveSectionId,
  selectCardsVisibility,
  selectCurrentComposition,
  selectIsReadOnly
} from "../../../redux/note";
import {
  selectAgentPosition,
  selectAgentSize,
  selectAgentStatus,
  selectIsAgentActive,
  selectIsAgentAnimated,
  selectIsAgentHidden
} from "../../../redux/agent";
import { playSound } from "./helpers";
import { useSocket } from "../../../socket";
import { AnimationRing } from "./components";
import { oobeReader } from "../../../readers";
import { isNoteReadOnly } from "../../../helpers";
import { agentActions } from "../../../redux/agent";
import { selectOobeState } from "../../../redux/oobe";
import { selectIsNotFoundPage } from "../../../redux/page";
import sukiAgentIcon from "../../../assets/images/sukiAgent.png";
import { completeOobeTask, isTaskCompleted } from "../../../helpers";
import { compositionReader, metadataReader } from "../../../readers";
import { SukiAgentContainer, SukiAgentIcon } from "./sukiAgent.styled";
import { EMPTY_STRING, LOCAL_STORE, OOBE_TASKS, SukiAgentSize, SukiAgentState } from "../../../constants";
import { AgentSounds, DISABLED_AGENT_ROUTES, EVENTS, HIDDEN_AGENT_ROUTES, HORIZONTAL_OFFSET } from "./constants";

interface SukiAgentProps {
  agentRootEl?: HTMLElement;
}

interface StyledSukiAgentProps {
  horizontalOffset: number;
  isActive: boolean;
  isAnimated: boolean;
  isBottomPosition: boolean;
  isHidden: boolean;
  size: SukiAgentSize;
}

const SukiAgent: FunctionComponent<SukiAgentProps> = ({ agentRootEl = document.getElementById("agent-root") }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const breakpoint = useBreakpoint();

  const { registerEvents, unRegisterEvents, transmitEvent } = useSocket();
  const isNotFoundPage = useSelector(selectIsNotFoundPage);
  const isNoteCardsVisible = useSelector(selectCardsVisibility);
  const activeSectionId = useSelector(selectActiveSectionId);
  const agentPosition = useSelector(selectAgentPosition);
  const agentSize = useSelector(selectAgentSize);
  const agentStatus = useSelector(selectAgentStatus);
  const isActive = useSelector(selectIsAgentActive);
  const isAnimated = useSelector(selectIsAgentAnimated);
  const isHidden = useSelector(selectIsAgentHidden);
  const isReadOnlyFromStore = useSelector(selectIsReadOnly);

  const composition = useSelector(selectCurrentComposition);
  const metadata = compositionReader.metadata(composition);
  const noteStatus = metadataReader.status(metadata);
  const isReadOnly = isNoteReadOnly(noteStatus) || isReadOnlyFromStore;

  const { USER_ID } = LOCAL_STORE;
  const userId = store.get(USER_ID);
  const oobeData = useSelector(selectOobeState);
  const tasksStatus = oobeReader.oobeTasksStatus(oobeData);
  const tasksCompleted = oobeReader.tasksCompleted(oobeData);
  const tasksToBeCompleted = oobeReader.tasksToBeCompleted(oobeData);

  const isToggleAgentOobeTaskCompleted = isTaskCompleted(tasksStatus, OOBE_TASKS.TOGGLE_AGENT);

  const isCurrentRouteDisabledForAgent = (route: string) => location.pathname.includes(route);
  const isAgentHidden = _some(HIDDEN_AGENT_ROUTES, isCurrentRouteDisabledForAgent);
  const isAgentDisabled = _some(DISABLED_AGENT_ROUTES, isCurrentRouteDisabledForAgent);

  /*
  Agent state update needs to be transmitted to frontend server to support multiple
  tabs functionality across the browser. The state will be updated based on the response
  triggered from frontend server, which is handled by the event handler registered
  with the event ClientEmitEventTypes.SET_AGENT_STATE.
  */
  function setAgentState(isAgentActive: boolean) {
    transmitEvent({
      type: ClientEmitEventTypes.SET_AGENT_STATE,
      data: { isAgentActive }
    });
  }

  /*
  Toggling agent state is a special case of agent state update which again needs to be handled
  by the front end server.
  */
  function toggleAgentState() {
    setAgentState(!isActive);
  }

  const initializeAudio = async () => {
    const options = {
      frameLength: 1600,
      outputSampleRate: 16000
    };

    WebVoiceProcessor.setOptions(options);
  };

  useEffect(() => {
    Mousetrap.bind("f9", toggleAgentState);
    registerEvents(EVENTS);

    initializeAudio();

    return () => {
      unRegisterEvents(EVENTS);
    };
  }, []);

  useEffect(() => {
    if (isToggleAgentOobeTaskCompleted) {
      setAgentState(true);
    }
  }, [isToggleAgentOobeTaskCompleted]);

  useEffect(() => {
    handleSubscription(isActive, isAgentDisabled);
  }, [isActive, isAgentDisabled]);

  useEffect(() => {
    if (isActive && location?.pathname) {
      transmitEvent({
        type: ClientEmitEventTypes.SPEECH_CONFIG,
        data: {
          readOnly: isReadOnly
        }
      });
    }
  }, [isActive, location]);

  useEffect(() => {
    if (isActive && agentStatus === SukiAgentState.LISTENING && !activeSectionId) {
      playSound(AgentSounds.EXIT_DICTATION);
    }
    if (isActive && agentStatus !== SukiAgentState.AWAKE && agentStatus !== SukiAgentState.PROCESSING) {
      if (activeSectionId && !isReadOnly) {
        dispatch(agentActions.setAgentState(SukiAgentState.LISTENING));
      } else {
        dispatch(agentActions.setAgentState(SukiAgentState.READY));
      }
    }
  }, [activeSectionId, agentStatus, isActive]);

  const handleSubscription = async (isActive: boolean, isAgentDisabled: boolean) => {
    const engine = {
      onmessage: function (e: any) {
        transmitEvent({
          type: "SPEECH_TRANSFER",
          data: e.data.inputFrame
        });
      }
    };
    if (!isActive || isAgentDisabled) {
      await WebVoiceProcessor.reset();
    } else {
      await WebVoiceProcessor.subscribe(engine);
    }
  };

  if (isAgentHidden || isAgentDisabled || isNotFoundPage) {
    return null;
  }

  const isNotePage = location.pathname.includes(Paths.Note);
  const horizontalOffset = isNotePage && isNoteCardsVisible ? HORIZONTAL_OFFSET[breakpoint] : 0;

  if (!agentRootEl) {
    agentRootEl = document.createElement("div");
    document.body.appendChild(agentRootEl);
  }

  const onAgentClick = () => {
    if (activeSectionId && isActive) {
      batch(() => {
        dispatch(noteActions.setActiveSectionId(EMPTY_STRING));
        playSound(AgentSounds.EXIT_DICTATION);
        dispatch(agentActions.setAgentState(SukiAgentState.READY));
      });
    } else {
      toggleAgentState();
    }
    if (!isToggleAgentOobeTaskCompleted) {
      completeOobeTask({
        userId,
        taskType: OOBE_TASKS.TOGGLE_AGENT,
        tasksStatus,
        tasksCompleted,
        tasksToBeCompleted,
        dispatch
      });
    }
  };

  const agent = (
    <SukiAgentContainer
      animate={{
        opacity: 1
      }}
      data-cy="suki-agent"
      horizontalOffset={horizontalOffset}
      initial={{
        opacity: 0
      }}
      isActive={isActive}
      isAnimated={isAnimated}
      isBottomPosition={agentPosition === "bottom"}
      isHidden={isHidden}
      onClick={onAgentClick}
      size={agentSize}
      transition={{
        duration: 0.5
      }}
    >
      <AnimationRing agentPosition={agentPosition} agentStatus={agentStatus} isActive={isActive} size={agentSize} />
      <SukiAgentIcon src={sukiAgentIcon} />
    </SukiAgentContainer>
  );

  return ReactDOM.createPortal(agent, agentRootEl);
};

export default SukiAgent;

export { SukiAgent, StyledSukiAgentProps };
