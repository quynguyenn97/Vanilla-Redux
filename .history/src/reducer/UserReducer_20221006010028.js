import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
} from "../action/types";

const INITIAL_STATE = {
    listUsers: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                count: state.count + 1,
            };

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                count: state.count - 1,
            };
        case FETCH_USER_ERROR:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default userReducer;
