import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
