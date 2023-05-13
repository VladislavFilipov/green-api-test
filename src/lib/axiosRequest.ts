import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const baseURL = import.meta.env.VITE_HOST as string;

const axios = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const request = async <T>(options: AxiosRequestConfig): Promise<T> => {
  try {
    const res: AxiosResponse = await axios<T>(options);
    return res.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export default request;