import { REQUEST_USER, RECEIVE_USER, REQUEST_USER_REPOS, RECEIVE_USER_REPOS } from '../actions';

/*
 * User Reducer
 * Upon receipt of the current user from the server, populates state with user info
 */

export const currentUser = (state = {
  isFetching: false,
  username: '',
}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        id: action.data.id,
        username: action.data.login,
        name: action.data.name,
        firstName: action.data.name.split(' ')[0],
        profileUrl: action.data.html_url,
      });
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_USER_REPOS:
      return Object.assign({}, state, {
        isFetching: false,
        repos: action.data,
      });
    case REQUEST_USER_REPOS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    default:
      return state;
  }
};
