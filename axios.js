import axios from 'axios';

axios.defaults.baseURL = 'http://10.0.2.2:4000';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-access-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-access-token'];
  }
};
