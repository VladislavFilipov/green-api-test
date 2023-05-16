import { useMutation } from "@tanstack/react-query";

import messagingApi from "@src/api/chat.api";
import useChatsStore from "@src/features/messaging/hooks/useChatsStore";
import {
  IOutgoingMessage,
  TSendOutgoingMessage
} from "@src/types/message.types";
import { QUERY_KEY_SEND_MESSAGE } from "@src/utils/const/queryKeys";
import getErrorInstance from "@src/utils/functions/errors/getErrorInstance";

const useSendMessageMutation = () => {
  const saveOutgoingMessage = useChatsStore(s => s.saveOutgoingMessage);
  const sendMessage = useMutation({
    mutationKey: [QUERY_KEY_SEND_MESSAGE],
    mutationFn: async (message: TSendOutgoingMessage) => {
      try {
        const res = await messagingApi.sendMessage(message);
        const outgoingMessage: IOutgoingMessage = {
          ...message,
          ...res,
          timestamp: Math.floor(Date.now() / 1000)
        };
        saveOutgoingMessage(outgoingMessage);
        return outgoingMessage;
      } catch (error) {
        throw getErrorInstance(error);
      }
    }
  });
  return sendMessage;
};

export default useSendMessageMutation;
