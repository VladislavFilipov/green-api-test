import { FC } from "react";

import { Chat, ChatsList } from "@src/features/messaging";
import useReceiveNotification from "@src/features/messaging/queries/useReceiveNotification";

import * as S from "./Main.styled";

const Main: FC = () => {
  useReceiveNotification();

  return (
    <S.Container>
      <ChatsList />
      <Chat />
    </S.Container>
  );
};

export default Main;
