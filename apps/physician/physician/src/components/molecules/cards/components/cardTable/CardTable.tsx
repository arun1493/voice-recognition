import { FunctionComponent } from "react";
import { ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import { getVitalSign } from "../../helpers";
import { StyledCardTitle } from "../сardHeader/cardHeader.styled";
import { CardTable as CardTableType } from "../../../../../types";
import { StyledCell, StyledRow, StyledTable, StyledTableWrapper, StyledTBody } from "./cardTable.styled";

interface CardTableProps {
  cardTitle?: string;
  data: Array<CardTableType>;
}

const CardTable: FunctionComponent<CardTableProps> = ({ cardTitle, data }) => {
  const { MD, LG, XL } = ScreenSize;
  const isLargeScreen = useBreakpointIncludes(MD, LG, XL);
  const textSize = isLargeScreen ? "lg" : "md";
  return (
    <>
      {cardTitle && (
        <StyledCardTitle>
          <Text isBold={true} size="lg">
            {cardTitle}
          </Text>
        </StyledCardTitle>
      )}
      <StyledTableWrapper>
        <StyledTable>
          <StyledTBody>
            {data.map((item: CardTableType) => (
              <StyledRow key={item.name}>
                <StyledCell>
                  <Text isBold={true} size={textSize}>
                    {getVitalSign(item.name)}
                  </Text>
                </StyledCell>
                <StyledCell>
                  <Text size={textSize}>{item.value}</Text>
                </StyledCell>
              </StyledRow>
            ))}
          </StyledTBody>
        </StyledTable>
      </StyledTableWrapper>
    </>
  );
};

export { CardTable };

export default CardTable;
