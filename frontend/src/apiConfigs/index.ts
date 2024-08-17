import { IApiConfig } from "../types/apiConfig";

const HOST = 'http://127.0.0.1:8000';

export const postJSONConfig = <T>(path: string, data: T): IApiConfig<T> => {
  return {
    url: `${HOST}${path}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  }
}