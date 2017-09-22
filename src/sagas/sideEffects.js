import { OAUTH_TOKEN } from '../constants/auth';

/* Local Storage */
const getAuthToken = () => JSON.parse(localStorage.getItem(OAUTH_TOKEN));
const setAuthToken = token =>
  localStorage.setItem(OAUTH_TOKEN, JSON.stringify(token));
const removeAuthToken = () => localStorage.removeItem(OAUTH_TOKEN);

export { getAuthToken, setAuthToken, removeAuthToken };
