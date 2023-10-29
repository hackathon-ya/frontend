import { combineReducers } from "@reduxjs/toolkit";
import vacanciesSlice from "./vacancies/vacanciesSlice";
import applicantSlice from "./applicant/applicantSlice";

export const rootReducer = combineReducers({
  vacancies: vacanciesSlice,
  applicant: applicantSlice,
});
