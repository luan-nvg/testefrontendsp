// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import counterReducer from './counterReducer';
import productReducer from './productReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
});
// Exports
export default rootReducer;