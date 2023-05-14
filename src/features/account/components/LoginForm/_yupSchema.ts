import * as yup from "yup";

import { IAuthData } from "@src/types/account.types";

const schema: yup.ObjectSchema<IAuthData> = yup.object({
  idInstance: yup.string().required(),
  apiToketInstance: yup.string().required()
});

export default schema;
