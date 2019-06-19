import { combineReducers, createStore } from "redux";
import { searchTerm, video } from "./reducers";

export const store = createStore(
  combineReducers({
    searchTerm,
    video
  })
);
