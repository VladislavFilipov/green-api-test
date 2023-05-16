import { useQuery } from "@tanstack/react-query";

import messagingApi from "@src/api/chat.api";
import useChatsStore from "@src/features/messaging/store/useChatsStore";
import { IChat } from "@src/types/chat.types";
import { QUERY_KEY_CHAT_HISTORY } from "@src/utils/const/queryKeys";
import getErrorInstance from "@src/utils/functions/errors/getErrorInstance";

const useChatHistoryQuery = (chat: IChat | null, count = 100) => {
  const setChatHistory = useChatsStore(s => s.setChatHistory);

  useQuery({
    queryKey: [QUERY_KEY_CHAT_HISTORY, chat?.chatId],
    queryFn: async () => {
      try {
        if (!chat) throw new Error("Ошибка! Неизвестный идентификатор чата.");

        const historyRes = await messagingApi.getChatHistory({
          chatId: chat.chatId,
          count
        });

        setChatHistory(chat.chatId, historyRes);

        return historyRes;
      } catch (error) {
        throw getErrorInstance(error);
      }
    },
    enabled: !!chat
  });
};

export default useChatHistoryQuery;
