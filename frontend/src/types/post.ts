import { IURLSearchParamsTRequest } from "../api/hooks/useCustomQuery";
import { PostItemType } from "../constants/post";
import { IPagination } from "./pagination";

export interface IPostIBodyItem {
  type: PostItemType;
  value: string;
  id: string;
}

export interface IPost {
  title: string;
  content: Array<IPostIBodyItem>;
  author: string;
}

export interface IPostsItem {
  title: string;
  author: string;
  slug: string;
}

export interface IPaginatedPosts {
  data: Array<IPostsItem>;
  pagination: IPagination;
}

export interface IPostsShowApiConfigQuery extends IURLSearchParamsTRequest {

}