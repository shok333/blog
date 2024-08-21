import { IURLSearchParamsTRequest } from "../api/hooks/useCustomQuery";

export interface IPaginationQuery extends IURLSearchParamsTRequest {
  page: string;
  limit: string;
}

export interface IPagination extends IURLSearchParamsTRequest {
  page: string;
  limit: string;
  total: string;
  pages: string;
}