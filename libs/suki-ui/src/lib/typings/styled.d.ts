/* eslint-disable @typescript-eslint/no-empty-interface */
// styled.d.ts
import "styled-components";

import { ThemeProvider } from "../theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeProvider {}
}
