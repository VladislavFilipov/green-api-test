import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
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

  ul, ol, li {
    list-style: none;
  }

  input {
    appearance: none;
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
