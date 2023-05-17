import { FC, useCallback, useState } from "react";

import { ReactComponent as SendMsgSVG } from "@src/assets/img/icons/send-msg.svg";
import IconButton from "@src/components/IconButton/IconButton";
import Spinner from "@src/components/Spinner/Spinner";
import { TextFieldTextarea } from "@src/components/TextField/TextField";
import useSendMessage from "@src/features/messaging/queries/useSendMessage";
import { IChat } from "@src/types/chat.types";

import * as S from "./Input.styled";

const Input: FC<{ chat: IChat }> = ({ chat }) => {
  const [input, setInput] = useState<string>("");
  const { sendMessage, isLoading } = useSendMessage();

  const handleSendClick = useCallback(() => {
    if (input) {
      sendMessage({
        chatId: chat.chatId,
        message: input
      });
      setInput("");
    }
  }, [input, chat]);

  return (
    <S.Input>
      <TextFieldTextarea
        value={input}
        onChange={value => setInput(value)}
        isTextarea
      />
      {!isLoading ? (
        <IconButton onClick={handleSendClick}>
          <SendMsgSVG />
        </IconButton>
      ) : (
        <Spinner />
      )}
    </S.Input>
  );
};

export default Input;
