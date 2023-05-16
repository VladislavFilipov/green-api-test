import { useCallback } from "react";

import messagingApi from "@src/api/chat.api";
import { TSendOutgoingMessage } from "@src/types/message.types";
import getErrorInstance from "@src/utils/functions/errors/getErrorInstance";

const useSendMessage = () => {
  const sendMessage = useCallback(async (message: TSendOutgoingMessage) => {
    try {
      await messagingApi.sendMessage(message);
    } catch (error) {
      throw getErrorInstance(error);
    }
  }, []);

  return sendMessage;
};

export default useSendMessage;
