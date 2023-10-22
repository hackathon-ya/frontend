import { combineReducers } from "@reduxjs/toolkit";
import vacanciesSlice from "./vacancies/vacanciesSlice";

export const rootReducer = combineReducers({
  vacancies: vacanciesSlice,
});
