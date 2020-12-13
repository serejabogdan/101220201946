export const setLocalStorage = (key, comments) => {
  localStorage.setItem(key, JSON.stringify(comments));
};
export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const isLocalStorage = (key) => {
  return !!getLocalStorage(key);
};

const month = {
  0: 'января',
  1: 'февраля',
  2: 'марта',
  3: 'апреля',
  4: 'мая',
  5: 'июня',
  6: 'июля',
  7: 'августа',
  8: 'сентября',
  9: 'октября',
  10: 'ноября',
  11: 'декабря'
};

export const getStringDateNow = () => {
  const date = new Date();
  return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
};

export const initialState = (key) => {
  const filterDate = +new Date('09/13/2011');
  const dateNow = Date.now();
  const comments = [
    {
      personName: 'Самуил',
      date: '13 октября 2011',
      filterDate,
      content: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'
    },
    {
      personName: 'Лилия Семёновна',
      date: '14 октября 2011',
      filterDate,
      content: `Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент,
  это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?`
    },
    {
      personName: 'Лилия Семёновна',
      date: '14 октября 2011',
      filterDate,
      content: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
    },
    {
      personName: 'Самуил',
      date: getStringDateNow(),
      filterDate: dateNow,
      content: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'
    },
    {
      personName: 'Лилия Семёновна',
      date: getStringDateNow(),
      filterDate: dateNow,
      content: `Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент,
  это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?`
    },
    {
      personName: 'Лилия Семёновна',
      date: getStringDateNow(),
      filterDate: dateNow,
      content: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
    }
  ];

  if (!isLocalStorage(key)) {
    setLocalStorage(key, comments);
  }

  return getLocalStorage(key);
};
