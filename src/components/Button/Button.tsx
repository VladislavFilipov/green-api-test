import { FC, PropsWithChildren } from "react";

import { ButtonWrap } from "@src/components/Button/_elements/ButtonWrap.styled";

type TProps = {
  text: string;
};
const Button: FC<TProps> = ({ text }) => {
  return <ButtonWrap>{text}</ButtonWrap>;
};

export default Button;
