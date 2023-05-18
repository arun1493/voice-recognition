import store from "store2";
import { FunctionComponent } from "react";
import { Icon, Text } from "@suki-web/suki-ui";
import { useTranslation } from "react-i18next";

import { LOCAL_STORE } from "../../../constants";
import { StyledFlexStart, StyledHeader, StyledInsertButton, StyledRejectButton, StyledSuggestionContainer, StyledTitle } from "./suggestion.styled";

interface SuggestionProps {
  name?: string;
}

const Suggestion: FunctionComponent<SuggestionProps> = ({ name = "" }) => {
  const { t } = useTranslation();

  const currentUserId = store.get(LOCAL_STORE.USER_ID);

  const onInsertSuggestion = () => {

  }

  const onRejectSuggestion = () => {

  }

  return (
    <StyledSuggestionContainer>
      <StyledHeader>
        <StyledFlexStart>
          <Icon height="16" icon="ambient" width="14"></Icon>
          <StyledTitle size="sm">{t("components.suggestion.title")}</StyledTitle>
        </StyledFlexStart>
        <StyledInsertButton data-cy="select-suggestion" isSmall={true} onClick={onInsertSuggestion}><Text isBold size="xs">{t("components.suggestion.insert")}</Text></StyledInsertButton>
      </StyledHeader>
      <Text data-cy="section-suggestion-text" size="md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <StyledRejectButton onClick={onRejectSuggestion}>
        <Icon icon="close" />
      </StyledRejectButton>
    </StyledSuggestionContainer>
  );
};

export { Suggestion, SuggestionProps };

export default Suggestion;
