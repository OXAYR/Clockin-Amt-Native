import {POST_REQUEST, POST_SUCCESS, POST_FAILURE} from '../action/userAction';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
