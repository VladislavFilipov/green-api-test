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
  text: string;
  timestamp: number;
  status?: TOutgoingMessageStatus;
  message: IIncomingMessage | IOutgoingMessage;
}
