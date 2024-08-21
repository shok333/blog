import { getJSONConfig } from ".."

const PATH = '/posts'

export const postsShowApiConfig = (slug: string) => {
  return getJSONConfig(`${PATH}/${slug}`, {})
}