import { useTranslation } from "react-i18next";
import { useIdleTimer } from "react-idle-timer";
import { Dialog, Text } from "@suki-web/suki-ui";
import { FunctionComponent, useState } from "react";

import { logOut } from "../../../helpers";
import { INACTIVITY_PROMPT_TIMEOUT, INACTIVITY_TIMEOUT, TimeOutEvents } from "./constants";

const AppIdleTimer: FunctionComponent = (props) => {
  const { t } = useTranslation();
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleResetTimer = () => {
    setIsDialogVisible(false);
    reset();
  };

  const handleStaySignedInButtonClick = () => {
    message({ action: TimeOutEvents.STAY_SIGNED_IN });
    handleResetTimer();
  };

  const onPrompt = () => {
    setIsDialogVisible(true);
  };

  const onIdle = () => {
    logOut();
  };

  const onActive = () => {
    start();
  };

  const onMessage = (data: any) => {
    switch (data?.action) {
      case TimeOutEvents.STAY_SIGNED_IN:
        handleResetTimer();
        break;
      default:
        break;
    }
  };

  const { message, reset, start } = useIdleTimer({
    crossTab: true,
    onActive,
    onIdle,
    onMessage,
    onPrompt,
    promptTimeout: INACTIVITY_PROMPT_TIMEOUT,
    syncTimers: 200,
    timeout: INACTIVITY_TIMEOUT
  });

  const timerDialogButtonProps = {
    hasCloseBtn: false,
    start: { text: t("modals.inActivityTimeout.button"), onClick: handleStaySignedInButtonClick }
  };

  return (
    <>
      {props.children}
      {isDialogVisible && (
        <Dialog
          buttonProps={timerDialogButtonProps}
          isOpen={isDialogVisible}
          key="idle-timer-modal"
          onClose={handleStaySignedInButtonClick}
        >
          <Text>{t("modals.inActivityTimeout.message")}</Text>
        </Dialog>
      )}
    </>
  );
};

export { AppIdleTimer };
