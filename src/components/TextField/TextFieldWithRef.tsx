import { InputHTMLAttributes, forwardRef } from "react";

import * as S from "./TextField.styled";

type TProps = {
  label?: string;
  isPassword?: boolean;
  error?: string;
  placeholder?: string;
  isTextarea?: boolean;
};

type TInputProps = TProps & InputHTMLAttributes<HTMLInputElement>;
const TextFieldWithRef = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      label,
      isPassword,
      error,
      placeholder = "Введите текст",
      isTextarea = false,
      ...inputProps
    },
    ref
  ) => {
    return (
      <S.Wrap>
        {label && <S.Label size="xs">{label}</S.Label>}
        <S.Input
          {...inputProps}
          type={isPassword ? "password" : "text"}
          ref={ref}
          placeholder={label ?? placeholder}
          hasError={!!error}
        />
        {error && <S.Error size="xs">{error}</S.Error>}
      </S.Wrap>
    );
  }
);
TextFieldWithRef.displayName = "TextFieldWithRef";

export default TextFieldWithRef;
