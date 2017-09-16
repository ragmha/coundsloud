import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const tracks = [{ title: 'Track-1' }, { title: 'Track-2' }, { title: 'Track-3' }];

ReactDOM.render(<Stream tracks={tracks} />, document.getElementById('root'));
