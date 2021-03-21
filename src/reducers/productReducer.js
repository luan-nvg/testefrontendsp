// Initial State
const initialState = {
    info: [],
};
// Redux: Counter Reducer
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS': {
            return {
                ...state,
                info: action.value,
            };
        }
        case 'DECREASE_COUNTER': {
            return {
                ...state,
                info: action.value,
            };
        }
        default: {
            return state;
        }
    }
};
// Exports
export default productReducer;