import { FC, useRef } from "react";

import TextFieldWithRef from "@src/components/TextField/TextFieldWithRef";
import useAccountStore from "@src/features/account/hooks/useAccountStore";
import useChatsStore from "@src/features/messaging/hooks/useChatsStore";
import useReceiveNotificationQuery from "@src/features/messaging/hooks/useReceiveNotificationQuery";
import useSendMessageMutation from "@src/features/messaging/hooks/useSendMessageMutation";
import { IIncomingMessage, IOutgoingMessage } from "@src/types/message.types";

const Chat: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const chat = useChatsStore(s => s.current);
  useReceiveNotificationQuery();
  const sendMessage = useSendMessageMutation();
  const handleSendClick = () => {
    if (inputRef.current?.value && chat) {
      sendMessage.mutateAsync({
        chatId: chat.chatId,
        message: inputRef.current?.value
      });
    }
  };

  console.log("chat", chat);

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <h3>{chat?.number}</h3>
      <div>
        <ul>
          {chat?.history.map(item => (
            <li key={item.idMessage}>
              {item.text} - {item.status}
            </li>
          ))}
        </ul>
      </div>
      <TextFieldWithRef ref={inputRef} label="Введите сообщение" />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

export default Chat;
