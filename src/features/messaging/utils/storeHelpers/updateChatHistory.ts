import { IChat, IHistoryItem } from "@src/types/chat.types";

const updateChatHistory = (
  chats: IChat[],
  history: IHistoryItem[],
  chatId: string
): IChat[] => {
  return chats.map(chat => {
    if (chat.chatId !== chatId) return chat;

    const updated: IChat = {
      ...chat,
      history
    };

    return updated;
  });
};

export default updateChatHistory;
