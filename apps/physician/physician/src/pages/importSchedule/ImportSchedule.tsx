import _get from "lodash/get";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FunctionComponent, useEffect } from "react";
import { Card, CardHeader, IconButton, Page } from "@suki-web/suki-ui";

import DropDown from "./DropDown";
import DropZone from "./DropZone";
import { agentActions } from "../../redux/agent";
import { StyledImportScheduleContainer } from "./importSchedule.styled";

const ImportSchedule: FunctionComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClose = () => navigate(-1);

  useEffect(() => {
    dispatch(agentActions.setBottom());
  }, []);

  return (
    <Page data-cy="import-schedule-page">
      <Card size="lg">
        <CardHeader
          actionPrimary={<IconButton icon="close" onClick={handleClose} testId="header-close-button" />}
          hasBorder={true}
          isSticky={true}
          title={t("pages.import.title")}
        />
        <StyledImportScheduleContainer>
          <DropZone />
          <DropDown />
        </StyledImportScheduleContainer>
      </Card>
    </Page>
  );
};

export default ImportSchedule;

export { ImportSchedule };
