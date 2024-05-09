import "styled-components/native";

import themeLight from "..src/themeLight";

declare module "styled-components" {
  type ThemeType = typeof themeLight

  export interface DefaultTheme extends ThemeType {}
}