// Export Constants
import callApi from '../../util/apiCaller';
import { debug } from 'util';

export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_GUIDE = 'FETCH_USER_GUIDE';
export const GET_TICKET = 'GET_TICKET';
export const GET_CRYPTO = 'GET_CRYPTO';
export const ADD_ORDERS = 'ADD_ORDERS';
export const ADD_ERROR = 'ADD_ERROR';
export const ADD_TICKETS = 'ADD_TICKETS';
export const ADD_REFERRAL = 'ADD_REFERRAL';
export const ADD_SETTINGS = 'ADD_SETTINGS';
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

export function addErrors(errors) {
  return {
    type: ADD_ERROR,
    errors,
  };
}

export function addProject(project) {
  return {
    type: FETCH_PROJECT,
    project,
  };
}

export function addUsers(users, refunds, settings, referralRequests) {
  return {
    type: FETCH_USERS,
    users,
    refunds,
    settings,
    referralRequests,
  };
}

export function addUser(res) {
  return {
    type: FETCH_USER,
    res,
  };
}

export function addGuide(guide) {
  return {
    type: FETCH_USER_GUIDE,
    guide,
  };
}

export function addReferral(referrals, settings, referralRequests) {
  return {
    type: ADD_REFERRAL,
    referrals,
    settings,
    referralRequests,
  };
}

export function getProject(res) {
  return {
    type: FETCH_PROJECT,
    res,
  };
}

export function getCryptoAddr(crypto) {
  return {
    type: GET_CRYPTO,
    crypto,
  }
}

export function addOrders(orders) {
  return {
    type: ADD_ORDERS,
    orders,
  };
}

export function addSettings(settings) {
  return {
    type: ADD_SETTINGS,
    settings,
  };
}

export function addTickets(tickets) {
  return  {
    type: ADD_TICKETS,
    tickets,
  };
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
      dispatch(addUsers(res.users, res.refunds, res.settings, res.referralRequests));
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

export function fetchOrders() {
  return (dispatch) => {
    return callApi('orders').then(res => {
      dispatch(addOrders(res.orders));
      return res;
    });
  };
}

export function fetchOrdersForReferral() {
  return (dispatch) => {
    return callApi('ordersForReferral').then(res => {
      dispatch(addOrders(res.orders));
      return res;
    });
  };
}

export function fetchSettings() {
  return (dispatch) => {
    return callApi('getSettings').then(res => {
      dispatch(addSettings(res.settings));
      return res;
    });
  }
}

export function fetchTickets() {
  return (dispatch) => {
    return callApi('tickets').then(res => {
      dispatch(addTickets(res.tickets));
      return res.tickets;
    });
  };
}

export function deleteTickets(order) {
  return (dispatch) => {
    return callApi('deleteOrder', 'POST', { order }).then((res) => {
      if (res.errors) {
        return res.errors;
      }
      dispatch(addOrders(res.orders));
      return 'Successfully deleted';
    });
  };
}

export function fetchProject(id) {
  return (dispatch) => {
    return callApi(`project/${id}`).then(res => {
      dispatch(getProject(res));
      return res;
    });
  };
}

export function deleteProject(_id) {
  return (dispatch) => {
    return callApi('deleteProjects', 'POST', { _id }).then((res) => {
      if (res.errors) {
        return res.errors;
      }
      dispatch(addProjects(res.projects));
      return 'Successfully deleted';
    });
  };
}

export function setFeaturedProject(_id, set) {
  return (dispatch) => {
    return callApi('setFeaturedProject', 'POST', { _id, set }).then((res) => {
      if (res.errors) {
        return res.errors;
      }
      dispatch(addProjects(res.projects));
      return 'Successfully set';
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

export function fetchUserGuide() {
  return (dispatch) => {
    return callApi('user/guide').then(res => {
      dispatch(addGuide(res.guide));
    });
  };
}

export function fetchReferrals() {
  return (dispatch) => {
    return callApi('getReferrals').then(res => {
      dispatch(addReferral(res.referrals, res.settings, res.referralRequests));
    });
  };
}
