import {call, put, takeLatest} from 'redux-saga/effects';
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
} from '../action/attendenceAction';

const fetchRecordsApi = payload => axios.get('/attendance', payload);
const checkInApi = payload => axios.post('/attendance/checkin', payload);
const checkOutApi = payload =>
  axios.patch(`/attendance/checkout/${payload.attendenceId}`, payload);

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
    console.log('here is the checkin', action);
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

export function* watchFetchRecords() {
  yield takeLatest(FETCH_RECORDS_REQUEST, handleFetchRecords);
}

export function* watchCheckInRequest() {
  yield takeLatest(CHECKIN_REQUEST, handleCheckIn);
}

export function* watchCheckOutRequest() {
  yield takeLatest(CHECKOUT_REQUEST, handleCheckOut);
}
