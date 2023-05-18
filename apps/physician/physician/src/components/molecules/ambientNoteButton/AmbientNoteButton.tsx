import store from "store2";
import _isEmpty from "lodash/isEmpty";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Paths } from "@suki-web/suki-business";
import { FunctionComponent, useState } from "react";
import { Icon, ICON_COLORS, Button, Text } from "@suki-web/suki-ui";
import { useDispatch, useSelector } from "react-redux";

import { useNavigatorOnline } from "../../../hooks";
import { toastsActions } from "../../../redux/toast";
import { modalsActions } from "../../../redux/modals";
import { SESSION_STORE, TOAST_TYPES } from "../../../constants";
import { StyledAmbientText, StyledBanner, StyledCancelButton, StyledPausedText, StyledSoundWaves, StyledFabButton } from "./ambientNoteButton.styled";

const routesWithAmbientNoteButton = [
  Paths.PatientProfile
];

const AmbientNoteButton: FunctionComponent = ({ ...props }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const { isOffline } = useNavigatorOnline();

  const [isBannerVisible, setBannerVisible] = useState(false);

  const ambientButtonVisible = routesWithAmbientNoteButton?.find((route) => location.pathname.includes(route));

  if (_isEmpty(ambientButtonVisible)) {
    return null;
  }

  const openNoteTypesModal = () => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.s2.createNote"), type: TOAST_TYPES.ERROR }));
      return;
    }
    dispatch(modalsActions.showNoteTypesModal());
    store.session.set(SESSION_STORE.CREATE_NEW_NOTE_USING_KEYBOARD, "true");
  };

  const onAmbientStart = () => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.s2.createNote"), type: TOAST_TYPES.ERROR }));
      return;
    }

    setBannerVisible(true);
    // if(location.pathname !== Paths.PatientProfile){
    //   openNoteTypesModal();
    // }

  };

  const onAmbientCancel = () => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.s2.createNote"), type: TOAST_TYPES.ERROR }));
      return;
    }

    setBannerVisible(false);
    // if(location.pathname !== Paths.PatientProfile){
    //   openNoteTypesModal();
    // }

  };

  const onAmbientPause = () => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.s2.createNote"), type: TOAST_TYPES.ERROR }));
      return;
    }

    setBannerVisible(true);
    // if(location.pathname !== Paths.PatientProfile){
    //   openNoteTypesModal();
    // }

  };

  return (
    <>
      <StyledFabButton
        data-cy="ambient-start-button"
        onClick={onAmbientStart}
        position="left"
        {...props}
      >
        <Icon height="26" icon="ambient" width="24" />
      </StyledFabButton>
      {isBannerVisible && <StyledBanner>
        <StyledCancelButton data-cy="ambient-cancel-button" isSmall={true} onClick={onAmbientCancel}><Text isBold lineHeight="20px">{t("components.ambient.cancel")}</Text></StyledCancelButton>
        <StyledAmbientText isBold size="3xl">{t("components.ambient.ambient")}</StyledAmbientText>
        <StyledPausedText color="darkGray" size="2xl">{t("components.ambient.paused")}</StyledPausedText>
        <StyledSoundWaves></StyledSoundWaves>
        <StyledFabButton data-cy="ambient-submit-button" position="right" {...props}>
          <Icon icon="check" size="2xs" />
        </StyledFabButton>
      </StyledBanner>
      }
    </>
  );
};

export default AmbientNoteButton;

export { AmbientNoteButton };
