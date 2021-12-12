import ACTION_TYPES from './actionTypes';

export const getUsersAction = () => ({
  type: ACTION_TYPES.GET_USERS_ACTION,
});

export const getUsersRequest = () => ({
  type: ACTION_TYPES.GET_USERS_REQUEST,
});

export const getUsersSuccess = users => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  users,
});

export const getUsersError = e => ({
  type: ACTION_TYPES.GET_USERS_ERROR,
  error: e,
});

export const createUserAction = user => ({
  type: ACTION_TYPES.CREATE_USER_ACTION,
  user,
});

export const createUserRequest = () => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
});

export const createUserSuccess = user => ({
  type: ACTION_TYPES.CREATE_USER_SUCCESS,
  user,
});

export const createUserError = e => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  error: e,
});

export const deleteUserAction = id => ({
  type: ACTION_TYPES.DELETE_USER_ACTION,
  id,
});

export const deleteUserRequest = () => ({
  type: ACTION_TYPES.DELETE_USER_REQUEST,
});

export const deleteUserSuccess = id => ({
  type: ACTION_TYPES.DELETE_USER_SUCCESS,
  id,
});

export const deleteUserError = e => ({
  type: ACTION_TYPES.DELETE_USER_ERROR,
  error: e,
});
