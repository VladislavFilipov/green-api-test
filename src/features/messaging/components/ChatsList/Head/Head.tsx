import { FC } from "react";

import { ReactComponent as LogoutSVG } from "@src/assets/img/icons/logout.svg";
import IconButton from "@src/components/IconButton/IconButton";
import { useAccountStore } from "@src/features/account";

import * as S from "./Head.styled";

const Head: FC = () => {
  const logout = useAccountStore(s => s.logout);
  return (
    <S.Container>
      <IconButton
        onClick={() => {
          console.log(11111111);

          logout();
        }}
        title="Выйти из аккаунта"
      >
        <LogoutSVG />
      </IconButton>
    </S.Container>
  );
};

export default Head;
