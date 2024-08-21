interface IURLSearchParamsTRequest {
  [key: string]: string;
}

export interface IGetApiConfig<T extends IURLSearchParamsTRequest> {
  url: string,
  method: string,
  headers: HeadersInit,
  queryParams?: T
}

export interface IPostApiConfig<T> {
  url: string,
  method: string,
  headers: object,
  data: T
}