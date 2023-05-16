import { ITheme } from "@src/types/theme.types";

export const darkTheme: ITheme = {
  mode: "dark",
  palette: {
    primary: {
      main: "#005C4BFF"
    },
    secondary: {
      main: ""
    },
    bg: {
      dark: "#111B21FF",
      main: "#202C33FF",
      light: "#2a3942"
    },
    text: {
      main: "white",
      dark: "#8696a0"
    },
    success: {
      main: "green"
    },
    warning: {
      main: "yellow"
    },
    error: {
      main: "red"
    },
    msgStatus: {
      main: "#53bdeb"
    }
  }
};
