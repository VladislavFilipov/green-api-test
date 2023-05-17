import { FC, useRef, useState } from "react";

import { ReactComponent as SendMsgSVG } from "@src/assets/img/icons/send-msg.svg";
import IconButton from "@src/components/IconButton/IconButton";
import { TextFieldTextarea } from "@src/components/TextField/TextField";
import useSendMessage from "@src/features/messaging/queries/useSendMessage";
import { IChat } from "@src/types/chat.types";

import * as S from "./Input.styled";

const Input: FC<{ chat: IChat }> = ({ chat }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [input, setInput] = useState<string>("");
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
      <TextFieldTextarea
        value={input}
        onChange={value => setInput(value)}
        isTextarea
      />
      <IconButton onClick={handleSendClick}>
        <SendMsgSVG />
      </IconButton>
      {/* <button onClick={handleSendClick}>Send</button> */}
    </S.Input>
  );
};

export default Input;
