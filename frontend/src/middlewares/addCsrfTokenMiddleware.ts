import { NextRequest, NextResponse } from "next/server";
import { getAddCsrfToken } from "../api/getAddCsrfToken";

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