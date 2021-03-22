// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// Imports: Redux Root Reducer
import rootReducer from '../reducers/index';
// Imports: Redux Root Saga

import apiMiddleware from '../middleware/Api';
// Middleware: Redux Saga
// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(
    apiMiddleware,
    createLogger(),
  ),
);
// Exports
export {
  store,
}