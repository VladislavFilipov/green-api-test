import { FC } from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@src/components/Button/Button";
import Spinner from "@src/components/Spinner/Spinner";
import StatusLabel from "@src/components/StatusLabel/StatusLabel";
import InputText from "@src/components/formInputs/InputText/InputText";
import schema from "@src/features/account/components/LoginForm/_yupSchema";
import useGetAccountSettings from "@src/features/account/queries/useGetAccountSettings";
import { IAuthData } from "@src/types/account.types";

import * as S from "./LoginForm.styled";

const LoginForm: FC = () => {
  const [getAccountSettings, isLoading, error] = useGetAccountSettings();

  const methods = useForm<IAuthData>({
    defaultValues: {
      idInstance: "",
      apiToketInstance: ""
    },
    resolver: yupResolver(schema)
  });

  const submitHandler: SubmitHandler<IAuthData> = authData => {
    getAccountSettings(authData);
  };

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={methods.handleSubmit(submitHandler)}>
        <S.Title>
          Войти при помощи аккаунта <span>GREEN-API</span>
        </S.Title>
        <InputText name="idInstance" placeholder="Номер аккаунта" />
        <InputText name="apiToketInstance" placeholder="Ключ доступа" />

        {error && <StatusLabel status="error">{error}</StatusLabel>}
        {!isLoading ? <Button text="Войти" type="submit" /> : <Spinner />}
      </S.Form>
    </FormProvider>
  );
};

export default LoginForm;
