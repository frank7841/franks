//import dependencies
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk" ;
import combineReducers from "./reducers"
//connect application to redux dev tools
import {composeWithDevTools} from "redux-devtools-extension";
//setup initial state
const initialState= {};
//import midleware
const middleware = [thunk];
//setup store
const store = createStore(combineReducers,
    initialState,
     composeWithDevTools(applyMiddleware(...middleware)));
//expoert store
export default store;