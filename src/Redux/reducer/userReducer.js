import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: '',

    username: '',
  },

  error: '',
};

export const userSlice = createSlice({
  name: 'userData',

  initialState,

  reducers: {
    fetchDataSuccess: (state, action) => {
      state.user = action.payload;
    },

    fetchDataError: (state, action) => {
      state.error = action.payload;
    },

    resetTemporaryState: state => {
      return initialState;
    },
  },
});

export const {fetchDataSuccess, fetchDataError, resetTemporaryState} =
  userSlice.actions;

export const userDataSelector = state => state.userData.user;

export default userSlice.reducer;
