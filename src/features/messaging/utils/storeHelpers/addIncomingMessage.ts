import { IChat } from "@src/types/chat.types";
import { IIncomingMessage, IOutgoingMessage } from "@src/types/message.types";

const addIncomingMessage = (
  chats: IChat[],
  message: IIncomingMessage,
  current: IChat | null
): [IChat[], IChat | null] => {
  const chatsUpd = chats.map(chat => {
    if (chat.chatId !== message.senderData.chatId) return chat;

    const updated: IChat = {
      ...chat,
      history: [
        ...chat.history,
        {
          type: "incoming",
          idMessage: message.idMessage,
          text: message.messageData.textMessageData.textMessage,
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

export default addIncomingMessage;
