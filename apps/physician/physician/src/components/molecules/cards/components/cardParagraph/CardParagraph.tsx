import _map from "lodash/map";
import { Text } from "@suki-web/suki-ui";
import { FunctionComponent } from "react";

import { StyledCardTitle } from "../сardHeader/cardHeader.styled";
import { StyledParagraph, StyledParagraphContainer, StyledTitle } from "./cardParagraph.styled";
import { CardMedicalHistoryProps, CardSurgicalHistoryProps, ParagraphCard } from "../../../../../types";

type CardParagraphProps = {
  cardTitle?: string;
  data: CardMedicalHistoryProps | CardSurgicalHistoryProps | any;
};

const CardParagraph: FunctionComponent<CardParagraphProps> = ({ cardTitle, data }) => (
  <>
    {cardTitle && (
      <StyledCardTitle>
        <Text isBold={true} size="lg">
          {cardTitle}
        </Text>
      </StyledCardTitle>
    )}
    <StyledParagraphContainer>
      {_map(data, (item: ParagraphCard, index: number) => {
        const { content, title } = item;
        return (
          <StyledParagraph key={`${content}_${title}_${index}`}>
            {title && (
              <StyledTitle>
                <Text isBold={true} size="md">
                  {title}
                </Text>
              </StyledTitle>
            )}
            {content && <Text size="md">{content}</Text>}
          </StyledParagraph>
        );
      })}
    </StyledParagraphContainer>
  </>
);

export { CardParagraph };

export default CardParagraph;
