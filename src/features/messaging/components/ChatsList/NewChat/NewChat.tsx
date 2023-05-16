import {
  ChangeEvent,
  EventHandler,
  FC,
  FormEvent,
  SyntheticEvent,
  useRef,
  useState
} from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import Text from "@src/components/Text/Text";
import TextField from "@src/components/TextField/TextField";
import TextFieldWithRef from "@src/components/TextField/TextFieldWithRef";
import InputText from "@src/components/formInputs/InputText/InputText";
import useCheckNumber from "@src/features/messaging/queries/useCheckNumber";
import useChatsStore from "@src/features/messaging/store/useChatsStore";

import * as S from "./NewChat.styled";
import schema from "./_yupSchema";

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
        <TextField
          value={input}
          onChange={({ currentTarget }) => handleChange(currentTarget.value)}
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
{
  /* // <TextFieldWithRef ref={inputRef} placeholder="Новый чат" />
        // <button
        //   onClick={() => {
        //     if (inputRef.current?.value) {
        //       addChat(inputRef.current?.value);
        //       inputRef.current.value = "";
        //     }
        //   }}
        // >
        //   Add Chat
        // </button> */
}
