import { object } from "yup/lib/locale";

// Initial State
const initialState = {
  counter: [],
};
// Redux: Counter Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER_ASYNC': {
      return {
        counter: state.counter.push(action.value)
      };
    }
    case 'DECREASE_COUNTER': {
      return {
        ...state,
        counter: state.counter - action.value,
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default counterReducer;