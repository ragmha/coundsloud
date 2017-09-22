export const TRACK_SET = 'TRACK_SET';
export const TRACK_PLAY = 'TRACK_PLAY';

export function setTracks(tracks) {
  return {
    type: TRACK_SET,
    tracks,
  };
}

export function playTrack(track) {
  return {
    type: TRACK_PLAY,
    track,
  };
}
