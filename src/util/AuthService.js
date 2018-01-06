import fetch from 'isomorphic-fetch';

export function AuthenticateUser(username, password) {
  return fetch('/api/v2/oauth2/access_token', {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify({
      "username": username,
      "password": password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    console.log(res);
    return res;
  }).catch(err => err);
}

export function isAuthenticated() {
  return false
}
