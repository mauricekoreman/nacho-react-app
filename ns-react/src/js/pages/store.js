import {
  combineReducers,
  createStore
} from "redux";

import { language } from "./reducers";

export const store = createStore(
  
  combineReducers({
    language

  })
);
