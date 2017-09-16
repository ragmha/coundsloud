import React from 'react';

const Stream = ({ tracks = [], onAuth }) => (
  <div>
    <div>
      <button onClick={onAuth} type="button">
        Login
      </button>
    </div>
    <br />
    <div>
      {tracks.map((track, key) => (
        <div className="track" key={key}>
          {track.title}
        </div>
      ))}
    </div>
  </div>
);

export default Stream;
