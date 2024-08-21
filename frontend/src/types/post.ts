import { PostItemType } from "../constants/post";
import { IPagination } from "./pagination";

export interface IPostIBodytem {
  type: PostItemType;
  value: string;
  id: string;
}

export interface IPost {
  title: string;
  body: Array<IPostIBodytem>;
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