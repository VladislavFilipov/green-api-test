import { FC, PropsWithChildren } from "react";

import * as S from "./StatusLabel.styled";

export type TStatus = "success" | "warning" | "error";

const StatusLabel: FC<
  PropsWithChildren<{
    status: TStatus;
  }>
> = ({ status, children }) => {
  return <S.Conatiner status={status}>{children}</S.Conatiner>;
};

export default StatusLabel;
