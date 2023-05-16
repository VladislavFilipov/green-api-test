import { FC, forwardRef, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

import TextFieldWithRef from "@src/components/TextField/TextFieldWithRef";

type TProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

const InputText: FC<TProps> = ({ name, label, placeholder }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <TextFieldWithRef
      label={label}
      error={errors[name]?.message?.toString()}
      {...register(name)}
      placeholder={placeholder}
    />
  );
};

export default InputText;
