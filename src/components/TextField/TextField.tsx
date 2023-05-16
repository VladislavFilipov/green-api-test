import { FC, InputHTMLAttributes, forwardRef } from "react";

import * as S from "./TextField.styled";

type TProps = {
  label?: string;
  isPassword?: boolean;
  error?: string;
  placeholder?: string;
  isTextarea?: boolean;
};

const TextField: FC<TProps & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  isPassword,
  error,
  placeholder = "Введите текст",
  isTextarea = false,
  ...inputProps
}) => {
  return (
    <S.Wrap>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        {...inputProps}
        type={isPassword ? "password" : "text"}
        placeholder={label ?? placeholder}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Wrap>
  );
};

export default TextField;
