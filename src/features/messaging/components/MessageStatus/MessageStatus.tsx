import { FC } from "react";

import messageStatusIcons from "@src/features/messaging/data/messageStatusIcons";
import { TOutgoingMessageStatus } from "@src/types/chat.types";

import * as S from "./MessageStatus.styled";

const MessageStatus: FC<{ status?: TOutgoingMessageStatus }> = ({ status }) => {
  return status ? (
    <S.Container status={status}>{messageStatusIcons[status]}</S.Container>
  ) : (
    <></>
  );
};

export default MessageStatus;
