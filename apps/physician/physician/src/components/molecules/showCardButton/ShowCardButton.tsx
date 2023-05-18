import { useDispatch, useSelector } from "react-redux";
import { FunctionComponent, useEffect, useState } from "react";
import { getTooltipContent, Icon, lightTheme as theme, Tooltip } from "@suki-web/suki-ui";

import { StyledShowCardButton } from "./showCardButton.styled";
import { selectIsWithDelay, tooltipActions } from "../../../redux/tooltip";

interface ShowCardButtonProps {
  isCardsVisible: boolean;
  readOnly: boolean;
  onClick: () => void;
}

const ShowCardButton: FunctionComponent<ShowCardButtonProps> = ({ isCardsVisible, readOnly, onClick }) => {
  const icon = isCardsVisible ? "closeCard" : "openCard";
  const dispatch = useDispatch();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const isWithDelay = useSelector(selectIsWithDelay);

  const onMouseEnter = () => setIsTooltipVisible(true);
  const onMouseLeave = () => {
    setIsTooltipVisible(false);
    dispatch(tooltipActions.setIsWithDelay(true));
  };

  const onButtonClick = () => {
    setIsTooltipVisible(false);
    onClick();
  };

  useEffect(() => {
    dispatch(tooltipActions.setIsWithDelay(true));
  }, []);
  return (
    <StyledShowCardButton
      isCardsVisible={isCardsVisible}
      onClick={onButtonClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      readOnly={readOnly}
    >
      <Icon color={theme.palette.primary.green} icon={icon} size="3xs" />
      {isTooltipVisible && <Tooltip content={getTooltipContent(icon)} isWithDelay={isWithDelay} />}
    </StyledShowCardButton>
  );
};

export { ShowCardButton };
