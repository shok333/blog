const HOST = 'example.com';

export const jsonPostApi = <T>(path: string, data: T) => {
  return fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}