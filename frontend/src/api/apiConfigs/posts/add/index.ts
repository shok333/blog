import { postJSONConfig } from "../..";
import { IPostApiConfig } from "../../../../types/apiConfig";
import { IPost } from "../../../../types/post";


const PATH = '/posts/add'

export const postsAddApiConfig = (data: IPost): IPostApiConfig<IPost> => {
  return postJSONConfig(PATH, data)
}