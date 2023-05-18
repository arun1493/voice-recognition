import { FunctionComponent } from "react";

import { ThemePickerItem } from "./";
import { Theme } from "../../../../constants";
import { StyledThemePicker } from "./appearance.styled";

const ThemePicker: FunctionComponent = () => {
  return (
    <StyledThemePicker>
      <ThemePickerItem type={Theme.LIGHT} />
      <ThemePickerItem type={Theme.DARK} />
      <ThemePickerItem type={Theme.AUTO} />
    </StyledThemePicker>
  );
};

export { ThemePicker };

export default ThemePicker;
