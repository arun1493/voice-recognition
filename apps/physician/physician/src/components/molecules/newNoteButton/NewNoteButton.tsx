import store from "store2";
import _isEmpty from "lodash/isEmpty";
import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Paths } from "@suki-web/suki-business";
import { useDispatch, useSelector } from "react-redux";
import { Icon, ICON_COLORS, ScreenSize, useBreakpoint } from "@suki-web/suki-ui";

import { useNavigatorOnline } from "../../../hooks";
import { toastsActions } from "../../../redux/toast";
import { modalsActions } from "../../../redux/modals";
import { selectIntroActiveScreen } from "../../../redux/introduction";
import { IntroScreens, SESSION_STORE, TOAST_TYPES } from "../../../constants";
import { StyledNewNoteButton, StyledNewNoteButtonContent, StyledNewNoteText } from "./newNoteButton.styled";

const routesWithoutNewNoteButton = [
  Paths.ForgotPassword,
  Paths.Help,
  Paths.Login,
  Paths.Logout,
  Paths.Note + "/",
  Paths.RegisterSuccess,
  Paths.ScheduleImport,
  Paths.Settings,
  Paths.ThinClient,
  Paths.WindowsUpdate
];

const NewNoteButton: FunctionComponent = ({ ...props }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();

  const { isOffline } = useNavigatorOnline();

  const { MD, LG, XL } = ScreenSize;
  const breakpoint = useBreakpoint();
  const isLargeScreen = [MD, LG, XL].includes(breakpoint);
  const oobeActiveScreen = useSelector(selectIntroActiveScreen);
  const textSize = isLargeScreen ? "md" : "xs";

  const shouldHideNewNoteButton = routesWithoutNewNoteButton?.find((route) => location.pathname.includes(route));
  const isHomeRoute = location.pathname === Paths.Home;

  if (
    shouldHideNewNoteButton ||
    (isHomeRoute && !_isEmpty(oobeActiveScreen) && oobeActiveScreen !== IntroScreens.Screen4)
  ) {
    return null;
  }

  const floatExtremeRight = location.pathname === Paths.Home || location.pathname === Paths.Root;

  const openNoteTypesModal = () => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.s2.createNote"), type: TOAST_TYPES.ERROR }));
      return;
    }
    dispatch(modalsActions.showNoteTypesModal());
    store.session.set(SESSION_STORE.CREATE_NEW_NOTE_USING_KEYBOARD, "true");
  };

  const handleOnclick = () => {
    if(location.pathname !== Paths.PatientProfile){
      openNoteTypesModal();
    }
    
  }

  return (
    <StyledNewNoteButton
      data-cy="new-note-button"
      floatExtremeRight={floatExtremeRight}
      onClick={handleOnclick}
      {...props}
    >
      <StyledNewNoteButtonContent>
        <Icon color={ICON_COLORS.green} icon="newNote" size="xs" />
        <StyledNewNoteText isBold={true} size={textSize}>
          {t("components.newNoteButton")}
        </StyledNewNoteText>
      </StyledNewNoteButtonContent>
    </StyledNewNoteButton>
  );
};

export default NewNoteButton;

export { NewNoteButton };
