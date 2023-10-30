const getView = (state: { vacancies: { vacanciesView: string } }) =>
  state.vacancies.vacanciesView;
const getShow = (state: { vacancies: { show: boolean } }) =>
  state.vacancies.show;
const getVacancies = (state: {
  vacancies: {
    vacancies: any;
  };
}) => state.vacancies.vacancies;

export const vacanciesSelectors = { getView, getShow, getVacancies };
