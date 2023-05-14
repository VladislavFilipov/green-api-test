import { FC, InputHTMLAttributes, forwardRef } from "react";

import * as S from "./TextField.styled";

type TProps = {
  label?: string;
  isPassword?: boolean;
  error?: string;
  isTextarea?: boolean;
};

type TInputProps = TProps & InputHTMLAttributes<HTMLInputElement>;
const TextFieldWithRef = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      label = "Введите текст",
      isPassword,
      error,
      isTextarea = false,
      ...inputProps
    },
    ref
  ) => {
    return (
      <S.Wrap>
        {label && <S.Label>{label}</S.Label>}
        <S.Input
          {...inputProps}
          type={isPassword ? "password" : "text"}
          ref={ref}
          placeholder={label}
        />
        {error && <S.Error>{error}</S.Error>}
      </S.Wrap>
    );
  }
);
TextFieldWithRef.displayName = "TextFieldWithRef";

export default TextFieldWithRef;
