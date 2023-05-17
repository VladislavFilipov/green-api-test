import { useCallback } from "react";

import messagingApi from "@src/api/chat.api";
import useRequestStatus from "@src/hooks/useRequestStatus";
import { TSendOutgoingMessage } from "@src/types/message.types";

const useSendMessage = () => {
  const [isLoading, error, updateStatus] = useRequestStatus();
  const sendMessage = useCallback(async (message: TSendOutgoingMessage) => {
    try {
      updateStatus("loading");
      await messagingApi.sendMessage(message);
      updateStatus("success");
    } catch (error) {
      updateStatus("error");
    }
  }, []);

  return { sendMessage, isLoading, error };
};

export default useSendMessage;
