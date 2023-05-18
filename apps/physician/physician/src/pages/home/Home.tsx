import store from "store2";
import _get from "lodash/get";
import _isNil from "lodash/isNil";
import _isEmpty from "lodash/isEmpty";
import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { Page, ScreenSize, useBreakpoint } from "@suki-web/suki-ui";

import { useTranslation } from "react-i18next";
import { agentActions } from "../../redux/agent";
import { selectUserDetails } from "../../redux/user";
import { selectIsOobeCompleted } from "../../redux/oobe";
import { Introduction } from "../../components/organisms";
import { selectIntroActiveScreen } from "../../redux/introduction";
import { getCompletedNotes, getUnfinishedCompositions } from "../../api";
import { IntroScreens, LOCAL_STORE, QUERY_NAMES, SukiAgentSize } from "../../constants";

const Home: FunctionComponent = () => {
  const breakpoint = useBreakpoint();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { XXS, XS, SM, MD } = ScreenSize;

  const userDetails = useSelector(selectUserDetails);
  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);
  const isOobeCompleted = useSelector(selectIsOobeCompleted);
  const { Screen1 } = IntroScreens;
  const activeScreen = useSelector(selectIntroActiveScreen);

  const { data: unfinishedNotesData } = useQuery([QUERY_NAMES.UNFINISHED_NOTES], getUnfinishedCompositions, {
    enabled: !_isEmpty(userDetails)
  });
  const unfinishedNotesCount = _get(unfinishedNotesData, "data.count");

  const { data: completedNotesData } = useQuery([QUERY_NAMES.COMPLETED_NOTES], getCompletedNotes, {
    enabled: !_isEmpty(userDetails)
  });
  const notesCompleted = _get(completedNotesData, "data.count");

  const isNewUser = unfinishedNotesCount + notesCompleted < 5;
  const isOobeActive = isEmrUser ? !isOobeCompleted && isNewUser : !isOobeCompleted;

  useEffect(() => {
    dispatch(agentActions.setCentered());
  }, []);

  useEffect(() => {
    let agentSize = isOobeActive ? SukiAgentSize.OOBE_LG : SukiAgentSize.XL;
    if ([XXS, XS, SM, MD].includes(breakpoint)) {
      agentSize = isOobeActive ? SukiAgentSize.OOBE_SM : SukiAgentSize.MD;
    }
    if (isOobeActive && activeScreen !== Screen1) {
      agentSize = SukiAgentSize.SM;
    }

    batch(() => {
      dispatch(agentActions.setSize(agentSize));
      isOobeActive &&
        (activeScreen === Screen1 ? dispatch(agentActions.setCentered()) : dispatch(agentActions.setBottom()));
    });
  }, [activeScreen, breakpoint, isOobeActive]);

  return <Page>{isOobeActive && <Introduction />}</Page>;
};

export default Home;

export { Home };
