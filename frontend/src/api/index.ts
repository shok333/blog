const HOST = 'http://localhost:8000';

export const jsonPostApi = <T>(path: string, data: T) => {
  return fetch(`${HOST}/api${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}