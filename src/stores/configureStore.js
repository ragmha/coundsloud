import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/';

import createSagaMiddleware from 'redux-saga';
import { watchForAuthScUser } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  // middleware.push(createLogger());
}

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(watchForAuthScUser);

  return store;
};

export default configureStore;
