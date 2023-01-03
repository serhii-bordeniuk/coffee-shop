import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "../reducers";

const store = createStore(reducer, compose(applyMiddleware(ReduxThunk)));

export default store;
