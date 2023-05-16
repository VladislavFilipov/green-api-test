import { FC } from "react";

import messageStatusIcons from "@src/features/messaging/data/messageStatusIcons";
import { IHistoryItem } from "@src/types/chat.types";

import * as S from "./MessageStatus.styled";

const MessageStatus: FC<{ message: IHistoryItem }> = ({ message }) => {
  return message.status ? (
    <S.Container status={message.status}>
      {messageStatusIcons[message.status]}
    </S.Container>
  ) : (
    <></>
  );
};

export default MessageStatus;
