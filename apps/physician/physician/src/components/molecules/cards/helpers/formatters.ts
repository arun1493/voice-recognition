import i18n from "i18next";
import _get from "lodash/get";
import { EMPTY_OBJECT } from "@suki-web/suki-business";

import {
  Allergy,
  AllergyReaction,
  CardMedicalHistoryProps,
  CardSurgicalHistoryProps,
  ParagraphCard,
  Problem
} from "../../../../types";
import { CardType } from "../../../../constants";

const formatParagraphCardData = (data: CardMedicalHistoryProps | CardSurgicalHistoryProps | any, cardType: string) => {
  const paragraphData: Array<ParagraphCard> = [];

  switch (cardType) {
    case CardType.ALLERGIES: {
      const { allergies, nkda } = data || EMPTY_OBJECT;

      allergies &&
        allergies.forEach((allergyItem: Allergy) => {
          const { allergen_name, reactions } = allergyItem || EMPTY_OBJECT;
          let allergyReactionContent = "";
          reactions &&
            reactions.forEach((allergyItem: AllergyReaction) => {
              const { reaction_name } = allergyItem;
              if (reaction_name) allergyReactionContent = allergyReactionContent.concat(reaction_name, ", ");
            });

          allergyReactionContent = allergyReactionContent.slice(0, -2); // to remove comma at the end of string

          if (allergen_name)
            paragraphData.push({
              title: allergen_name,
              content: allergyReactionContent
            });
        });

      if (nkda)
        paragraphData.push({
          content: i18n.t("pages.note.cards.errors.allergiesNkda")
        });
      break;
    }
    case CardType.PAST_MEDICAL_HISTORY: {
      const { active_problems } = data || EMPTY_OBJECT;
      active_problems &&
        active_problems.forEach((activeProblem: Problem) => {
          const description = _get(activeProblem, "note");
          const error = _get(activeProblem, "error");
          const title = _get(activeProblem, "diagnosis.icd_description");
          if (!error) paragraphData.push({ title, content: description });
        });
      break;
    }

    case CardType.PAST_SURGICAL_HISTORY: {
      data &&
        data.forEach((surgicalHistoryItem: Problem) => {
          const { description, note, error } = surgicalHistoryItem;
          if (!error) paragraphData.push({ title: description, content: note });
        });
      break;
    }

    default:
      break;
  }
  return paragraphData;
};

export { formatParagraphCardData };
