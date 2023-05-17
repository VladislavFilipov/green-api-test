import { IChat } from "@src/types/chat.types";
import { IOutgoingMessage } from "@src/types/message.types";

const addOutgoingMessage = (
  chats: IChat[],
  message: IOutgoingMessage,
  current: IChat | null
): [IChat[], IChat | null] => {
  const chatsUpd = chats.map(chat => {
    if (chat.chatId !== message.senderData.chatId) return chat;

    const textMessage =
      message.messageData.typeMessage === "extendedTextMessage"
        ? message.messageData.extendedTextMessageData?.text
        : message.messageData.textMessageData.textMessage;

    const updated: IChat = {
      ...chat,
      history: [
        ...chat.history,
        {
          type: "outgoing",
          idMessage: message.idMessage,
          textMessage: textMessage,
          timestamp: message.timestamp,
          chatId: chat.chatId,
          typeMessage: "textMessage"
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
