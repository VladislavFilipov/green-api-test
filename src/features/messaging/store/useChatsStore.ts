import { create } from "zustand";
import { persist } from "zustand/middleware";

import chatApi from "@src/api/chat.api";
import addIncomingMessage from "@src/features/messaging/utils/storeHelpers/addIncomingMessage";
import addOutgoingMessage from "@src/features/messaging/utils/storeHelpers/addOutgoingMessage";
import changeOutgoingMessageStatus from "@src/features/messaging/utils/storeHelpers/changeOutgoingMessageStatus";
import updateChatHistory from "@src/features/messaging/utils/storeHelpers/updateChatHistory";
import { IContactInfo } from "@src/types/account.types";
import { IChat } from "@src/types/chat.types";
import { IIncomingMessage, IOutgoingMessage } from "@src/types/message.types";
import { IOutgoingStatusNotificationBody } from "@src/types/notification.types";

const ERROR_UPDATE_CHAT_HISTORY = "Ошибка при обновлении истории чата.";

type TState = {
  chats: IChat[];
  current: IChat | null;
  isLoading: boolean;
  error: string | null;
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
  current: null,
  isLoading: false,
  error: null
};

const useChatsStore = create<TState & TActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      setChats: async chats => {
        set({
          chats
        });
      },
      selectChat: async (chat, count) => {
        try {
          set({ isLoading: true, error: null });
          const history = await chatApi.getChatHistory({
            chatId: chat.chatId,
            count
          });

          set({ isLoading: false, current: { ...chat, history } });
        } catch (error) {
          set({ error: ERROR_UPDATE_CHAT_HISTORY });
        }
      },
      addChat: async contact => {
        try {
          set({ isLoading: true, error: null });
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

          set({
            isLoading: false,
            chats: [...get().chats, chat],
            current: chat
          });
        } catch (error) {
          set({ error: "Ошибка при добавлении чата." });
        }
      },
      setChatHistory: async (chatId, count) => {
        try {
          set({ isLoading: true, error: null });
          const history = await chatApi.getChatHistory({
            chatId: chatId,
            count
          });

          const chats = updateChatHistory({
            chats: get().chats,
            history,
            chatId
          });

          set({ chats, isLoading: false });
        } catch (error) {
          set({ error: ERROR_UPDATE_CHAT_HISTORY });
        }
      },
      saveOutgoingMessage: message => {
        try {
          set({ isLoading: true, error: null });
          const [chats, current] = addOutgoingMessage(
            get().chats,
            message,
            get().current
          );

          set({
            isLoading: false,
            chats,
            current
          });
        } catch (error) {
          set({ error: ERROR_UPDATE_CHAT_HISTORY });
        }
      },
      updateOutgoingMessageStatus: notificationBody => {
        try {
          set({ isLoading: true, error: null });
          const [chats, current] = changeOutgoingMessageStatus(
            get().chats,
            notificationBody,
            get().current
          );

          set({
            isLoading: false,
            chats,
            current
          });
        } catch (error) {
          set({ error: ERROR_UPDATE_CHAT_HISTORY });
        }
      },
      saveIncomingMessage: message => {
        try {
          set({ isLoading: true, error: null });
          const [chats, current] = addIncomingMessage(
            get().chats,
            message,
            get().current
          );

          set({
            isLoading: false,
            chats,
            current
          });
        } catch (error) {
          set({ error: ERROR_UPDATE_CHAT_HISTORY });
        }
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
