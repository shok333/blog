import { HOST } from "../../constants/url"
import { IGetApiConfig, IPostApiConfig } from "../../types/apiConfig"
import { IURLSearchParamsTRequest } from "../hooks/useCustomQuery"


export const postJSONConfig = (
  path: string,
  body: string
): IPostApiConfig => {
  return {
    url: `${HOST}${path}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  }
}

export const postFormDataConfig = (
  path: string,
  body: FormData
): IPostApiConfig => {
  return {
    url: `${HOST}${path}`,
    method: 'POST',
    headers: {},
    body,
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