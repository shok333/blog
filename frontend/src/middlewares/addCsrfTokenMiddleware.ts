import { NextRequest, NextResponse } from "next/server";
import { ICsrfTokenResponse } from "../types/csrfToken";
import { CSRF_TOKEN_COOKIE, HOST, X_CSRF_TOKEN } from "../constants/url";
import { isPagePathname } from "../utils/isPagePathName";

// TODO Может вынести куда-то PATH и getAddCsrfToken
const PATH = '/csrftoken'

export const getAddXcsrfToken = async (): Promise<ICsrfTokenResponse> => {
  const response = await fetch(`${HOST}${PATH}`)

  return await response.json();
}

export const addCsrfTokenMiddleware = async (request: NextRequest, response: NextResponse) => {
  if (isPagePathname(request.nextUrl.pathname)) {
    try {
      const { csrfToken } = await getAddXcsrfToken();

      response.headers.set(X_CSRF_TOKEN, csrfToken);
      response.cookies.set(CSRF_TOKEN_COOKIE, csrfToken, {
        path: '/',
        httpOnly: true,
      });
    } catch (err) {

    }
  }
}