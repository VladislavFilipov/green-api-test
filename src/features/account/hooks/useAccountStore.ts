import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IAccountSettings, IAuthData } from "@src/types/account.types";

type TState = {
  accountSettings: IAccountSettings | null;
  authData: IAuthData | null;
};

type TActions = {
  setAccountSettings: (accountSettings: IAccountSettings | null) => void;
  setAuthData: (authData: IAuthData | null) => void;
};

const initialState: TState = {
  accountSettings: null,
  authData: null,
};

const useAccountStore = create<TState & TActions>()(
  persist(
    (set) => ({
      ...initialState,
      setAccountSettings: (accountSettings) => {
        set({ accountSettings });
      },
      setAuthData: (authData) => {
        set({ authData });
      },
    }),
    {
      name: "account-settings",
    },
  ),
);

export default useAccountStore;
