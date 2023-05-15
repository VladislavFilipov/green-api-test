import { FC, useRef } from "react";

import TextFieldWithRef from "@src/components/TextField/TextFieldWithRef";
import useChatsStore from "@src/features/messaging/hooks/useChatsStore";

const Dialogs: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const addChat = useChatsStore(s => s.addChat);
  const selectChat = useChatsStore(s => s.selectChat);
  const chats = useChatsStore(s => s.chats);

  return (
    <div>
      <TextFieldWithRef ref={inputRef} label="Новый диалог" />
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
      <br />
      <ul>
        {chats?.map(chat => (
          <li key={chat.chatId} onClick={() => selectChat(chat)}>
            {chat.number} - {chat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dialogs;
