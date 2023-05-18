import i18n from "i18next";

import { MenuItem } from "../types";

const getMenuItems = ({ isDeleteDisabled, onDelete, onPrint }: any): MenuItem[] => {
  return [
    {
      icon: "print",
      label: i18n.t("components.noteMenu.options.print"),
      onClick: onPrint
    },
    {
      disabled: isDeleteDisabled,
      icon: "trash",
      label: i18n.t("components.noteMenu.options.delete"),
      onClick: onDelete
    }
  ];
};

export { getMenuItems };
