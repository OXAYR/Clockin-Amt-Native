import {
  FETCH_RECORDS_FAILURE,
  FETCH_RECORDS_REQUEST,
  FETCH_RECORDS_SUCCESS,
  CHECKIN_FAILURE,
  CHECKIN_REQUEST,
  CHECKIN_SUCCESS,
  CHECKOUT_FAILURE,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
} from '../action/attendenceAction';

const initialState = {
  loading: true,
  attendenceRecord: null,
  todayRecord: null,
  isPresentToday: false,
  error: null,
};

const attendenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECORDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RECORDS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload?.records,
        isPresentToday: action.payload?.isPresentToday,
        todayRecordId: action.payload?.todayAttendenceId,
      };
    case FETCH_RECORDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CHECKIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CHECKIN_SUCCESS:
      return {
        ...state,
        loading: false,
        todayRecord: action.payload?.data,
      };
    case CHECKIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CHECKOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload?.data,
      };
    case CHECKOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default attendenceReducer;
