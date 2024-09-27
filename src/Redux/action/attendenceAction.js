// action/userAction.js

export const FETCH_RECORDS_REQUEST = 'FETCH_RECORDS_REQUEST';
export const FETCH_RECORDS_SUCCESS = 'FETCH_RECORDS_SUCCESS';
export const FETCH_RECORDS_FAILURE = 'FETCH_RECORDS_FAILURE';

export const CHECKIN_REQUEST = 'CHECKIN_REQUEST';
export const CHECKIN_SUCCESS = 'CHECKIN_SUCCESS';
export const CHECKIN_FAILURE = 'CHECKIN_FAILURE';

export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

export const fetchRecordsRequest = () => ({type: FETCH_RECORDS_REQUEST});
export const fetchRecordsSuccess = data => ({
  type: FETCH_RECORDS_SUCCESS,
  payload: data,
});
export const fetchRecordsFailure = error => ({
  type: FETCH_RECORDS_FAILURE,
  payload: error,
});

export const checkinRequest = payload => ({type: CHECKIN_REQUEST, payload});
export const checkinSuccess = data => ({type: CHECKIN_SUCCESS, payload: data});
export const checkinFailure = error => ({
  type: CHECKIN_FAILURE,
  payload: error,
});

export const checkoutRequest = payload => ({type: CHECKOUT_REQUEST, payload});
export const checkoutSuccess = data => ({
  type: CHECKOUT_SUCCESS,
  payload: data,
});
export const checkoutFailure = error => ({
  type: CHECKOUT_FAILURE,
  payload: error,
});
