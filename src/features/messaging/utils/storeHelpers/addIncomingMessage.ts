import { IChat } from "@src/types/chat.types";
import { IIncomingMessage } from "@src/types/message.types";

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
          textMessage: message.messageData.textMessageData.textMessage,
          timestamp: message.timestamp,
          chatId: chat.chatId,
          typeMessage: message.messageData.typeMessage
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
