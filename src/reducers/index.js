// Imports: Dependencies
import { combineReducers } from 'redux';

import cardCreditReducer from './cardCreditReducer';
import apiReducer from './apiReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  cardcredit: cardCreditReducer,
  api: apiReducer,
});
// Exports
export default rootReducer;