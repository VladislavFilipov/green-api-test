// styled.d.ts
import "styled-components";

import { ITheme } from "@src/types/theme.types";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
