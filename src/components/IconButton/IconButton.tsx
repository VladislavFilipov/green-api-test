import {
  ButtonHTMLAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren
} from "react";

import * as S from "./IconButton.styled";

const IconButton: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default IconButton;
