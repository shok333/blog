import { PostItemType } from "../constants/post";

export interface IPostItem {
  type: PostItemType;
  value: string;
  id: string;
}