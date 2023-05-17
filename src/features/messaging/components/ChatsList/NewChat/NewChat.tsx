import { FC, SyntheticEvent, useState } from "react";

import Text from "@src/components/Text/Text";
import { TextFieldInput } from "@src/components/TextField/TextField";
import useCheckNumber from "@src/features/messaging/queries/useCheckNumber";
import useChatsStore from "@src/features/messaging/store/useChatsStore";

import * as S from "./NewChat.styled";

export type TInput = { input: string };

let delayId: ReturnType<typeof setTimeout>;
const NewChat: FC = () => {
  const [input, setInput] = useState<string>("");

  const addChat = useChatsStore(s => s.addChat);
  const { checkNumber, contact, setContact, isLoading } = useCheckNumber();

  const handleChange = (value: string) => {
    console.log(value);
    setInput(value);

    clearTimeout(delayId);
    delayId = setTimeout(() => {
      checkNumber(value);
    }, 1000);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (contact) {
      addChat(contact);
      setInput("");
      setContact(null);
    }
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <TextFieldInput
          value={input}
          onChange={handleChange}
          placeholder="Новый чат"
        />
        <button type="submit">Add Chat</button>
      </form>
      {isLoading && <Text>Loading...</Text>}
      {contact && <Text>{contact.name || contact.chatId}</Text>}
    </S.Container>
  );
};

export default NewChat;
