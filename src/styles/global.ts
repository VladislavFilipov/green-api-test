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

  input, button {
    appearance: none;
    border: none;
    outline: none;
  }

  textarea {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    &::placeholder {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  }

   

  &::-webkit-scrollbar {
    width: 7px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #d3d3d335;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d3d3d351;
  }
      
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyles;
