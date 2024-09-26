import createSagaMiddleware from '@redux-saga/core';

import {configureStore} from '@reduxjs/toolkit';

import {all} from 'redux-saga/effects';

import {watchUserData} from './sagas/userSaga';

import userReducer from './features/userSlice';

function* rootSaga() {
  yield all([watchUserData()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    userData: userReducer,
  },

  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
