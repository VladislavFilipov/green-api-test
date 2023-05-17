import { useCallback } from "react";

import accountApi from "@src/api/account.api";
import useAccountStore from "@src/features/account/store/useAccountStore";
import useRequestStatus from "@src/hooks/useRequestStatus";
import { IAuthData } from "@src/types/account.types";

const useGetAccountSettings = (): [
  (authData: IAuthData) => void,
  boolean,
  string | null
] => {
  const setAccountSettings = useAccountStore(s => s.setAccountSettings);
  const setAuthData = useAccountStore(s => s.setAuthData);
  const [isLoading, error, updateStatus] = useRequestStatus();

  const getAccountSettings = useCallback(
    async (authData: IAuthData) => {
      try {
        updateStatus("waiting");
        const accountSettings = await accountApi.getAccountSettings(authData);

        setAccountSettings(accountSettings);
        setAuthData(authData);

        updateStatus("success");
        return accountSettings;
      } catch (error) {
        updateStatus(
          "error",
          "Ошибка! Не удалось получить данные пользователя"
        );
      }
    },
    [setAccountSettings, setAuthData]
  );

  return [getAccountSettings, isLoading, error];
};

export default useGetAccountSettings;
