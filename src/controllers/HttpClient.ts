import axios from 'axios';
import strings from '../localization/strings.ts';

const ENV = process.env;

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: ENV.REACT_APP_API_TOKEN,
  },
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    console.warn(error);
    if (!error.response) {
      throw new Error(strings.errors.connectionError);
    }
    return Promise.reject(error);
  },
);

const setAuthorization = (token: any) => {
  client.defaults.headers.common.authorization = token;
};

export default { ...client, setAuthorization };
