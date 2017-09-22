import {
  SET_SESSION,
  SET_USER,
  SET_USER_FAILURE,
  RESET_SESSION,
} from '../actions/auth';

const initialState = {
  session: null,
  user: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SESSION:
      return setSession(state, action.session);
    case SET_USER:
      return setUser(state, action.user);
    case SET_USER_FAILURE:
      return state;
    case RESET_SESSION:
      return initialState;
    default:
      return state;
  }
}

function setSession(state, session) {
  return {
    ...state,
    session,
  };
}

function setUser(state, user) {
  return {
    ...state,
    user,
  };
}
