import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import legislators from "./legislators";
import legislator from "./legislator";
import loading from "./loading";
import candcontrib from "./candcontrib";
import candindustry from "./candindustry";
import org from "./orgs";
import orginfo from "./orginfo";
import candpac from "./candpac";
import paccand from "./paccand";
import pacid from "./paccommittee";
import additionalcandcontrib from "./additionalcandcontrib";
import fullscreen from "./fullscreen";

const reducer = combineReducers({
  auth,
  legislators,
  legislator,
  candcontrib,
  candindustry,
  loading,
  fullscreen,
  org,
  orginfo,
  candpac,
  paccand,
  pacid,
  additionalcandcontrib
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
