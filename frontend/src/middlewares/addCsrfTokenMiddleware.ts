import { NextRequest, NextResponse } from "next/server";
import { ICsrfTokenResponse } from "../types/csrfToken";

// TODO Может вынести куда-то PATH и getAddCsrfToken
const PATH = '/csrftoken'

export const getAddCsrfToken = async (): Promise<ICsrfTokenResponse> => {
  const response = await fetch(PATH)

  return await response.json();
}

export const addCsrfTokenMiddleware = async (request: NextRequest, response: NextResponse) => {
  if (
    request.nextUrl.pathname.startsWith('/')
    && !request.nextUrl.pathname.startsWith('/api')
    && !request.nextUrl.pathname.startsWith('/static')
    && !request.nextUrl.pathname.includes('/_next/')
  ) {
    try {
      const { csrfToken } = await getAddCsrfToken();

      response.cookies.set('csrftoken', csrfToken);
    } catch (err) {

    }
  }
}