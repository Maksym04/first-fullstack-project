import { put } from 'redux-saga/effects';
import {
  createUserError,
  createUserRequest,
  createUserSuccess,
  deleteUserError,
  deleteUserRequest,
  deleteUserSuccess,
  getUsersError,
  getUsersRequest,
  getUsersSuccess,
} from '../actions';
import * as API from './../api';

export function * getUsersSaga () {
  // отправить экшн ACTION_TYPES.GET_USERS_REQUEST
  yield put(getUsersRequest()); //отправка экшна о начале процесса загрузки
  // yield put({ type: ACTION_TYPES.GET_USERS_REQUEST }) // отправка экшна

  try {
    // юзеры = загрузка()
    const {
      data: { data: users },
    } = yield API.getUsers();
    // отправка экшена ACTION_TYPES.GET_USERS_SUCCESS

    yield put(getUsersSuccess(users)); // Отправка экшна об успешном завершении загрузки

    // yield put({
    //   type: ACTION_TYPES.GET_USERS_SUCCESS,
    //   users: users,
    // });
  } catch (e) {
    // отправка экшена ACTION_TYPES.GET_USERS_ERROR
    yield put(getUsersError(e)); // Отправка экшна о возникновении ошибки в процессе загрузки
  }
}

export function * createUserSaga (action) {
  const { user } = action;

  yield put(createUserRequest());
  try {
    const {
      data: { data: newUser },
    } = yield API.createUser(user);
    yield put(createUserSuccess(newUser));
  } catch (e) {
    yield put(createUserError(e));
  }
}

export function * deleteUserSaga (action) {
  const { id } = action;

  yield put(deleteUserRequest());
  try {
    yield API.deleteUser(id);
    yield put(deleteUserSuccess(id));
  } catch (e) {
    yield put(deleteUserError(e));
  }
}
