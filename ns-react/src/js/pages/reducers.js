/*Er word hier gekeken of er een actie uitgevoerd kan worden */
import { CHANGE_LANGUAGE,CHANGE_CITY } from "./actions.js";

export const language = (state = "", action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export const city = (state = "", action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return action.payload;
    default:
      return state;
  }
};
