import { useState } from "react";

type TRequestStatus = "waiting" | "loading" | "success" | "error";
const useRequestStatus = (): [
  boolean,
  string | null,
  (status: TRequestStatus, error?: string) => void
] => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateStatus = (status: TRequestStatus, error?: string) => {
    switch (status) {
      case "loading":
        setError(null);
        setIsLoading(true);
        break;
      case "success":
        setError(null);
        setIsLoading(false);
        break;
      case "error":
        setError(error ?? "Ошибка!");
        setIsLoading(false);
        break;
      case "waiting":
        setError(null);
        setIsLoading(false);
        break;

      default:
        break;
    }
  };

  return [isLoading, error, updateStatus];
};

export default useRequestStatus;
