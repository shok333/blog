import { getJSONConfig } from ".."
import { IPaginationQuery } from "../../../types/pagination"

const PATH = '/posts'

type IPostsApiConfigProperty = {
  [P in keyof IPaginationQuery]: string | number;
};

export const postsApiConfig = (query: IPostsApiConfigProperty) => {
  return getJSONConfig(PATH, {
    page: String(query.page),
    limit: String(query.limit),
  })
}