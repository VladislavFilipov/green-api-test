import { INotificationBody } from "@src/types/notification.types";

export interface IOutgoingMessage {
  idMessage: string;
  chatId: string;
  message: string;
  timestamp: number;
}

export type TSendOutgoingMessage = Omit<
  IOutgoingMessage,
  "idMessage" | "timestamp"
>;

export interface IIncomingMessage extends INotificationBody {
  instanceData: {
    idInstance: number;
    wid: string;
    typeInstance: string;
  };
  idMessage: string;
  senderData: {
    chatId: string;
    sender: string;
    chatName: string;
    senderName: string;
  };
  messageData: {
    typeMessage: string;
    textMessageData: {
      textMessage: string;
    };
  };
}
