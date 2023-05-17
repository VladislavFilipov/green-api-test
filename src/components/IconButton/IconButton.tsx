import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import * as S from "./IconButton.styled";

const IconButton: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, ...props }) => {
  return <S.Container {...props}>{children}</S.Container>;
};

export default IconButton;
