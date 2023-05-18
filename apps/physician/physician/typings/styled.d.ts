/* eslint-disable @typescript-eslint/no-empty-interface */
// styled.d.ts
import "styled-components";

import { ThemeProvider } from "@suki-web/suki-ui";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeProvider {}
}
