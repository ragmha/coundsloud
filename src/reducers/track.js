import { TRACK_SET } from '../actions/types';
const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case TRACK_SET:
      return [...state, ...action.tracks];
    default:
      return state;
  }
}
