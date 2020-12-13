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
