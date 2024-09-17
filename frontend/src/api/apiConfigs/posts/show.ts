import { getJSONConfig } from ".."
import { POSTS } from "../../../constants/path"

export const postsShowApiConfig = (slug: string) => {
  return getJSONConfig(`${POSTS}/${slug}`, {})
}