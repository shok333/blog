import { postJSONConfig } from "../..";
import { IApiConfig } from "../../../types/apiConfig";
import { IPost } from "../../../types/post";

const PATH = '/posts/add'

export const postsAddApiConfig = (data: IPost): IApiConfig<IPost> => {
  return postJSONConfig(PATH, data)
}