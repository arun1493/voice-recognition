import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { useClickAway } from "react-use";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { FunctionComponent, useRef, useState } from "react";
import { getTooltipContent, IconButton } from "@suki-web/suki-ui";

import { MainMenu } from "../../organisms";
import { noteActions } from "../../../redux/note";
import { selectUserDetails } from "../../../redux/user";
import { getUnfinishedCompositions } from "../../../api";
import { EMPTY_STRING, QUERY_NAMES } from "../../../constants";
import { MainAndDropDownMenuContainer, NotificationDot } from "./mainMenuNavigation.styled";

const MainMenuNavigation: FunctionComponent = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [isMainMenuVisible, setIsMainMenuVisible] = useState(false);
  const userDetails = useSelector(selectUserDetails);
  const { data } = useQuery([QUERY_NAMES.UNFINISHED_NOTES, userDetails], getUnfinishedCompositions, {
    enabled: !_isEmpty(userDetails)
  });

  const unfinishedNotesCount = _get(data, "data.count");

  const toggleOpenMainMenu = () => {
    !isMainMenuVisible && dispatch(noteActions.setActiveSectionId(EMPTY_STRING));
    setIsMainMenuVisible(!isMainMenuVisible);
  };
  const closeMainMenu = () => setIsMainMenuVisible(false);
  const isBadgeVisible = !isMainMenuVisible && !!unfinishedNotesCount;

  useClickAway(ref, closeMainMenu);

  return (
    <MainAndDropDownMenuContainer ref={ref}>
      <IconButton
        icon="hamburger"
        isActive={isMainMenuVisible}
        onClick={toggleOpenMainMenu}
        size="md"
        testId="hamburger-menu"
        tooltip={getTooltipContent("hamburgerMenu")}
      />
      <MainMenu isOpen={isMainMenuVisible} onClose={closeMainMenu} unfinishedNotesCount={unfinishedNotesCount} />
      {isBadgeVisible && <NotificationDot />}
    </MainAndDropDownMenuContainer>
  );
};

export default MainMenuNavigation;

export { MainMenuNavigation };
