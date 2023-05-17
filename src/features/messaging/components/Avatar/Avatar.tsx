import { FC } from "react";

import { ReactComponent as AvatarPlaceholderSVG } from "@src/assets/icons/avatar-placeholder.svg";

import * as S from "./Avatar.styled";

type TProps = { url?: string };
const Avatar: FC<TProps> = ({ url }) => {
  return (
    <S.Container>
      {url ? <S.Image src={url} /> : <AvatarPlaceholderSVG />}
    </S.Container>
  );
};

export default Avatar;
