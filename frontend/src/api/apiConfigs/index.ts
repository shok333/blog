import { HOST } from "../../constants/url"
import { IGetApiConfig, IPostApiConfig } from "../../types/apiConfig"
import { IURLSearchParamsTRequest } from "../hooks/useCustomQuery"


export const postJSONConfig = <T>(
  path: string,
  data: T
): IPostApiConfig<T> => {
  return {
    url: `${HOST}${path}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  }
}

export const getJSONConfig = <T extends IURLSearchParamsTRequest>(
  path: string,
  queryParams?: T
): IGetApiConfig<T> => {
  const config: IGetApiConfig<T> = {
    url: `${HOST}${path}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (queryParams) {
    config.queryParams = queryParams
  }

  return config;
}