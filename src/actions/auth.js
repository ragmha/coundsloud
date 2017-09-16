import SC from 'soundcloud';
import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';

export const authSCuser = () => ({ type: 'AUTH_SC_USER' });

export const connectSC = () => {
  const client_id = CLIENT_ID;
  const redirect_uri = REDIRECT_URI;

  return new Promise((resolve, reject) => {
    SC.initialize({ client_id, redirect_uri });
    SC.connect().then(session => resolve(session));
  });
};

export const fetchSCUser = session =>
  fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
    .then(res => res.json())
    .catch(err => console.error(err));

export const fetchStream = (me, session) =>
  fetch(
    `//api.soundcloud.com/me/activities?limit=20&offset=0&oauth_token=${session.oauth_token}`
  )
    .then(res => res.json())
    .catch(err => console.error(err));
