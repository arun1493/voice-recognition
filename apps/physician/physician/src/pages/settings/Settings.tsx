import store from "store2";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FunctionComponent, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { BillingSessionPayload, Paths } from "@suki-web/suki-business";
import { Card, CardHeader, Page, SukiList, SukiListItem } from "@suki-web/suki-ui";

import { createBillingSession } from "../../api";
import { modalsActions } from "../../redux/modals";
import { selectUserDetails } from "../../redux/user";
import { StyledCardContent } from "./settings.styled";
import { PAGES, SukiAgentState } from "../../constants";
import { checkoutSessionReader, userReader } from "../../readers";
import { selectIsSukiXOrganization } from "../../redux/organization";
import { agentActions, selectIsAgentActive } from "../../redux/agent";

const Settings: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector(selectUserDetails);
  const isSukiXOrganization = useSelector(selectIsSukiXOrganization);
  const isAgentActive = useSelector(selectIsAgentActive);

  const email = userReader.email(userDetails);

  const handleTabChange = (redirectTo: Paths) => {
    navigate(redirectTo);
  };

  useEffect(() => {
    dispatch(modalsActions.hideWhatCanISayModal());
  }, []);

  const handleNavigateToBilling = async () => {
    // Create billing session and redirect the user to billing url
    const billingSessionPayload: BillingSessionPayload = {
      email
    };
    const { session } = await createBillingSession(billingSessionPayload);
    const sessionUrl = checkoutSessionReader.url(session);
    window.open(sessionUrl, "_blank");
  };

  return (
    <Page>
      <Card size="sm">
        <CardHeader hasBorder={true} title={t("pages.settings.title")} />
        <StyledCardContent>
          <SukiList>
            <SukiListItem
              hasBottomBorder={true}
              isTitleBold={true}
              onClick={() => handleTabChange(Paths.Scripts)}
              rightIcon="caretRight"
              title={PAGES.SCRIPTS}
              variant="simple"
              wrapText={true}
            />
            <SukiListItem
              hasBottomBorder={true}
              isTitleBold={true}
              onClick={() => handleTabChange(Paths.NoteTypes)}
              rightIcon="caretRight"
              title={PAGES.NOTE_TYPE}
              variant="simple"
              wrapText={true}
            />
            {isSukiXOrganization && (
              <SukiListItem
                hasBottomBorder={true}
                isTitleBold={true}
                onClick={handleNavigateToBilling}
                rightIcon="caretRight"
                title={PAGES.BILLING}
                variant="simple"
                wrapText={true}
              />
            )}
            {store.get("showAppearanceSetting") && (
              <SukiListItem
                hasBottomBorder={true}
                isTitleBold={true}
                onClick={() => handleTabChange(Paths.Appearance)}
                rightIcon="caretRight"
                title={t("pages.settings.appearance.title")}
                variant="simple"
                wrapText={true}
              />
            )}
          </SukiList>
        </StyledCardContent>
      </Card>
    </Page>
  );
};

export { Settings };

export default Settings;
