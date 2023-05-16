import "styled-components";

import { ITheme } from "@src/types/theme.types";

declare module "styled-components" {
  /* eslint-disable */
  export interface DefaultTheme extends ITheme {}
}
