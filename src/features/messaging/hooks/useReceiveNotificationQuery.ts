import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import messagingApi from "@src/api/chat.api";
import handleNotification from "@src/features/messaging/utils/notifications/handling";
import getErrorInstance from "@src/utils/const/errors/getErrorInstance";
import { QUERY_KEY_SEND_MESSAGE } from "@src/utils/const/queryKeys";

const useReceiveNotificationQuery = () => {
  const [interval, setInterval] = useState<number>(1);
  useQuery({
    queryKey: [QUERY_KEY_SEND_MESSAGE],
    queryFn: async () => {
      try {
        const received = await messagingApi.receiveNotification();

        if (received) {
          handleNotification(received);
          await messagingApi.deleteNotification(received.receiptId);
          setInterval(1);
        } else {
          setInterval(5);
        }

        return received;
      } catch (error) {
        throw getErrorInstance(error);
      }
    },
    refetchInterval: interval * 1000,
    refetchOnWindowFocus: true
  });
};

export default useReceiveNotificationQuery;
