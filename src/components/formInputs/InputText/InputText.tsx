import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";

import { TextFieldInput } from "@src/components/TextField/TextField";

type TProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

const InputText: FC<TProps> = ({ name, label, placeholder }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextFieldInput
          // {...field}
          label={label}
          value={field.value}
          onChange={field.onChange}
          error={errors[name]?.message?.toString()}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default InputText;
