/* eslint-disable */
import SC from 'soundcloud';
/* eslint-enable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';

import App from './components/App/';

const tracks = [
  { title: 'Track-1' },
  { title: 'Track-2' },
  { title: 'Track-3' },
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
