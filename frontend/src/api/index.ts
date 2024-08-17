import cookie from 'cookie';

const HOST = 'http://127.0.0.1:8000';

export const getApi = <T>(path: string) => {
  return fetch(`${HOST}${path}`)
}

export const jsonPostApi = <T>(path: string, data: T) => {
  const cookies = cookie.parse(document.cookie);

  return fetch(`${HOST}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': cookies?.csrftoken,
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })
}