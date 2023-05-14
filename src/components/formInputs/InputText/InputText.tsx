import { FC, forwardRef, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

import TextFieldWithRef from "@src/components/TextField/TextFieldWithRef";

type TProps = {
  name: string;
  label?: string;
};

const InputText: FC<TProps> = ({ name, label = "Введите текст" }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <TextFieldWithRef
      label={label}
      error={errors[name]?.message?.toString()}
      {...register(name)}
    />
  );
};

export default InputText;
