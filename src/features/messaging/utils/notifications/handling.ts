import useChatsStore from "@src/features/messaging/store/useChatsStore";
import { IIncomingMessage, IOutgoingMessage } from "@src/types/message.types";
import {
  INotification,
  IOutgoingStatusNotificationBody
} from "@src/types/notification.types";

const handleNotification = async (notification: INotification) => {
  switch (notification.body.typeWebhook) {
    case "incomingMessageReceived":
      useChatsStore
        .getState()
        .saveIncomingMessage(notification.body as IIncomingMessage);
      break;
    case "outgoingMessageReceived":
      useChatsStore
        .getState()
        .saveOutgoingMessage(notification.body as IOutgoingMessage);
      break;
    case "outgoingAPIMessageReceived":
      useChatsStore
        .getState()
        .saveOutgoingMessage(notification.body as IOutgoingMessage);
      break;
    case "outgoingMessageStatus":
      useChatsStore
        .getState()
        .updateOutgoingMessageStatus(
          notification.body as IOutgoingStatusNotificationBody
        );
      break;
    // case "stateInstanceChanged":
    //   break;
    // case "statusInstanceChanged":
    //   break;

    default:
      break;
  }
};

export default handleNotification;
