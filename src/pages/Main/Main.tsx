import { FC } from "react";

import { Chat, Dialogs } from "@src/features/messaging";
import useChatsStore from "@src/features/messaging/hooks/useChatsStore";

const Main: FC = () => {
  const cureentDialog = useChatsStore(s => s.current);
  return (
    <div>
      <Dialogs />
      <br />
      <br />
      <br />
      {cureentDialog && <Chat />}
    </div>
  );
};

export default Main;
