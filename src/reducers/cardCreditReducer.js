// Initial State
const initialState = {
    info: [],
};
// Redux: Counter Reducer
const cardCreditReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CARD': {
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
export default cardCreditReducer;