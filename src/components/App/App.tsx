import { FC } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import useAccountStore from "@src/features/account/hooks/useAccountStore";
import Login from "@src/pages/Login/Login";
import Main from "@src/pages/Main/Main";
import GlobalStyles from "@src/styles/global";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
});

const App: FC = () => {
  const accountSettings = useAccountStore(s => s.accountSettings);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ text: "blue" }}>
        <GlobalStyles />
        {accountSettings ? <Main /> : <Login />}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
