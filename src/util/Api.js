import fetch from 'isomorphic-fetch';

export function getToken() {
  const session = sessionStorage.getItem("session");
  return session ? JSON.parse(session).token : ''
}

export function getApi(path) {
  return fetch(path, {
    method: 'GET',
    mode: 'CORS',
    headers: {
      'Authorization': 'Bearer ' + getToken(),
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json())
}

export function postApi(path, params) {
  return fetch(path, {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(params),
    headers: {
      'Authorization': 'Bearer ' + getToken(),
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json())
}
