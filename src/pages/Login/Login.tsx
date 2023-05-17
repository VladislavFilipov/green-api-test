import { FC } from "react";

import { LoginForm } from "@src/features/account";

import * as S from "./Login.styled";

const Login: FC = () => {
  return (
    <S.Container>
      <LoginForm />
    </S.Container>
  );
};

export default Login;
