import { TRACK_SET } from './types';

export function setTracks(tracks) {
  return {
    type: TRACK_SET,
    tracks,
  };
}
