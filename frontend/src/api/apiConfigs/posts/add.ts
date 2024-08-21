import { postJSONConfig } from ".."
import { IPost } from "../../../types/post"

const PATH = '/posts/add'

export const postsAddApiConfig = (data: IPost) => {
  return postJSONConfig(PATH, data)
}