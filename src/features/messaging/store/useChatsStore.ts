import { create } from "zustand";
import { persist } from "zustand/middleware";

import chatApi from "@src/api/chat.api";
import addIncomingMessage from "@src/features/messaging/utils/storeHelpers/addIncomingMessage";
import addOutgoingMessage from "@src/features/messaging/utils/storeHelpers/addOutgoingMessage";
import changeOutgoingMessageStatus from "@src/features/messaging/utils/storeHelpers/changeOutgoingMessageStatus";
import getChatsListFromContacts from "@src/features/messaging/utils/storeHelpers/getChatsListFromContacts";
import updateChatHistory from "@src/features/messaging/utils/storeHelpers/updateChatHistory";
import { IContact, IContactInfo } from "@src/types/account.types";
import { IChat, IHistoryItem } from "@src/types/chat.types";
import { IIncomingMessage, IOutgoingMessage } from "@src/types/message.types";
import { IOutgoingStatusNotificationBody } from "@src/types/notification.types";

type TState = {
  chats: IChat[];
  current: IChat | null;
};

type TActions = {
  setChats: (chats: IChat[]) => void;
  selectChat: (number: IChat, count: number) => Promise<void>;
  addChat: (contact: IContactInfo) => void;
  setChatHistory: (chatId: string, count: number) => Promise<void>;
  saveOutgoingMessage: (message: IOutgoingMessage) => void;
  updateOutgoingMessageStatus: (
    message: IOutgoingStatusNotificationBody
  ) => void;
  saveIncomingMessage: (message: IIncomingMessage) => void;
};

const initialState: TState = {
  chats: [],
  current: null
};

const useChatsStore = create<TState & TActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      setChats: async chats => {
        // const chats = await getChatsListFromContacts(get().chats, contacts);

        set({
          chats
        });
      },
      selectChat: async (chat, count) => {
        set({ current: chat });

        try {
          const history = await chatApi.getChatHistory({
            chatId: chat.chatId,
            count
          });

          set({ current: { ...chat, history } });
        } catch (error) {
          console.log(error);
        }
      },
      addChat: async contact => {
        try {
          // const chatId = number + "@c.us";

          if (get().chats.find(chat => chat.chatId === contact.chatId)) return;

          const history = await chatApi.getChatHistory({
            chatId: contact.chatId,
            count: 1000
          });

          const chat: IChat = {
            chatId: contact.chatId,
            number: contact.chatId.slice(0, -5),
            name: contact.name,
            avatar: contact.avatar,
            history: history || []
          };

          set({ chats: [...get().chats, chat], current: chat });
        } catch (error) {
          console.log(error);
        }
      },
      setChatHistory: async (chatId, count) => {
        try {
          const history = await chatApi.getChatHistory({
            chatId: chatId,
            count
          });

          const chats = updateChatHistory({
            chats: get().chats,
            history,
            chatId
          });

          set({ chats });
        } catch (error) {
          console.log(error);
        }
      },
      saveOutgoingMessage: message => {
        const [chats, current] = addOutgoingMessage(
          get().chats,
          message,
          get().current
        );

        set({
          chats,
          current
        });
      },
      updateOutgoingMessageStatus: notificationBody => {
        const [chats, current] = changeOutgoingMessageStatus(
          get().chats,
          notificationBody,
          get().current
        );

        set({
          chats,
          current
        });
      },
      saveIncomingMessage: message => {
        const [chats, current] = addIncomingMessage(
          get().chats,
          message,
          get().current
        );

        set({
          chats,
          current
        });
      }
    }),
    {
      name: "chats",
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["current"].includes(key))
        )
    }
  )
);

export default useChatsStore;
