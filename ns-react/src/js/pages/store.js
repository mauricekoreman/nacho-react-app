import {
  combineReducers,
  createStore
} from "redux";

import { language } from "./reducers";

export const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  combineReducers({
    language

  })
);
