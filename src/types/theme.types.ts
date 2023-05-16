export interface IThemeColor {
  main: string;
  light?: string;
  dark?: string;
}

export interface ITheme {
  mode: "dark" | "light";
  palette: {
    primary: IThemeColor;
    secondary: IThemeColor;
    bg: IThemeColor;
    text: IThemeColor;
    success: IThemeColor;
    warning: IThemeColor;
    error: IThemeColor;
    msgStatus: IThemeColor;
  };
}
