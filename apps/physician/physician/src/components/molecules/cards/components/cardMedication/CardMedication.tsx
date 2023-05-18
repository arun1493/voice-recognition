import { useTranslation } from "react-i18next";
import { FunctionComponent, useState } from "react";
import { ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  StyledButton,
  StyledCardItem,
  StyledCardMedication,
  StyledDescription,
  StyledName
} from "./cardMedication.styled";
import { StyledCardTitle } from "../сardHeader/cardHeader.styled";

interface MedicationProps {
  description?: string;
  medication_name: string;
  start_date: string;
}

interface CardMedicationProps {
  cardTitle?: string;
  data: Array<MedicationProps>;
}

const CardMedicationItem: FunctionComponent<MedicationProps> = ({ description, medication_name }) => {
  const { t } = useTranslation();
  const [isDescriptionOpened, setIsDescriptionOpened] = useState(false);
  const toggleDescription = () => setIsDescriptionOpened(!isDescriptionOpened);

  const { LG, XL, MD } = ScreenSize;
  const isLarge = useBreakpointIncludes(LG, XL, MD);
  const textSize = isLarge ? "md" : "sm";
  const titleSize = isLarge ? "lg" : "md";

  const isDescriptionVisible = isDescriptionOpened && description;

  const name = medication_name?.split(" ");
  return (
    <>
      <StyledCardItem>
        <StyledName>
          <Text size={titleSize}>
            <span>
              <strong>{name?.[0]} </strong>
              {name?.slice(1)?.join(" ")}
            </span>
          </Text>
        </StyledName>
        {description && !isDescriptionVisible && (
          <StyledButton onClick={toggleDescription}>
            <Text color="inherit" cursor="pointer" size={textSize}>
              {t("pages.note.cards.medications.moreButton")}
            </Text>
          </StyledButton>
        )}
      </StyledCardItem>
      <StyledDescription>
        {isDescriptionVisible && (
          <Text color="inherit" size={textSize}>
            {description}
          </Text>
        )}
      </StyledDescription>
    </>
  );
};

const CardMedication: FunctionComponent<CardMedicationProps> = ({ cardTitle, data }) => {
  return (
    <>
      {cardTitle && (
        <StyledCardTitle>
          <Text isBold={true} size="lg">
            {cardTitle}
          </Text>
        </StyledCardTitle>
      )}

      <StyledCardMedication>
        {data.map((item: MedicationProps) => (
          <CardMedicationItem key={item.medication_name} {...item} />
        ))}
      </StyledCardMedication>
    </>
  );
};

export { CardMedication };

export default CardMedication;
