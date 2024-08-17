export interface IApiConfig<T> {
  url: string,
  method: string,
  headers: object,
  data: T
}