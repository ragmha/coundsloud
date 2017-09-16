import React, { Component } from 'react';

const Stream = ({ tracks = [] }) => (
	<div>
		{tracks.map((track, key) => (
			<div key={key} className="track">
				{track.title}
			</div>
		))}
	</div>
);

export default Stream;
