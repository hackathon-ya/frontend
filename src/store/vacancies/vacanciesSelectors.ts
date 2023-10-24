const getView = (state: { vacancies: { vacanciesView: string } }) => state.vacancies.vacanciesView

export const vacanciesSelectors = { getView }