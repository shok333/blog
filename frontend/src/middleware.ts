// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { addCsrfTokenMiddleware } from './middlewares/addCsrfTokenMiddleware';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  await addCsrfTokenMiddleware(request, response)

  return response;
}