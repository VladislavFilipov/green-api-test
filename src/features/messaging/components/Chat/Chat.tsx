import { FC } from "react";

import Head from "@src/features/messaging/components/Chat/Head/Head";
import Input from "@src/features/messaging/components/Chat/Input/Input";
import MessagesList from "@src/features/messaging/components/Chat/MessagesList/MessagesList";
import useChatsStore from "@src/features/messaging/store/useChatsStore";

import * as S from "./Chat.styled";

const Chat: FC = () => {
  const chat = useChatsStore(s => s.current);

  return (
    <S.Container>
      {chat && (
        <>
          <Head chat={chat} />
          <MessagesList chat={chat} />
          <Input chat={chat} />
        </>
      )}
    </S.Container>
  );
};

export default Chat;
