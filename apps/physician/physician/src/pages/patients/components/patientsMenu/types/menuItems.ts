import React from "react";
import { IconType } from "@suki-web/suki-ui";

type MenuItem = {
  disabled?: boolean;
  icon: IconType;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export { MenuItem };
