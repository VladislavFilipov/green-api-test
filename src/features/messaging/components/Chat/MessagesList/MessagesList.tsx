import { FC, useEffect, useRef } from "react";

import Message from "@src/features/messaging/components/Chat/Message/Message";
import { IChat } from "@src/types/chat.types";

import * as S from "./MessagesList.styled";

const MessagesList: FC<{ chat: IChat }> = ({ chat }) => {
  const listRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (listRef.current)
      listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [chat]);

  return (
    <S.Container ref={listRef}>
      <S.List>
        {chat?.history
          .filter(item => item.typeMessage === "textMessage")
          .map(item => (
            <Message key={item.idMessage} message={item} />
          ))}
      </S.List>
    </S.Container>
  );
};

export default MessagesList;
