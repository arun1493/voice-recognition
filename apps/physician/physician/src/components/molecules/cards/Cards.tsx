import _keys from "lodash/keys";
import _head from "lodash/head";
import _compact from "lodash/compact";
import _isEmpty from "lodash/isEmpty";
import _findIndex from "lodash/findIndex";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FunctionComponent, useEffect, useState } from "react";
import { EMPTY_ARRAY, EMPTY_OBJECT, Paths } from "@suki-web/suki-business";
import { ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import { CardsByType } from "../../../types";
import { cardReader } from "../../../readers";
import { StyledCardContent, StyledCardWrapper } from "./cards.styled";
import { CardType, EMPTY_STRING, SCROLL_TOP } from "../../../constants";
import { CardHeader, CardMedication, CardParagraph, CardTable } from "./components";
import { formatParagraphCardData, getCardTitle, getErrorMessage } from "./helpers";
import { StyledEmptyContainer } from "./components/cardParagraph/cardParagraph.styled";
import { noteActions, selectCardTypes, selectCurrentCardType } from "../../../redux/note";

interface CardsProps {
  cardsByType: CardsByType;
  isCardsVisible: boolean;
  onBack?: () => void;
}

const Cards: FunctionComponent<CardsProps> = ({ cardsByType, isCardsVisible, onBack }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [hasBorder, setHasBorder] = useState(false);
  const cardTypes = useSelector(selectCardTypes);
  const currentCardType = useSelector(selectCurrentCardType) as string;

  const currentCard = cardsByType?.[currentCardType]?.[0] || EMPTY_OBJECT;
  const { type, jsonContent, content } = currentCard;
  const cardTitle = getCardTitle(type);

  const totalCardTypes = cardTypes?.length;
  const currentCardTypeIndex = _findIndex(cardTypes, (cardType) => cardType === currentCardType);
  const isLeftNavigationDisabled = currentCardTypeIndex === 0;
  const isRightNavigationDisabled = currentCardTypeIndex === totalCardTypes - 1;

  const { XXS } = ScreenSize;
  const isMobile = useBreakpointIncludes(XXS);
  const isNotePage = location.pathname.includes(Paths.Note);

  const getNonEmptyCardTypes = (cardsByType: CardsByType) => {
    const cardTypes = _keys(cardsByType);
    return _compact(cardTypes);
  };

  useEffect(() => {
    if (_isEmpty(currentCardType) && !_isEmpty(cardTypes)) {
      const firstCardType = _head(cardTypes);
      dispatch(noteActions.setCurrentCardType(firstCardType));
    }
  }, [cardTypes, currentCardType]);

  useEffect(() => {
    const nonEmptyCardTypes = getNonEmptyCardTypes(cardsByType);
    dispatch(noteActions.setCardTypes(nonEmptyCardTypes));
  }, [cardsByType]);

  const renderCardContent = () => {
    let cardContent;
    try {
      cardContent = JSON.parse(jsonContent as string);
    } catch (error) {
      cardContent = EMPTY_ARRAY;
    }
    const cardSmallScreenTitle = (isMobile && cardTitle) || EMPTY_STRING;

    if ((_isEmpty(cardContent) && type !== CardType.VITALS) || (_isEmpty(content) && type === CardType.VITALS)) {
      return (
        <StyledEmptyContainer>
          <Text size="lg">{getErrorMessage(currentCardType)}</Text>
        </StyledEmptyContainer>
      );
    }

    switch (type) {
      case CardType.ALLERGIES:
        return (
          <CardParagraph
            cardTitle={cardSmallScreenTitle}
            data={formatParagraphCardData(cardContent, CardType.ALLERGIES)}
          />
        );
      case CardType.CURRENT_MEDICATION:
        return <CardMedication cardTitle={cardSmallScreenTitle} data={cardContent} />;
      case CardType.PAST_MEDICAL_HISTORY:
      case CardType.PAST_MEDICAL_HISTORY_SHOW_ME:
        return (
          <CardParagraph
            cardTitle={cardSmallScreenTitle}
            data={formatParagraphCardData(cardContent, CardType.PAST_MEDICAL_HISTORY)}
          />
        );
      case CardType.PAST_SURGICAL_HISTORY:
      case CardType.PAST_SURGICAL_HISTORY_SHOW_ME:
        return (
          <CardParagraph
            cardTitle={cardSmallScreenTitle}
            data={formatParagraphCardData(cardContent, CardType.PAST_SURGICAL_HISTORY)}
          />
        );
      case CardType.VITALS:
        return <CardTable cardTitle={cardSmallScreenTitle} data={content} />;
      default:
        return null;
    }
  };

  const handleNavigation = (direction: "left" | "right") => {
    const nextCardTypeIndex = direction === "left" ? currentCardTypeIndex - 1 : currentCardTypeIndex + 1;
    dispatch(noteActions.setCurrentCardType(cardTypes[nextCardTypeIndex]));
  };

  const onScroll = (e: React.UIEvent<HTMLDivElement>) =>
    setHasBorder((e.target as HTMLDivElement).scrollTop > SCROLL_TOP);

  return (
    <StyledCardWrapper isCardsVisible={isCardsVisible} isNotePage={isNotePage} onScroll={onScroll}>
      <CardHeader
        handleNavigation={handleNavigation}
        hasBorder={hasBorder}
        isCardsVisible={isCardsVisible}
        isLeftNavigationDisabled={isLeftNavigationDisabled}
        isRightNavigationDisabled={isRightNavigationDisabled}
        onBack={onBack}
        title={cardTitle}
      />
      <StyledCardContent>{renderCardContent()}</StyledCardContent>
    </StyledCardWrapper>
  );
};

export { Cards, CardsProps };
