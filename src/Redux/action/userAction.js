export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const postRequest = data => ({
  type: POST_REQUEST,
  payload: data,
});

export const postSuccess = response => ({
  type: POST_SUCCESS,
  payload: response,
});

export const postFailure = error => ({
  type: POST_FAILURE,
  payload: error,
});
