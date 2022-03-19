import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import user from "./reducer/user";
import count from "./reducer/count";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  count: count,
  user: user,
});

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
