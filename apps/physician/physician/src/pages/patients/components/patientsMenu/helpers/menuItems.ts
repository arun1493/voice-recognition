import i18n from "i18next";
import { IconType } from "@suki-web/suki-ui";
import { EMPTY_ARRAY } from "@suki-web/suki-business";

import { MenuItem } from "../types";

const getMenuItems = ({
  isEmrUser = false,
  isScheduleTabActive,
  onHelp,
  onImportSchedule,
  onPrint,
  patientsNotesIds,
  scheduleCompositionIds
}: any): MenuItem[] => {
  const isPrintEnabled = isScheduleTabActive ? scheduleCompositionIds?.length > 0 : patientsNotesIds?.length > 0;
  return [
    {
      icon: "print",
      disabled: !isPrintEnabled,
      label: i18n.t("components.patientsMenu.options.print"),
      onClick: onPrint
    },
    ...(isEmrUser
      ? EMPTY_ARRAY
      : [
          {
            icon: "uploadLight" as IconType,
            label: i18n.t("components.patientsMenu.options.import"),
            onClick: onImportSchedule
          }
        ]),
    {
      icon: "help",
      label: i18n.t("components.patientsMenu.options.help"),
      onClick: onHelp
    }
  ];
};

export { getMenuItems };
