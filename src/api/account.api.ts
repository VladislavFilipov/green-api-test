import request from "@src/lib/axiosRequest";
import { IAccountSettings, IAuthData } from "@src/types/account.types";
import { GET } from "@src/utils/const/httpMethods";

const accountApi = {
  getAccountSettings: async (params: IAuthData) =>
    request<IAccountSettings>({
      method: GET,
      url: `/waInstance${params.idInstance}/getSettings/${params.apiToketInstance}`,
    }),
};

export default accountApi;
