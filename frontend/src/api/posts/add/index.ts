import { jsonPostApi } from "../..";
import { IPost } from "../../../types/post";

const PATH = '/posts/add'

export const postsAddApi = async (data: IPost): Promise<IPost> => {
  try {
    const response = await jsonPostApi(PATH, data)

    return await response.json();
  } catch (error) {
    return Promise.reject(error)
  }
}