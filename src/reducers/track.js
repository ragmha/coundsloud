import { TRACK_SET, TRACK_PLAY } from '../actions/track';
const initialState = {
  tracks: [],
  activeTrack: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TRACK_SET:
      return setTracks(state, action);
    case TRACK_PLAY:
      return setPlay(state, action);
    default:
      return state;
  }
}

function setTracks(state, action) {
  const { tracks } = action;
  return { ...state, tracks };
}

function setPlay(state, action) {
  const { track } = action;
  return { ...state, activeTrack: track };
}
