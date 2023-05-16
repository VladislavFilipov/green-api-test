import request from "@src/lib/axiosRequest";
import {
  IAccountSettings,
  IAuthData,
  IContact
} from "@src/types/account.types";
import { GET } from "@src/utils/const/httpMethods";

const accountApi = {
  getAccountSettings: async (authData: IAuthData) =>
    request<IAccountSettings>({
      method: GET,
      url: `/waInstance${authData.idInstance}/getSettings/${authData.apiToketInstance}`
    }),
  getContacts: async () =>
    request<IContact[]>({
      method: GET,
      urlFunc: authData =>
        `/waInstance${authData.idInstance}/GetContacts/${authData.apiToketInstance}`
    })
};

export default accountApi;
