import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@src/components/Button/Button";
import InputText from "@src/components/formInputs/InputText/InputText";
import schema from "@src/features/account/components/LoginForm/_yupSchema";
import useGetAccountSettingsQuery from "@src/features/account/hooks/useGetAccountSettingsQuery";
import { IAuthData } from "@src/types/account.types";

import * as S from "./LoginForm.styled";

const LoginForm: FC = () => {
  const [authData, setAuthData] = useState<IAuthData | null>(null);
  const accountSettingsRes = useGetAccountSettingsQuery(authData);

  useEffect(() => {
    if (accountSettingsRes.isSuccess) setAuthData(null);
  }, [accountSettingsRes.isSuccess]);

  const methods = useForm<IAuthData>({
    defaultValues: {
      idInstance: "",
      apiToketInstance: ""
    },
    resolver: yupResolver(schema)
  });

  const submitHandler: SubmitHandler<IAuthData> = authData => {
    setAuthData(authData);
  };

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={methods.handleSubmit(submitHandler)}>
        <S.Title>Войти при помощи аккаунта GREEN-API</S.Title>
        <InputText name="idInstance" placeholder="Номер аккаунта" />
        <InputText name="apiToketInstance" placeholder="Ключ доступа" />
        <Button text="Войти" type="submit" />
      </S.Form>
    </FormProvider>
  );
};

export default LoginForm;
