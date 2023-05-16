import { create } from "zustand";
import { persist } from "zustand/middleware";

import addIncomingMessage from "@src/features/messaging/utils/storeHelpers/addIncomingMessage";
import addOutgoingMessage from "@src/features/messaging/utils/storeHelpers/addOutgoingMessage";
import changeOutgoingMessageStatus from "@src/features/messaging/utils/storeHelpers/changeOutgoingMessageStatus";
import updateChatHistory from "@src/features/messaging/utils/storeHelpers/updateChatHistory";
import { IChat, IHistoryItem } from "@src/types/chat.types";
import { IIncomingMessage, IOutgoingMessage } from "@src/types/message.types";
import { IOutgoingStatusNotificationBody } from "@src/types/notification.types";

type TState = {
  chats: IChat[];
  current: IChat | null;
};

type TActions = {
  selectChat: (number: IChat | null) => void;
  addChat: (number: string) => void;
  setChatHistory: (chatId: string, history: IHistoryItem[]) => void;
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
      selectChat: chat => {
        console.log("selectChat", chat);
        set({ current: chat });
      },
      addChat: number => {
        const chat: IChat = {
          number,
          chatId: number + "@c.us",
          history: []
        };
        set({ chats: [...get().chats, chat], current: chat });
      },
      setChatHistory: (chatId, history) => {
        const chats = updateChatHistory(get().chats, history, chatId);
        set({ chats });
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
      name: "chats"
    }
  )
);

export default useChatsStore;
