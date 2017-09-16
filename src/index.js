import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './stores/configureStore';
import * as actions from './actions';

import Stream from './components/Stream/';

const tracks = [
  { title: 'Track-1' },
  { title: 'Track-2' },
  { title: 'Track-3' },
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById('root')
);
