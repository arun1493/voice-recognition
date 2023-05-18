import { TypographyVariantType } from "../typography";

type typographyThemeType = {
  fontSize: Record<TypographyVariantType, number | string>;
  lineHeight: Record<TypographyVariantType, number | string>;
  unit: string;
};

const typography: typographyThemeType = {
  fontSize: {
    h1: 40,
    h2: 32,
    h3: 28,
    h4: 24,
    h5: 20,
    h6: 18,
    subtitle1: 20,
    subtitle2: 18,
    body1: 16,
    body2: 14,
    caption: 12
  },
  // lineHeights are set to about 150% of font size (industry standard)
  lineHeight: {
    h1: 60,
    h2: 48,
    h3: 42,
    h4: 36,
    h5: 32,
    h6: 28,
    subtitle1: 28,
    subtitle2: 24,
    body1: 24,
    body2: 20,
    caption: 18
  },
  unit: "px"
};

export { typography, typographyThemeType };

export default typography;
