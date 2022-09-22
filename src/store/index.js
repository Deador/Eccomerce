import {combineReducers, createStore} from "redux";
import {getItem, inCartReducer} from "./inCart";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    inCart: inCartReducer,
    getCard: getItem
});

export const store = createStore(rootReducer, composeWithDevTools());