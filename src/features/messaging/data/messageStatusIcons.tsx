import { ReactNode } from "react";

import { ReactComponent as MsgStatusDoubleSVG } from "@src/assets/img/icons/msg-status-mark-double.svg";
import { ReactComponent as MsgStatusSVG } from "@src/assets/img/icons/msg-status-mark.svg";
import { TOutgoingMessageStatus } from "@src/types/chat.types";

// const messageStatusIcons: Record<
//   Extract<TOutgoingMessageStatus, "sent" | "delivered" | "read">,
//   ReactNode
// > = {

const messageStatusIcons: Record<TOutgoingMessageStatus, ReactNode> = {
  sent: <MsgStatusSVG />,
  delivered: <MsgStatusDoubleSVG />,
  read: <MsgStatusDoubleSVG />
};

export default messageStatusIcons;
