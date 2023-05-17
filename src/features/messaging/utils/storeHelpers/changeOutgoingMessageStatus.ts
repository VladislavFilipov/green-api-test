import { IChat } from "@src/types/chat.types";
import { IOutgoingStatusNotificationBody } from "@src/types/notification.types";

const changeOutgoingMessageStatus = (
  chats: IChat[],
  notificationBody: IOutgoingStatusNotificationBody,
  current: IChat | null
): [IChat[], IChat | null] => {
  const chatsUpd = chats.map(chat => {
    if (chat.chatId !== notificationBody.chatId) return chat;

    const history = [...chat.history];
    for (let i = chat.history.length - 1; i >= 0; i--) {
      if (chat.history[i].idMessage === notificationBody.idMessage) {
        history[i].statusMessage = notificationBody.status;
        break;
      }
    }

    const updated: IChat = {
      ...chat,
      history
    };

    if (current) {
      current = updated;
    }

    return updated;
  });

  return [chatsUpd, current];
};

export default changeOutgoingMessageStatus;
