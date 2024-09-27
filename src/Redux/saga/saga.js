import {all} from 'redux-saga/effects';
import watchLoginRequest from './userSaga';
import {
  watchCheckInRequest,
  watchCheckOutRequest,
  watchFetchRecords,
} from './attendenceSaga';

export default function* rootSaga() {
  try {
    console.log('Running root saga');
    yield all([
      watchLoginRequest(),
      watchCheckInRequest(),
      watchCheckOutRequest(),
      watchFetchRecords(),
    ]);
  } catch (error) {
    console.error('Error in rootSaga: ', error);
  }
}
