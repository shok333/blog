'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { IApiConfig } from '../../types/apiConfig'

interface IReactQueryClientProvider {
  children: React.ReactNode;
  csrftoken?: string;
}

export default function ReactQueryClientProvider({
  children,
  csrftoken = '',
}: IReactQueryClientProvider) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      mutations: {
        mutationFn: async (config: unknown): Promise<unknown> => {
          const { method, url, headers, data } = config as IApiConfig<unknown>;

          try {
            if (method === 'POST') {
              return fetch(url, {
                method: 'POST',
                headers: {
                  'X-CSRFToken': csrftoken,
                  ...headers,
                },
                credentials: 'include',
                body: JSON.stringify(data)
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