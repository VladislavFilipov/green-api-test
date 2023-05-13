import { FC } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@src/styles/global";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ text: "blue" }}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
