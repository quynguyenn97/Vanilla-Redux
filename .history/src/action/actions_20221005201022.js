import { INCREMENT, DECREMENT } from "./types";

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};
export const fetchAllUser = async () => {
    return (dispatch, getState) => {};
};

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    };
};

export const fetchUsersSuccess = (payload) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload,
    };
};

export const fetchUsersError = () => {
    return {
        type: FETCH_USER_ERROR,
    };
};
