import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { Theme } from "../../../../constants";
import { StyledThemeItem } from "./appearance.styled";
import autoThemeThumbnail from "./assets/theme-auto-thumb-sm.png";
import darkThemeThumbnail from "./assets/theme-dark-thumb-sm.png";
import lightThemeThumbnail from "./assets/theme-light-thumb-sm.png";
import { selectTheme, settingsActions } from "../../../../redux/settings";

interface ThemePickerItemProps {
  type: Theme;
}

const ThemePickerItem: FunctionComponent<ThemePickerItemProps> = ({ type }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const thumbnail = {
    [Theme.AUTO]: autoThemeThumbnail,
    [Theme.DARK]: darkThemeThumbnail,
    [Theme.LIGHT]: lightThemeThumbnail
  }[type];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(settingsActions.set(event.currentTarget.value));

  return (
    <StyledThemeItem>
      <input checked={theme === type} name="theme" onChange={handleChange} type="radio" value={type} />
      <img alt="" src={thumbnail} />
      <div className="theme-label">{t(`pages.settings.appearance.theme.${type}`)}</div>
    </StyledThemeItem>
  );
};

export { ThemePickerItem };

export default ThemePickerItem;
