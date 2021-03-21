// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer from '../reducers/index';
// Imports: Redux Root Saga
import { rootSaga } from '../sagas/index';

import  apiMiddleware  from '../middleware/Api';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(
    apiMiddleware,
    sagaMiddleware,
    createLogger(),
  ),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {
  store,
}