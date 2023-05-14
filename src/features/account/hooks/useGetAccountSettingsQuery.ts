import { useQuery } from "@tanstack/react-query";

import accountApi from "@src/api/account.api";
import useAccountStore from "@src/features/account/hooks/useAccountStore";
import { IAuthData } from "@src/types/account.types";
import getErrorInstance from "@src/utils/const/errors/getErrorInstance";
import { QUERY_KEY_GET_ACCOUNT_SETTINGS } from "@src/utils/const/queryKeys";

const useGetAccountSettingsQuery = (authData: IAuthData | null) => {
  const setAccountSettings = useAccountStore(s => s.setAccountSettings);

  const accountSettingsRes = useQuery({
    queryKey: [QUERY_KEY_GET_ACCOUNT_SETTINGS, authData],
    queryFn: async () => {
      try {
        if (!authData) throw new Error("Auth data is unset");

        return await accountApi.getAccountSettings(authData);
      } catch (error) {
        throw getErrorInstance(error);
      }
    },
    onSuccess: accountSettings => {
      setAccountSettings(accountSettings);
    },
    enabled: !!authData
  });

  return accountSettingsRes;
};

export default useGetAccountSettingsQuery;
