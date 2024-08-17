import { getApi } from "..";
import { ICsrfTokenResponse } from "../../types/csrfToken";

const PATH = '/csrftoken'

export const getAddCsrfToken = async (): Promise<ICsrfTokenResponse> => {
  const response = await getApi(PATH)

  return await response.json();
}