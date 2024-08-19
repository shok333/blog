import { PostItemType } from "../constants/post";

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