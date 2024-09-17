import { postFormDataConfig } from ".."

const PATH = '/api/v1/posts'

export const postsAddApiConfig = (form: FormData) => {
  return postFormDataConfig(PATH, form)
}