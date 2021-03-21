import axios from "axios";
import { accessDenied, apiError, apiStart, apiEnd } from "../actions/api/prepare";

const apiMiddleware = ({ dispatch }) => next => action => {
    next(action);
    if(action == undefined) return;
    if(action.type == undefined) return;
    if(action.type !== "API") return;

    const {
        url,
        method,
        data,
        accessToken,
        onSuccess,
        onFailure,
        label,
        headers
    } = action.payload;
    const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

    // axios default configs
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    //   axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    if (label) {
        dispatch(apiStart(label));
    }

    axios
        .request({
            url,
            method,
            headers,
            [dataOrParams]: data
        })
        .then(({ data }) => {
            dispatch(onSuccess(data));
        })
        .catch(error => {
            dispatch(apiError(error));
            onFailure(error);
            console.log("Só da erro");
            console.log(error);

            // if (error.response && error.response.status === 403) {
            //     dispatch(accessDenied(url));
            // }
        })
        .finally(() => {
            if (label) {
                dispatch(apiEnd(label));
            }
        });
};



export default apiMiddleware;