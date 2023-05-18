import store from "store2";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Paths } from "@suki-web/suki-business";
import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalContent, ModalHeader, ScreenSize, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  StyledButton,
  StyledButtonContainer,
  StyledCommandText,
  StyledPlaceholderText,
  WhatCanISayOption,
  WhatCanISayOptions
} from "./whatCanISay.styled";
import { oobeReader } from "../../../readers";
import { completeOobeTask } from "../../../helpers";
import { selectOobeState } from "../../../redux/oobe";
import { LOCAL_STORE, OOBE_TASKS } from "../../../constants";
import { modalsActions, ModalSubType } from "../../../redux/modals";
import { getHeight, optionsTranslationKey } from "./whatCanISay.helpers";

interface WhatCanISayProps {
  type?: ModalSubType;
}

type Option = {
  command: string;
  placeholder: string;
};

const WhatCanISay: FunctionComponent<WhatCanISayProps> = ({ type = "general" }) => {
  const { t } = useTranslation();
  const options: Array<Option> = t(optionsTranslationKey(type), { returnObjects: true });
  const dispatch = useDispatch();

  const { USER_ID } = LOCAL_STORE;
  const userId = store.get(USER_ID);
  const oobeData = useSelector(selectOobeState);
  const tasksCompleted = oobeReader.tasksCompleted(oobeData);
  const tasksStatus = oobeReader.oobeTasksStatus(oobeData);
  const tasksToBeCompleted = oobeReader.tasksToBeCompleted(oobeData);

  const { XXS, XS } = ScreenSize;
  const isSmallScreen = useBreakpointIncludes(XXS, XS);
  const modalWidth = isSmallScreen ? 344 : 448;

  const { contentHeight, height } = getHeight(type, isSmallScreen);

  const handleClose = () => {
    dispatch(modalsActions.hideWhatCanISayModal());
  };

  useEffect(() => {
    completeOobeTask({
      dispatch,
      tasksCompleted,
      tasksStatus,
      taskType: OOBE_TASKS.ASK_SUKI_HELP,
      tasksToBeCompleted,
      userId
    });
  }, []);

  const renderOption = (option: Option, idx: number) => {
    const { command, placeholder } = option;
    const key = command + placeholder;

    return (
      <WhatCanISayOption key={key}>
        {command && <StyledCommandText size="md">{command}</StyledCommandText>}
        {placeholder && <StyledPlaceholderText size="md">{placeholder}</StyledPlaceholderText>}
      </WhatCanISayOption>
    );
  };

  return (
    <Modal headerHeight={72} height={height} onClose={handleClose} position="mc" width={modalWidth}>
      <ModalHeader height={72} subtitle={t("modals.whatCanISay.subtitle")} title={t("modals.whatCanISay.title")} />
      <ModalContent height={contentHeight}>
        <WhatCanISayOptions>{options.map(renderOption)}</WhatCanISayOptions>
        <StyledButtonContainer>
          <Link onClick={handleClose} to={Paths.Help}>
            <StyledButton height="44px">{t("modals.whatCanISay.goToHelp")}</StyledButton>
          </Link>
        </StyledButtonContainer>
      </ModalContent>
    </Modal>
  );
};

export { WhatCanISay, WhatCanISayProps };

export default WhatCanISay;
