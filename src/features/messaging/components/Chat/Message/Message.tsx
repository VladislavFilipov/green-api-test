import { FC } from "react";

import MessageStatus from "@src/features/messaging/components/MessageStatus/MessageStatus";
import Time from "@src/features/messaging/components/Time/Time";
import { IHistoryItem } from "@src/types/chat.types";

import * as S from "./Message.styled";

const Message: FC<{ message: IHistoryItem }> = ({ message }) => {
  return (
    <S.Container type={message.type}>
      <S.Body>
        <S.Text size="s" inline>
          {message.text}
        </S.Text>
        <S.FloatBlock>
          <Time timestamp={message.timestamp} />
          <MessageStatus message={message} />
        </S.FloatBlock>
      </S.Body>
    </S.Container>
  );
};

export default Message;
