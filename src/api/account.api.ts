import request from "@src/lib/axiosRequest";
import { IAccountSettings, IAuthData } from "@src/types/account.types";
import { GET } from "@src/utils/const/httpMethods";

const accountApi = {
  getAccountSettings: async (authData: IAuthData) =>
    request<IAccountSettings>({
      method: GET,
      url: `/waInstance${authData.idInstance}/getSettings/${authData.apiToketInstance}`
    })
};

export default accountApi;
