import { getJSONConfig } from ".."

const PATH = 'api/v1/posts'

export const postsShowApiConfig = (slug: string) => {
  return getJSONConfig(`${PATH}/${slug}`, {})
}