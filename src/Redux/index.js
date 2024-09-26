// store.js
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import loginReducer from './reducer/userReducer';
import watchLoginRequest from './saga/userSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLoginRequest);

export default store;
