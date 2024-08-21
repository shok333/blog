import { QueryKey, useQuery } from "@tanstack/react-query"
import { IGetApiConfig } from "../../../types/apiConfig"

export interface IURLSearchParamsTRequest {
  [key: string]: string;
}

export const useCustomQuery = <TRequest extends IURLSearchParamsTRequest, TResponse>(
  queryKey: QueryKey,
  {
    url,
    method,
    headers,
    queryParams,
  }: IGetApiConfig<TRequest>
) => {
  const query = useQuery<TResponse>({
    queryKey,
    queryFn: async (): Promise<TResponse> => {
      const urlSearchParams = new URLSearchParams(queryParams).toString();
      const urlWithSearchParams = `${url}?${urlSearchParams}`;

      const response = await fetch(urlWithSearchParams, {
        method,
        headers
      });

      const data: TResponse = await response.json();

      return data;
    },
  });

  return query;
}