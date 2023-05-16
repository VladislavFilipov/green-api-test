import { FC, HTMLAttributes, PropsWithChildren } from "react";

import * as S from "./Text.styled";

export type TSize = "xs" | "s" | "m" | "l" | "xl";

interface ITextProps {
  size?: TSize;
  inline?: boolean;
}

const Text: FC<PropsWithChildren<ITextProps> & HTMLAttributes<HTMLElement>> = ({
  size = "m",
  children,
  inline = false,
  ...props
}) => {
  return (
    <S.Text as={inline ? "span" : "div"} size={size} {...props}>
      {children}
    </S.Text>
  );
};

export default Text;
