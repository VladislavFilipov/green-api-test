import { INotificationBody } from "@src/types/notification.types";

export interface IOutgoingMessage extends INotificationBody {
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
    extendedTextMessageData?: {
      text: string;
    };
    textMessageData: {
      textMessage: string;
    };
  };
}

export type TSendOutgoingMessage = {
  chatId: string;
  message: string;
};

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
