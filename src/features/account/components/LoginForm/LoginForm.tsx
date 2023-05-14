import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import InputText from "@src/components/formInputs/InputText/InputText";
import schema from "@src/features/account/components/LoginForm/_yupSchema";
import useGetAccountSettingsQuery from "@src/features/account/hooks/useGetAccountSettingsQuery";
import { IAuthData } from "@src/types/account.types";

const LoginForm: FC = () => {
  const [authData, setAuthData] = useState<IAuthData | null>(null);
  const accountSettingsRes = useGetAccountSettingsQuery(authData);

  useEffect(() => {
    if (accountSettingsRes.isSuccess) setAuthData(null);
  }, [accountSettingsRes.isSuccess]);

  const methods = useForm<IAuthData>({
    resolver: yupResolver(schema)
  });

  const submitHandler: SubmitHandler<IAuthData> = authData => {
    setAuthData(authData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>
        <InputText name="idInstance" />
        <InputText name="apiToketInstance" />
        <input type="submit" value="Submit" />
      </form>
    </FormProvider>
  );
};

export default LoginForm;
