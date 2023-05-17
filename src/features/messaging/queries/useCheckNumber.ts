import { useCallback, useState } from "react";

import chatApi from "@src/api/chat.api";
import useRequestStatus from "@src/hooks/useRequestStatus";
import { IContactInfo } from "@src/types/account.types";

const useCheckNumber = () => {
  const [isLoading, error, updateStatus] = useRequestStatus();
  const [contact, setContact] = useState<IContactInfo | null>(null);

  const checkNumber = useCallback(async (input: string) => {
    updateStatus("loading");
    try {
      const phoneNumber = +input.replace(/\D/g, "");
      const chatId = phoneNumber + "@c.us";

      const { existsWhatsapp } = await chatApi.checkPhoneNumber({
        phoneNumber
      });

      if (!existsWhatsapp) {
        setContact(null);
        updateStatus("error");
        return;
      }

      const contact = await chatApi.checkContact({
        chatId
      });

      if (contact) {
        setContact(contact);
        updateStatus("success");
      } else {
        setContact(null);
        updateStatus("error");
      }
    } catch (error) {
      console.log(error);
      updateStatus("error");
    }
  }, []);

  return { checkNumber, contact, setContact, isLoading, error };
};

export default useCheckNumber;
