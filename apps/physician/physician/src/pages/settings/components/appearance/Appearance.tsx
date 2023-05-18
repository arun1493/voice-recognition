import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card, CardHeader, getTooltipContent, IconButton, Page } from "@suki-web/suki-ui";

import { ThemePicker } from "./";
import { StyledAppearanceContainer } from "./appearance.styled";

const Appearance: FunctionComponent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onBack = () => navigate(-1);

  return (
    <Page>
      <Card size="sm">
        <CardHeader
          actionSecondary={
            <IconButton
              icon="arrowLeft"
              onClick={onBack}
              testId="header-back-button"
              tooltip={getTooltipContent("back")}
            />
          }
          title={t("pages.settings.appearance.title")}
        />
        <StyledAppearanceContainer>
          <ThemePicker />
        </StyledAppearanceContainer>
      </Card>
    </Page>
  );
};

export { Appearance };

export default Appearance;
