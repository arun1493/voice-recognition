import { Icon } from "@suki-web/suki-ui";
import { useIntercom } from "react-use-intercom";
import { FunctionComponent, useEffect, useState } from "react";

import { FloatingIntercomButton } from "./intercomWidget.styled";

const IntercomWidget: FunctionComponent = () => {
  const { hide: hideIntercom, show: showIntercom } = useIntercom();
  const [isIntercomVisible, setIntercomVisibility] = useState(false);

  const toggleIntercomWidgetVisibility = () => {
    setIntercomVisibility(!isIntercomVisible);
  };

  useEffect(() => {
    window?.Intercom("onHide", function () {
      setIntercomVisibility(false);
    });
  }, []);

  useEffect(() => {
    if (isIntercomVisible) {
      showIntercom();
    } else {
      hideIntercom();
    }
  }, [isIntercomVisible]);

  return (
    <FloatingIntercomButton onClick={toggleIntercomWidgetVisibility}>
      <Icon icon="helpChat" size="md" />
    </FloatingIntercomButton>
  );
};

export default IntercomWidget;

export { IntercomWidget };
