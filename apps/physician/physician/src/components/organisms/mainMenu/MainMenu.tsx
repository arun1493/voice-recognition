import _get from "lodash/get";
import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Paths } from "@suki-web/suki-business";
import { SukiIconType, SukiList, SukiListItem } from "@suki-web/suki-ui";

import { UnfinishedNotesBadge } from "../../atoms";
import { selectUserDetails } from "../../../redux/user";
import { getDoctorFullName, logOut } from "../../../helpers";
import { StyledDoctorFullName, StyledMainMenuContainer, StyledSeparator } from "./mainMenu.styled";

interface MainMenuProps {
  isOpen: boolean;
  onClose: () => void;
  unfinishedNotesCount: number;
}

interface MenuOptions {
  icon: SukiIconType;
  label: string;
  path: Paths;
}

const MainMenu: FunctionComponent<MainMenuProps> = ({ isOpen, onClose, unfinishedNotesCount }) => {
  const { t } = useTranslation();
  const userDetails = useSelector(selectUserDetails);

  const menuOptions: MenuOptions[] = [
    {
      icon: "noteUnfinished",
      label: t("components.hamburgerMenu.options.unfinishedNotes"),
      path: Paths.UnfinishedNotes
    },
    {
      icon: "settings",
      label: t("components.hamburgerMenu.options.settings"),
      path: Paths.Settings
    },
    {
      icon: "help",
      label: t("components.hamburgerMenu.options.help"),
      path: Paths.Help
    },
    {
      icon: "logout",
      label: t("components.hamburgerMenu.options.logOut"),
      path: Paths.Settings
    }
  ];

  if (!isOpen) {
    return null;
  }

  const SukiMainMenuListItem = ({ menuOption, index }: { menuOption: MenuOptions; index: number }) => {
    const { icon, label, path } = menuOption;

    switch (icon) {
      case "noteUnfinished":
        return (
          <Link data-cy={`main-menu-item-${index}`} key={`main-menu-item-${index}`} onClick={onClose} to={path}>
            <SukiListItem
              isTitleBold={true}
              leftIcon={icon}
              rightIcon={<UnfinishedNotesBadge unfinishedNotesCount={unfinishedNotesCount} />}
              title={label}
              variant="small"
            />
          </Link>
        );
      case "settings":
        return (
          <Link data-cy={`main-menu-item-${index}`} key={`main-menu-item-${index}`} onClick={onClose} to={path}>
            <SukiListItem isTitleBold={true} leftIcon={icon} title={label} variant="small" />
          </Link>
        );
      case "help":
        return (
          <Link data-cy={`main-menu-item-${index}`} key={`main-menu-item-${index}`} onClick={onClose} to={path}>
            <SukiListItem isTitleBold={true} leftIcon={icon} title={label} variant="small" />
          </Link>
        );
      case "logout":
        return (
          <SukiListItem
            data-cy={`main-menu-item-${index}`}
            isTitleBold={true}
            key={`main-menu-item-${index}`}
            leftIcon="logout"
            onClick={logOut}
            title={t("components.hamburgerMenu.options.logOut")}
            variant="small"
          />
        );
      default:
        return null;
    }
  };

  return (
    <SukiList testId="main-menu">
      <StyledMainMenuContainer key="styled-main-menu-container">
        {userDetails && (
          <StyledDoctorFullName isTitleBold={true} title={getDoctorFullName(userDetails)} variant="title" />
        )}
        {userDetails && <StyledSeparator />}
        {menuOptions.map((menuOption, index) => {
          return <SukiMainMenuListItem index={index} key={index} menuOption={menuOption} />;
        })}
      </StyledMainMenuContainer>
    </SukiList>
  );
};

export { MainMenu };
