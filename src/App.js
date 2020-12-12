import React, {useState} from 'react';
import './App.scss';
import User from './components/User/User';
import Services from './components/Services/Services';
import Comments from './components/Comments/Comments';
import CommentForm from './components/CommentForm/CommentForm';

function App() {
  const [state, setState] = useState([
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
  ]);

  const onAddComment = (value) => setState((state) => state.concat(value));

  return (
    <div className="wrapper">
      <User />
      <Services />
      <Comments state={state} />
      <CommentForm onAddComment={onAddComment} />
    </div>
  );
}

export default App;
