import { FC } from "react";

import { Chat, ChatsList } from "@src/features/messaging";
import useReceiveNotification from "@src/features/messaging/queries/useReceiveNotification";
import useChatsStore from "@src/features/messaging/store/useChatsStore";

import * as S from "./Main.styled";

const Main: FC = () => {
  const cureentDialog = useChatsStore(s => s.current);
  // useReceiveNotification();

  return (
    <S.Container>
      <ChatsList />
      {cureentDialog && <Chat />}
    </S.Container>
  );
};

export default Main;
