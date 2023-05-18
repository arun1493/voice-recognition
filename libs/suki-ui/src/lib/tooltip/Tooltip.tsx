import { FunctionComponent, useEffect, useState } from "react";

import { Text } from "../text";
import { StyledTooltip } from "./tooltip.styled";

interface TooltipProps {
  content: string;
  isWithDelay?: boolean;
  sidePosition?: "left" | "right";
  topPosition?: number;
}

const START_TIMEOUT_DELAY = 400;

const Tooltip: FunctionComponent<TooltipProps> = ({ content, isWithDelay = true, sidePosition, topPosition }) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isWithDelay) {
      timer = setTimeout(() => {
        setIsShown(true);
      }, START_TIMEOUT_DELAY);
    } else {
      setIsShown(true);
    }

    return () => clearTimeout(timer);
  }, [isWithDelay]);

  return (
    <StyledTooltip isShown={isShown} sidePosition={sidePosition} topPosition={topPosition}>
      <Text color="white" size="xs">
        {content}
      </Text>
    </StyledTooltip>
  );
};

export { Tooltip };

export default Tooltip;
