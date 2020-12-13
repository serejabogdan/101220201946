export const setLocalStorage = (key, comments) => {
  localStorage.setItem(key, JSON.stringify(comments));
};
export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const isLocalStorage = (key) => {
  return !!getLocalStorage(key);
};

export const initialState = (key) => {
  const comments = [
    {
      personName: 'Самуил',
      date: '13 октября 2011',
      content: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'
    },
    {
      personName: 'Лилия Семёновна',
      date: '14 октября 2011',
      content: `Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент,
  это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?`
    },
    {
      personName: 'Лилия Семёновна',
      date: '14 октября 2011',
      content: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
    }
  ];

  if (!isLocalStorage(key)) {
    setLocalStorage(key, comments);
  }

  return getLocalStorage(key);
};
