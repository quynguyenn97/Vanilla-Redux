import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
} from "./types";

export const fetchAllUser = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUsersRequest());
        try {
            let res = await axios.get("http://localhost:8080/users/all");
            const data = res && res.data ? res.data : [];
            dispatch(fetchUsersSuccess(data));
        } catch (error) {
            dispatch(fetchUsersError());
        }
    };
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
