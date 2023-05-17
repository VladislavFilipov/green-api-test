import { FC, SyntheticEvent, useState } from "react";

import { ReactComponent as PlusSVG } from "@src/assets/img/icons/plus.svg";
import IconButton from "@src/components/IconButton/IconButton";
import Spinner from "@src/components/Spinner/Spinner";
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
  console.log("isLoading", isLoading);

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <TextFieldInput
          value={input}
          onChange={handleChange}
          placeholder="Новый чат"
        />

        {isLoading && <Spinner />}

        {contact && (
          <S.Contact>
            <Text>{contact.name || contact.chatId.slice(0, -5)}</Text>

            <IconButton type="submit">
              <PlusSVG />
            </IconButton>
          </S.Contact>
        )}
      </form>
    </S.Container>
  );
};

export default NewChat;
