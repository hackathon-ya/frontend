const getView = (state: { vacancies: { vacanciesView: string } }) => state.vacancies.vacanciesView
const getShow = (state: { vacancies: { show: boolean } }) => state.vacancies.show

export const vacanciesSelectors = { getView, getShow }