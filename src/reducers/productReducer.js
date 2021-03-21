// Initial State
const initialState = {
    info: [],
};
// Redux: Counter Reducer
const productReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'ADD_PRODUCTS': {
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