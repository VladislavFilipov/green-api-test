import { FC, useRef } from "react";

import TextFieldWithRef from "@src/components/TextField/TextFieldWithRef";
import useSendMessageMutation from "@src/features/messaging/hooks/useSendMessageMutation";
import { IChat } from "@src/types/chat.types";

import * as S from "./Input.styled";

const Input: FC<{ chat: IChat }> = ({ chat }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const sendMessage = useSendMessageMutation();

  const handleSendClick = () => {
    if (inputRef.current?.value && chat) {
      sendMessage.mutateAsync({
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
