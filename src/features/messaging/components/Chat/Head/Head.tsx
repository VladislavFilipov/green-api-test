import { FC } from "react";

import Text from "@src/components/Text/Text";
import { IChat } from "@src/types/chat.types";

import * as S from "./Head.styled";

const Head: FC<{ chat: IChat }> = ({ chat }) => {
  return (
    <S.Head>
      <Text>{chat?.number}</Text>
    </S.Head>
  );
};

export default Head;
