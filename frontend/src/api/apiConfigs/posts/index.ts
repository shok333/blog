import { getJSONConfig } from ".."
import { POSTS } from "../../../constants/path";
import { IPaginationQuery } from "../../../types/pagination"

type IPostsApiConfigProperty = {
  [P in keyof IPaginationQuery]: string | number;
};

export const postsApiConfig = (query: IPostsApiConfigProperty) => {
  return getJSONConfig(POSTS, {
    page: String(query.page),
    limit: String(query.limit),
  })
}