import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import useAccountStore from "@src/features/account/store/useAccountStore";
import { IAuthData } from "@src/types/account.types";
import apiHost from "@src/utils/const/apiHost";

export const baseURL = apiHost;

const axios = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

const request = async <T>(
  options: AxiosRequestConfig & { urlFunc?: (authData: IAuthData) => string }
): Promise<T> => {
  try {
    const authData = useAccountStore.getState().authData;

    if (options.urlFunc) {
      if (!authData)
        throw new Error(
          "Выполните вход в аккаунт GREEN-API при помощи idInstance и apiTokenInstance."
        );

      options.url = options.urlFunc(authData);
    }

    const res: AxiosResponse = await axios<T>(options);
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export default request;
