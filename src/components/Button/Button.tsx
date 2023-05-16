import { ButtonHTMLAttributes, FC } from "react";

import { ButtonWrap } from "@src/components/Button/_elements/ButtonWrap.styled";
import Text from "@src/components/Text/Text";

type TProps = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button: FC<TProps> = ({ text }) => {
  return (
    <ButtonWrap>
      <Text size="s">{text}</Text>
    </ButtonWrap>
  );
};

export default Button;
