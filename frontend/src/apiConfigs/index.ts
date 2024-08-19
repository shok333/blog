import { HOST } from "../constants/url";
import { IApiConfig } from "../types/apiConfig";

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