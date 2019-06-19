import { CHANGE_LANGUAGE } from "./actions.js";

export const language = (state = "", action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};
