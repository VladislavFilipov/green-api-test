export interface IThemeColor {
  main: string;
  light?: string;
  dark?: string;
}

export interface IThemePalette {
  primary: IThemeColor;
  bg: IThemeColor;
  text: IThemeColor;
  success: IThemeColor;
  warning: IThemeColor;
  error: IThemeColor;
  msgStatus: IThemeColor;
  iconColor: IThemeColor;
}

export interface ITheme {
  mode: "dark" | "light";
  palette: IThemePalette;
}
