import * as yup from "yup";

import { TInput } from "./NewChat";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const phoneRegEx = /^\\(?\\d{3}\\)?[-\\/\\.\\s]?\\d{3}[-\\/\\.\\s]?$/;
const schema: yup.ObjectSchema<TInput> = yup.object({
  input: yup
    .string()
    .required()
    .matches(phoneRegEx, "Phone number is not valid")
});

export default schema;
