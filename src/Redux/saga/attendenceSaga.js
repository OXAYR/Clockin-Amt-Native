// saga.js

import {call, put, takeLatest, all} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_RECORDS_REQUEST,
  fetchRecordsSuccess,
  fetchRecordsFailure,
  CHECKIN_REQUEST,
  checkinSuccess,
  checkinFailure,
  CHECKOUT_REQUEST,
  checkoutSuccess,
  checkoutFailure,
} from '../action/userAction';

const fetchRecordsApi = () => axios.get('/attendances');
const checkInApi = payload => axios.post('/attendances/checkin', payload);
const checkOutApi = payload =>
  axios.patch(`/attendances/checkout/${payload.attendenceId}`, payload);

function* handleFetchRecords() {
  try {
    const response = yield call(fetchRecordsApi);
    yield put(fetchRecordsSuccess(response.data));
  } catch (error) {
    yield put(fetchRecordsFailure(error.message));
  }
}

function* handleCheckIn(action) {
  try {
    const response = yield call(checkInApi, action.payload);
    yield put(checkinSuccess(response.data));
  } catch (error) {
    yield put(checkinFailure(error.message));
  }
}

function* handleCheckOut(action) {
  try {
    const response = yield call(checkOutApi, action.payload);
    yield put(checkoutSuccess(response.data));
  } catch (error) {
    yield put(checkoutFailure(error.message));
  }
}

function* watchFetchRecords() {
  yield takeLatest(FETCH_RECORDS_REQUEST, handleFetchRecords);
}

function* watchCheckInRequest() {
  yield takeLatest(CHECKIN_REQUEST, handleCheckIn);
}

function* watchCheckOutRequest() {
  yield takeLatest(CHECKOUT_REQUEST, handleCheckOut);
}

export default function* rootSaga() {
  yield all([
    watchFetchRecords(),
    watchCheckInRequest(),
    watchCheckOutRequest(),
  ]);
}
