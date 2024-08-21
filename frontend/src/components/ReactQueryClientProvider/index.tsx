'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { X_CSRF_TOKEN } from '../../constants/url'
import { IPostApiConfig } from '../../types/apiConfig'

interface IReactQueryClientProvider {
  children: React.ReactNode;
  xCsrfToken?: string;
}

export default function ReactQueryClientProvider({
  children,
  xCsrfToken = '',
}: IReactQueryClientProvider) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      mutations: {
        mutationFn: async (config: unknown): Promise<unknown> => {
          const { method, url, headers, data } = config as IPostApiConfig<unknown>;

          try {
            if (method === 'POST') {
              return fetch(url, {
                method: 'POST',
                headers: {
                  [X_CSRF_TOKEN]: xCsrfToken,
                  ...headers,
                },
                body: JSON.stringify(data),
                credentials: 'include',
              })
            }
          } catch (error) {
            return Promise.reject(error)
          }
        },
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}