// Export Constants
import callApi from '../../util/apiCaller';
import { debug } from 'util';

export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';

export const GET_TICKET = 'GET_TICKET';
export const GET_CRYPTO = 'GET_CRYPTO';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function addProjects(projects) {
  return {
    type: FETCH_PROJECTS,
    projects,
  };
}

export function addProject(project) {
  return {
    type: FETCH_PROJECT,
    project,
  };
}

export function addUsers(users) {
  return {
    type: FETCH_USERS,
    users,
  };
}

export function addUser(res) {
  return {
    type: FETCH_USER,
    res,
  };
}

export function getProject(project) {
  return {
    type: FETCH_PROJECT,
    project,
  };
}

export function getCryptoAddr(crypto) {
  return {
    type: GET_CRYPTO,
    crypto,
  }
}

export function fetchProjects() {
  return (dispatch) => {
    return callApi('projects').then(res => {
      dispatch(addProjects(res.projects));
      return res.projects;
    });
  };
}

export function fetchUsers() {
  return (dispatch) => {
    return callApi('users').then(res => {
      dispatch(addUsers(res.users));
      return res.users;
    });
  };
}

export function fetchUser() {
  return (dispatch) => {
    return callApi('user').then(res => {
      dispatch(addUser(res));
      return res;
    });
  };
}

export function fetchProject(id) {
  return (dispatch) => {
    return callApi(`project/${id}`).then(res => {
      dispatch(getProject(res.project));
      return res.project;
    });
  };
}


export function fetchCryptoAddr(email, projectID) {
  return (dispatch) => {
    return callApi(`users/getCryptoAddr/${email}/${projectID}`).then(res => {
      dispatch(getCryptoAddr(res.crypto));
      return res.crypto;
    });
  };
}
