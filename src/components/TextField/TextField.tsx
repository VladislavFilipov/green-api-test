import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  PropsWithChildren,
  TextareaHTMLAttributes,
  useRef
} from "react";

import useAutosizeTextArea from "@src/hooks/useAutosizeTextArea";

import * as S from "./TextField.styled";

type TProps = {
  label?: string;
  isPassword?: boolean;
  error?: string;
  placeholder?: string;
  isTextarea?: boolean;
  value: string;
  onChange: (value: string) => void;
  // onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const DEFAULT_PLACEHOLDER = "Введите текст";

const TextFieldInput: FC<
  TProps & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">
> = ({
  label,
  isPassword,
  error,
  placeholder = DEFAULT_PLACEHOLDER,
  isTextarea = false,
  // handleChange,
  onChange,
  ...inputProps
}) => {
  return (
    <TextFieldBody label={label} error={error}>
      <S.Input
        {...inputProps}
        isTextarea={isTextarea}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e.target?.value);
        }}
        type={isPassword ? "password" : "text"}
        placeholder={label ?? placeholder}
        hasError={!!error}
      />
    </TextFieldBody>
  );
};

const TextFieldTextarea: FC<
  TProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange">
> = ({
  label,
  error,
  placeholder = DEFAULT_PLACEHOLDER,
  isTextarea = false,
  value,
  onChange,
  ...inputProps
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);
  return (
    <TextFieldBody label={label} error={error}>
      <S.Textarea
        {...inputProps}
        isTextarea={isTextarea}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          onChange(e.target?.value);
        }}
        ref={textAreaRef}
        placeholder={label ?? placeholder}
        hasError={!!error}
      />
    </TextFieldBody>
  );
};

const TextFieldBody: FC<PropsWithChildren<Pick<TProps, "label" | "error">>> = ({
  label,
  error,
  children
}) => {
  return (
    <S.Wrap>
      {label && <S.Label>{label}</S.Label>}
      {children}
      {error && <S.Error>{error}</S.Error>}
    </S.Wrap>
  );
};

export { TextFieldInput, TextFieldTextarea };
