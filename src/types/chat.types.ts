import { IIncomingMessage, IOutgoingMessage } from "@src/types/message.types";

export interface IChat {
  number: string;
  chatId: string;
  name?: string;
  history: IHistoryItem[];
}

export type TMessageType = "incoming" | "outgoing";
export type TOutgoingMessageStatus = "sent" | "delivered" | "read";
// | "failed"
// | "noAccount"
// | "notInGroup";

export interface IHistoryItem {
  type: TMessageType;
  idMessage: string;
  textMessage?: string;
  timestamp: number;
  typeMessage: string;
  statusMessage?: TOutgoingMessageStatus;
  chatId: string;
  senderId?: string;
  senderName?: string;
}
