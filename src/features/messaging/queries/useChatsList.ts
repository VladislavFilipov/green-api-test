import { useEffect } from "react";

import accountApi from "@src/api/account.api";
import useChatsStore from "@src/features/messaging/store/useChatsStore";

const useChatsList = () => {
  const setChats = useChatsStore(s => s.setChats);

  useEffect(() => {
    loadChatsList();
  }, []);

  const loadChatsList = async () => {
    try {
      const contacts = await accountApi.getContacts();

      const chats = contacts.map(contact => {
        return {
          chatId: contact.id,
          number: contact.id.slice(0, -5),
          name: contact.name,
          history: []
        };
      });

      setChats(chats);
    } catch (error) {
      console.log(error);
    }
  };
};

export default useChatsList;
