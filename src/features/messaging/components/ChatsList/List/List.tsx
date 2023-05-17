import { FC } from "react";

import ListItem from "@src/features/messaging/components/ChatsList/ListItem/ListItem";
import useChatsStore from "@src/features/messaging/store/useChatsStore";

import * as S from "./List.styled";

const List: FC = () => {
  const chats = useChatsStore(s => s.chats);
  const current = useChatsStore(s => s.current);
  return (
    <S.Container>
      <ul>
        {chats?.map(chat => (
          <ListItem
            key={chat.chatId}
            chat={chat}
            active={current?.chatId === chat.chatId}
          />
        ))}
      </ul>
    </S.Container>
  );
};

export default List;
