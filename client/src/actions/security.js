import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest/client';
import authentication from 'feathers-authentication/client';

import {
  ROOT_URL,
  API_KEY,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './';

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    payload: {
      isFetching: true,
      isAuthenticated: false,
      creds
    }
  }
}

function receiveLogin(user, token) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      isFetching: false,
      isAuthenticated: true,
      token: token,
      user
    }
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    payload: {
      isFetching: false,
      isAuthenticated: false,
      message
    }
  }
}

export function login(creds) {
  const host = ROOT_URL;
  const app = feathers()
    .configure(rest(host).fetch(window.fetch.bind(window)))
    .configure(hooks())
    .configure(authentication({
      storage: window.localStorage
    }));

  const request = app.authenticate({
    type: 'local',
    'email': creds.username,
    'password': creds.password
  }).then(function (result) {
    return receiveLogin(result.data, result.token);
  }).catch(function (result) {
    return loginError(result.message);
  });

  return request;
}
