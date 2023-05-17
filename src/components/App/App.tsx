import { FC } from "react";

import { ThemeProvider } from "styled-components";
import { setLocale } from "yup";

import useAccountStore from "@src/features/account/store/useAccountStore";
import Login from "@src/pages/Login/Login";
import Main from "@src/pages/Main/Main";
import GlobalStyles from "@src/styles/global";
import { darkTheme } from "@src/styles/theme";

import * as S from "./App.styled";

setLocale({
  mixed: { required: "Поле обязательно для заполнения" }
});

const App: FC = () => {
  const accountSettings = useAccountStore(s => s.accountSettings);
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <S.App>{accountSettings ? <Main /> : <Login />}</S.App>
    </ThemeProvider>
  );
};

export default App;
