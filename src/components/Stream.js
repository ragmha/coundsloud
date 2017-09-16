import React from 'react';

const Stream = ({ tracks = [] }) => (
  <div>
    {tracks.map((track, key) => (
      <div className="track" key={key}>
        {track.title}
      </div>
    ))}
  </div>
);

export default Stream;
