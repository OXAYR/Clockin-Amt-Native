import {takeLatest, call, put} from 'redux-saga/effects';

import {
  GET_USERS,
  fetchDataError,
  fetchDataSuccess,
} from '../features/userSlice';

function* fetchUserData(val) {
  try {
    const id = val.payload.id;

    const response = yield call(fetch, `https://dummyjson.com/users/${id}`);

    const data = yield response.json();

    yield put(fetchDataSuccess({id: data.id, username: data.firstName}));
  } catch (error) {
    yield put(fetchDataError(error));
  }
}

export function* watchUserData() {
  yield takeLatest(GET_USERS, fetchUserData);
  console.log('Watch user data called======>', fetchUserData);

  //fetchUserData is called when user dispatches an action “GET_USERS”
}
