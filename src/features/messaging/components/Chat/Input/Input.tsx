import { FC, useRef } from "react";

import TextFieldWithRef from "@src/components/TextField/TextFieldWithRef";
import useSendMessage from "@src/features/messaging/queries/useSendMessage";
import { IChat } from "@src/types/chat.types";

import * as S from "./Input.styled";

const Input: FC<{ chat: IChat }> = ({ chat }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const sendMessage = useSendMessage();

  const handleSendClick = () => {
    if (inputRef.current?.value && chat) {
      sendMessage({
        chatId: chat.chatId,
        message: inputRef.current?.value
      });
    }
  };

  return (
    <S.Input>
      <TextFieldWithRef ref={inputRef} />
      <div onClick={handleSendClick}></div>
      <button onClick={handleSendClick}>Send</button>
    </S.Input>
  );
};

export default Input;
