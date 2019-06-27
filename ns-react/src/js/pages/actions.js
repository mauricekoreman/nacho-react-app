/* Hier worden de acties aan gemaakt die mogelijk zijn in deze applicatie.*/

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const CHANGE_CITY = "CHANGE_CITY";

export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  payload: language
});

export const changeCity = city => ({
  type: CHANGE_CITY,
  payload: city
});
