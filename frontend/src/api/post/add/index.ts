import { jsonPostApi } from "../..";
import { IPost } from "../../../types/post";

const PATH = 'add'

export const postAddApi = async (data: IPost): Promise<IPost> => {
  const response = await jsonPostApi(PATH, data)

  return await response.json();
}