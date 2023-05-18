import { Text } from "@suki-web/suki-ui";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import { StyledServiceStatus, StyledServiceStatusText } from "./serviceStatus.styled";

enum ServiceStatusType {
  OK,
  DEGRADED,
  PARTIAL_OUTAGE,
  MAJOR_OUTAGE,
  MAINTENANCE
}

interface ServiceStatusProps {
  status: ServiceStatusType;
}

const ServiceStatus: FunctionComponent<ServiceStatusProps> = ({ status }) => {
  const { t } = useTranslation();

  return (
    <StyledServiceStatus>
      <Text isBold={true} size="sm">
        {t("pages.help.serviceStatus.label")}
      </Text>
      <StyledServiceStatusText status={status}>
        {/* Empty span for status color */}
        <span></span>
        <Text size="sm">{t("pages.help.serviceStatus.status.OK")}</Text>
      </StyledServiceStatusText>
    </StyledServiceStatus>
  );
};

export { ServiceStatus, ServiceStatusProps, ServiceStatusType };

export default ServiceStatus;
