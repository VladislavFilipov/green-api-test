import { createGlobalStyle } from "styled-components";

import Bold from "@src/assets/fonts/Roboto-Bold.ttf";
import Medium from "@src/assets/fonts/Roboto-Medium.ttf";
import Regular from "@src/assets/fonts/Roboto-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(.${Regular}) format("truetype"),
    url(.${Medium}) format("truetype"),
    url(.${Bold}) format("truetype");
  }

  :root {
    font-family: Roboto, sans-serif;
    
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root{
    margin: 0 auto;
  }
`;

export default GlobalStyles;
