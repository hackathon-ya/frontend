import { combineReducers } from '@reduxjs/toolkit';
import vacanciesSlice from './vacancies/vacanciesSlice';
import applicantSlice from './applicant/applicantSlice';
import favoritesSlice from './favorites/favoritesSlice';

export const rootReducer = combineReducers({
  vacancies: vacanciesSlice,
  applicant: applicantSlice,
  favorites: favoritesSlice,
});
