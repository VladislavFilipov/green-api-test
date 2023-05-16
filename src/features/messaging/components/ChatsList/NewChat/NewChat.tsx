import { FC, useRef } from "react";

import TextFieldWithRef from "@src/components/TextField/TextFieldWithRef";
import useChatsStore from "@src/features/messaging/hooks/useChatsStore";

import * as S from "./NewChat.styled";

const NewChat: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const addChat = useChatsStore(s => s.addChat);
  return (
    <S.Container>
      <TextFieldWithRef ref={inputRef} placeholder="Новый чат" />
      <button
        onClick={() => {
          if (inputRef.current?.value) {
            addChat(inputRef.current?.value);
            inputRef.current.value = "";
          }
        }}
      >
        Add Chat
      </button>
    </S.Container>
  );
};

export default NewChat;
