import { TOutgoingMessageStatus } from "@src/types/chat.types";

export type TNotificationType =
  | "incomingMessageReceived"
  | "outgoingMessageReceived"
  | "outgoingAPIMessageReceived"
  | "outgoingMessageStatus"
  | "stateInstanceChanged"
  | "statusInstanceChanged";

export interface INotificationBody {
  timestamp: number;
  typeWebhook: TNotificationType;
}

export interface INotification {
  receiptId: number;
  body: INotificationBody;
}

export interface IOutgoingStatusNotificationBody {
  typeWebhook: string;
  chatId: string;
  instanceData: {
    idInstance: number;
    wid: string;
    typeInstance: string;
  };
  timestamp: number;
  idMessage: string;
  status: TOutgoingMessageStatus;
  sendByApi: true;
}
