import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import App from "@src/components/App/App";
import GlobalStyles from "@src/styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={{ text: "blue" }}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
