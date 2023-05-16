import chatApi from "@src/api/chat.api";
import { IContact } from "@src/types/account.types";
import { IChat } from "@src/types/chat.types";
import { IIncomingMessage } from "@src/types/message.types";

const getChatsListFromContacts = async (
  chats: IChat[],
  contacts: IContact[]
): Promise<IChat[]> => {
  return await Promise.all(
    contacts.map(async (contact): Promise<IChat> => {
      const history = await chatApi.getChatHistory({
        chatId: contact.id,
        count: 10
      });
      return {
        chatId: contact.id,
        number: contact.id.slice(0, -4),
        name: contact.name,
        history: history
      };
    })
  );
};

export default getChatsListFromContacts;
