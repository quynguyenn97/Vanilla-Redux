import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
    DELETE_USER_REQUEST,
} from "./types";
import axios from "axios";

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

export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        dataUsers: data,
    };
};

export const fetchUsersError = () => {
    return {
        type: FETCH_USER_ERROR,
    };
};
// CREATE USER
export const createUsersRequest = () => {
    return {
        type: CREATE_USER_REQUEST,
    };
};

export const createUsersSuccess = (data) => {
    return {
        type: CREATE_USER_SUCCESS,
    };
};

export const createUsersError = () => {
    return {
        type: CREATE_USER_ERROR,
    };
};
export const createNewUserRedux = (email, password, username) => {
    return async (dispatch, getState) => {
        dispatch(createUsersRequest());
        try {
            let res = await axios.post("http://localhost:8080/users/create", {
                email,
                password,
                username,
            });
            if (res && res.data.errCode === 0) {
                dispatch(createUsersSuccess());
                dispatch(fetchAllUser());
            }
        } catch (error) {
            console.log(error);
            dispatch(createUsersError());
        }
    };
};

// DELETE USER
export const deleteUsersRequest = () => {
    return {
        type: DELETE_USER_REQUEST,
    };
};

export const deleteUsersSuccess = (data) => {
    return {
        type: DELETE_USER_SUCCESS,
    };
};
export const deleteUsersError = () => {
    return {
        type: DELETE_USER_ERROR,
    };
};
export const deleteUserRedux = (id) => {
    return async (dispatch, getState) => {
        dispatch(deleteUsersRequest());
        try {
            let res = await axios.post(
                `http://localhost:8080/users/delete/:${id}`
            );
            dispatch(deleteUsersSuccess());
            dispatch(fetchAllUser());
        } catch (error) {
            console.log(error);
            dispatch(deleteUsersError());
        }
    };
};
