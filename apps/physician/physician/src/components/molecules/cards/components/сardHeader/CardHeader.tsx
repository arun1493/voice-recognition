import _noop from "lodash/noop";
import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationIcon, ScreenSize, Text, lightTheme as theme, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  StyledBackButton,
  StyledCardHeader,
  StyledCardNavigationButtons,
  StyledCardTitle,
  StyledIcon
} from "./cardHeader.styled";
import { selectIsWithDelay, tooltipActions } from "../../../../../redux/tooltip";

type CardHeaderType = {
  handleNavigation: (direction: "left" | "right") => void;
  hasBorder?: boolean;
  isCardsVisible: boolean;
  isLeftNavigationDisabled?: boolean;
  isRightNavigationDisabled?: boolean;
  onBack?: () => void;
  title: string;
};

const CardHeader: FunctionComponent<CardHeaderType> = ({
  handleNavigation,
  hasBorder = false,
  isCardsVisible,
  isLeftNavigationDisabled = true,
  isRightNavigationDisabled = true,
  onBack = _noop,
  title
}) => {
  const { XXS, MD, LG, XL } = ScreenSize;
  const isLargeScreen = useBreakpointIncludes(MD, LG, XL);
  const size = isLargeScreen ? "xl" : "lg";
  const dispatch = useDispatch();
  const isWithDelay = useSelector(selectIsWithDelay);

  useEffect(() => {
    dispatch(tooltipActions.setIsWithDelay(true));
  }, []);

  const onMouseLeave = () => {
    dispatch(tooltipActions.setIsWithDelay(true));
  };

  const resetTooltip = () => {
    dispatch(tooltipActions.setIsWithDelay(false));
  };

  const isMobile = useBreakpointIncludes(XXS);

  return (
    <StyledCardHeader hasBottomBorder={hasBorder || isMobile} isCardsVisible={isCardsVisible}>
      {isMobile && (
        <StyledBackButton isCardsVisible={isCardsVisible}>
          <NavigationIcon icon="back" onClick={onBack} size="2xs" />
        </StyledBackButton>
      )}
      {!isMobile && (
        <StyledCardTitle>
          <Text isBold={true} size={size}>
            {title}
          </Text>
        </StyledCardTitle>
      )}

      <StyledCardNavigationButtons onMouseLeave={onMouseLeave}>
        <StyledIcon shouldRotate={true}>
          <NavigationIcon
            color={theme.pages.note.card.arrowIcon}
            icon="listArrowReverse"
            isDisabled={isLeftNavigationDisabled}
            isWithDelay={isWithDelay}
            onClick={() => handleNavigation("left")}
            resetTooltip={resetTooltip}
            size="3xs"
          />
        </StyledIcon>
        <StyledIcon>
          <NavigationIcon
            color={theme.pages.note.card.arrowIcon}
            icon="listArrow"
            isDisabled={isRightNavigationDisabled}
            isWithDelay={isWithDelay}
            onClick={() => handleNavigation("right")}
            resetTooltip={resetTooltip}
            size="3xs"
          />
        </StyledIcon>
      </StyledCardNavigationButtons>
    </StyledCardHeader>
  );
};

export { CardHeader };

export default CardHeader;
