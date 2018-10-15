import fetch from 'isomorphic-fetch';
import Config from '../../server/config';

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';

export function fetchAPI(endpoint, method = 'get', body, auth) {
  let token = '';
  try {
    if (typeof(window) !== "undefined") {
      const tokenData = window.localStorage.getItem('smartproject');
      token = JSON.parse(tokenData).token;
    }
  } catch (err) {
    token = '';
  }
  if (auth) {
    token = auth;
  }
  return fetch(endpoint, {
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + token,
      mode: 'no-cors',
    },
    method,
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  })
  .then(
    response => response,
    error => error
  );
}

export default function callApi(endpoint, method = 'get', body, auth = '') {
  return fetchAPI(`${API_URL}/${endpoint}`, method, body, auth);
}

