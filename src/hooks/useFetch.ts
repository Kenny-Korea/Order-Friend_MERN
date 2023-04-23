import { useCallback, useState } from "react";
import { API_BASE_URL } from "../global/constants";

type APIMethodType = "GET" | "POST" | "PATCH" | "DELETE";

const useFetch = () => {
  const [isLoading, setIsLoading] =
    useState<React.SetStateAction<boolean>>(false);
  const [error, setError] = useState<React.SetStateAction<boolean>>(false);

  const sendRequest = useCallback(
    async (
      url: string,
      method: APIMethodType = "GET",
      headers = {},
      body: any
    ) => {
      setIsLoading(true);

      try {
        const response = await fetch(`${API_BASE_URL + url}`, {
          method,
          headers,
          body,
        });

        const responseData: any = response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(false);
  };

  return { isLoading, error, sendRequest, clearError };
};

export default useFetch;
