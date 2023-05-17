import { FC } from "react";

import Head from "@src/features/messaging/components/ChatsList/Head/Head";
import List from "@src/features/messaging/components/ChatsList/List/List";
import NewChat from "@src/features/messaging/components/ChatsList/NewChat/NewChat";

import * as S from "./ChatsList.styled";

const ChatsList: FC = () => {
  return (
    <S.Container>
      <Head />
      <NewChat />
      <List />
    </S.Container>
  );
};

export default ChatsList;
