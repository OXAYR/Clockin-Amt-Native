import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {POST_REQUEST, postSuccess, postFailure} from '../action/userAction';

const postLoginApi = payload => {
  return axios.post('/users/login', payload);
};

function* handlePostRequest(action) {
  try {
    const response = yield call(postLoginApi, action.payload);

    yield put(postSuccess(response.data));
  } catch (error) {
    yield put(postFailure(error.message));
  }
}

function* watchLoginRequest() {
  yield takeLatest(POST_REQUEST, handlePostRequest);
}

export default watchLoginRequest;
