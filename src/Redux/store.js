import { combineReducers, legacy_createStore as createStore } from "redux";

import { isAuthhandler } from "./isAuth/reducer";

const rootreducer =  combineReducers({
    isAuth:isAuthhandler
})

export const store = createStore(
	rootreducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
