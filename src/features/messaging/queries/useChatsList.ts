import { useEffect } from "react";

import accountApi from "@src/api/account.api";
import chatApi from "@src/api/chat.api";
import useChatsStore from "@src/features/messaging/store/useChatsStore";
import { IChat } from "@src/types/chat.types";

const useChatsList = () => {
  const setChats = useChatsStore(s => s.setChats);

  useEffect(() => {
    loadChatsList();
  }, []);

  const loadChatsList = async () => {
    try {
      const contacts = await accountApi.getContacts();

      const chats = await Promise.all(
        contacts.map(async (contact): Promise<IChat> => {
          // const history = await chatApi.getChatHistory({
          //   chatId: contact.id,
          //   count: 10
          // });
          return {
            chatId: contact.id,
            number: contact.id.slice(0, -5),
            name: contact.name,
            history: []
          };
        })
      );

      setChats(chats);
    } catch (error) {
      console.log(error);
    }
  };
};

export default useChatsList;
