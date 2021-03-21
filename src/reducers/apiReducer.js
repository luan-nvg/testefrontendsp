const apiReducer = function (state = {}, action) {

    switch (action.type) {
        case "SET_ARTICLE_DETAILS":
            return { data: action.payload };
        case "API_START":
            if (action.payload === "FETCH_ARTICLE_DETAILS") {
                return {
                    ...state,
                    isLoadingData: true
                };
            }
            break;
        case "API_END":
            if (action.payload === "FETCH_ARTICLE_DETAILS") {
                return {
                    ...state,
                    isLoadingData: false
                };
            }
            break;
        default:
            return state;
    }
}

export default apiReducer;
