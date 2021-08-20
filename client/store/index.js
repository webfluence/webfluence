import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import legislators from "./legislators";
import legislator from "./legislator";
import candcontrib from "./candcontrib";
import candindustry from "./candindustry";

const reducer = combineReducers({
  auth,
  legislators,
  legislator,
  candcontrib,
  candindustry,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
