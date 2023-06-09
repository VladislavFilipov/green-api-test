import { FC } from "react";

import Avatar from "@src/features/messaging/components/Avatar/Avatar";
import MessageStatus from "@src/features/messaging/components/MessageStatus/MessageStatus";
import Time from "@src/features/messaging/components/Time/Time";
import useChatsStore from "@src/features/messaging/store/useChatsStore";
import { IChat } from "@src/types/chat.types";

import * as S from "./ListItem.styled";

const ListItem: FC<{ chat: IChat; active: boolean }> = ({ chat, active }) => {
  const selectChat = useChatsStore(s => s.selectChat);
  const lastMessage = chat.history[chat.history.length - 1];

  const handleChatClcik = () => selectChat(chat, 1000);

  return (
    <S.Container active={active} onClick={handleChatClcik}>
      <Avatar url={chat.avatar} />
      <S.Line1>
        <S.Name size="l">{chat.name || chat.number}</S.Name>
        {lastMessage && <Time timestamp={lastMessage.timestamp} />}
      </S.Line1>
      {lastMessage && (
        <S.Line2>
          <MessageStatus status={lastMessage.statusMessage} />
          <S.LastMsg size="s">{lastMessage.textMessage}</S.LastMsg>
        </S.Line2>
      )}
    </S.Container>
  );
};

export default ListItem;
