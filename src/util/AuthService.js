import React from 'react'
import { Redirect } from 'react-router-dom'
import fetch from 'isomorphic-fetch';

export function authenticateUser(username, password) {
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
    if (res.status == 200) {
      res.json().then(response => {
        sessionStorage.setItem("session", JSON.stringify({
          "username": username,
          "token": response.access_token
        }));
        return response
      })
    } else if (res.status == 400) {
      throw new Error("Invalid credentials.");
    } else {
      throw new Error("Internal server error.");
    }
  })
}

export function isAuthenticated() {
  return sessionStorage.getItem("session") ? true : false
}

export function getUsername() {
  const session = sessionStorage.getItem("session");
  return session ? JSON.parse(session).username : ''
}

export function logout() {
  return sessionStorage.clear();
}
