import {getStringDateNow, isLocalStorage, setLocalStorage, getLocalStorage} from './utils';

const initialState = (key) => {
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

export default initialState;
