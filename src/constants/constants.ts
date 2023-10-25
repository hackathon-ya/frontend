export const ROUTES = {
  HOME: '/',
  APPLICANT: '/applicant',
  VACANCIES: '/vacancies',
  PROFILE: '/profile',
  ARCHIVE: '/vacancies/archive',
  DRAFT: 'vacancies/draft',
};

const Expiriens = [
  {
    value: 'Не важен',
    label: 'Не важен',
  },
  {
    value: 'До 1 года',
    label: 'До 1 года',
  },
  {
    value: 'от 1 года до 3 лет',
    label: 'от 1 года до 3 лет',
  },
  {
    value: 'Больше 3-х лет',
    label: 'Больше 3-х лет',
  },
];
const Busyness = [
  {
    value: 'Полная',
    label: 'Полная',
  },
  {
    value: 'Частичная',
    label: 'Частичная',
  },
  {
    value: 'проектная работа',
    label: 'проектная работа',
  },
  {
    value: 'стажировка',
    label: 'стажировка',
  },
];
const FormatWork = [
  {
    value: 'удаленная работа',
    label: 'удаленная работа',
  },
  {
    value: 'полный день',
    label: 'полный день',
  },
  {
    value: 'Не важен',
    label: 'Не важен',
  },
];
const City = [
  {
    value: 'Москва',
    label: 'Москва',
  },
  {
    value: 'Воронеж',
    label: 'Воронеж',
  },
];

export default { Expiriens, Busyness, FormatWork, City };
