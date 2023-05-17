import { useCallback, useState } from "react";

import chatApi from "@src/api/chat.api";
import { IContactInfo } from "@src/types/account.types";

const useCheckNumber = () => {
  const [isLoading, setInLoading] = useState<boolean>(false);
  const [contact, setContact] = useState<IContactInfo | null>(null);

  const checkNumber = useCallback(async (input: string) => {
    setInLoading(true);
    try {
      const phoneNumber = +input.replace(/\D/g, "");
      const chatId = phoneNumber + "@c.us";

      const { existsWhatsapp } = await chatApi.checkPhoneNumber({
        phoneNumber
      });

      if (!existsWhatsapp) {
        setContact(null);
        setInLoading(false);
        return;
      }

      const contact = await chatApi.checkContact({
        chatId
      });

      if (contact) setContact(contact);
      else setContact(null);
    } catch (error) {
      console.log(error);
    }
    setInLoading(false);
  }, []);

  return { checkNumber, contact, setContact, isLoading };
};

export default useCheckNumber;
