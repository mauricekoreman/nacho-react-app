import {
  combineReducers,
  createStore
} from "redux";

import { language, city } from "./reducers";

export const store = createStore(

  combineReducers({
    language,
    city
  })
);
