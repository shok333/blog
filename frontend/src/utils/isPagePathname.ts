export const isPagePathname = (pathname: string) => (
  pathname.startsWith('/')
  && !pathname.startsWith('/api')
  && !pathname.startsWith('/static')
  && !pathname.includes('/_next/')
  && !pathname.includes('.ico')
)