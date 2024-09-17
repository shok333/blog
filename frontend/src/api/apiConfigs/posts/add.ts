import { postFormDataConfig } from ".."
import { POSTS } from "../../../constants/path"

export const postsAddApiConfig = (form: FormData) => {
  return postFormDataConfig(POSTS, form)
}