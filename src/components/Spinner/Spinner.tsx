import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import { ReactComponent as SpinnerSVG } from "@src/assets/img/icons/spinner.svg";
import IconButton from "@src/components/IconButton/IconButton";

import * as S from "./Spinner.styled";

const Spinner: FC = () => {
  return (
    <S.Container>
      <IconButton>
        <SpinnerSVG />
      </IconButton>
    </S.Container>
  );
};

export default Spinner;
