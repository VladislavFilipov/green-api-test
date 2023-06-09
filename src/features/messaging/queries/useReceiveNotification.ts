import { useEffect } from "react";

import messagingApi from "@src/api/chat.api";
import handleNotification from "@src/features/messaging/utils/notifications/handling";

let timeoutId: ReturnType<typeof setTimeout>;
const useReceiveNotification = () => {
  useEffect(() => {
    receiveNotification();
    return () => clearTimeout(timeoutId);
  }, []);

  const receiveNotification = async () => {
    clearTimeout(timeoutId);
    try {
      const notification = await messagingApi.receiveNotification();

      if (notification) {
        handleNotification(notification);
        await messagingApi.deleteNotification(notification.receiptId);
        timeoutId = setTimeout(() => receiveNotification(), 500);
      } else {
        timeoutId = setTimeout(() => receiveNotification(), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default useReceiveNotification;
