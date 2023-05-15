import request from "@src/lib/axiosRequest";
import { TSendOutgoingMessage } from "@src/types/message.types";
import {
  INotification,
  INotification
} from "@src/types/notification.types";
import { DELETE, GET, POST } from "@src/utils/const/httpMethods";

const chatApi = {
  sendMessage: async (message: TSendOutgoingMessage) =>
    request<{ idMessage: string }>({
      method: POST,
      urlFunc: authData =>
        `/waInstance${authData.idInstance}/SendMessage/${authData.apiToketInstance}`,
      data: message
    }),
  receiveNotification: async () =>
    request<INotification | null>({
      method: GET,
      urlFunc: authData =>
        `/waInstance${authData.idInstance}/ReceiveNotification/${authData.apiToketInstance}`
    }),
  deleteNotification: async (receiptId: number) =>
    request<{ idMessage: string }>({
      method: DELETE,
      urlFunc: authData =>
        `/waInstance${authData.idInstance}/DeleteNotification/${authData.apiToketInstance}/${receiptId}`
    })
};

export default chatApi;
