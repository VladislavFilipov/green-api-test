import { IChat } from "@src/types/chat.types";
import { IOutgoingMessage } from "@src/types/message.types";

const addOutgoingMessage = (
  chats: IChat[],
  message: IOutgoingMessage,
  current: IChat | null
): [IChat[], IChat | null] => {
  const chatsUpd = chats.map(chat => {
    if (chat.chatId !== message.chatId) return chat;

    const updated: IChat = {
      ...chat,
      history: [
        ...chat.history,
        {
          type: "outgoing",
          idMessage: message.idMessage,
          text: message.message,
          timestamp: message.timestamp,
          message: message
        }
      ]
    };

    if (current) {
      current = updated;
    }

    return updated;
  });

  return [chatsUpd, current];
};

export default addOutgoingMessage;
