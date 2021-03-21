// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import counterReducer from './counterReducer';
import productReducer from './productReducer';
import apiReducer from './apiReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
  api: apiReducer,
});
// Exports
export default rootReducer;