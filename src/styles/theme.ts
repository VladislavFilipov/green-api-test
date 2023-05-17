import { ITheme } from "@src/types/theme.types";

export const darkTheme: ITheme = {
  mode: "dark",
  palette: {
    primary: {
      main: "#005C4BFF",
      dark: "#025344",
      light: "#006d59"
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
      main: "green",
      light: "#9efc95"
    },
    warning: {
      main: "yellow",
      light: "#fcfb95"
    },
    error: {
      main: "red",
      light: "#fc9595"
    },
    msgStatus: {
      main: "#53bdeb"
    },
    iconColor: {
      main: "#8696a0"
    }
  }
};
