import React, {useState} from 'react';
import './App.scss';
import User from './components/User/User';
import Services from './components/Services/Services';
import Comments from './components/Comments/Comments';
import CommentForm from './components/CommentForm/CommentForm';

import {initialState, setLocalStorage} from './utils';

function App() {
  const localStorageKey = 'comments';
  const [state, setState] = useState(initialState(localStorageKey));

  const onAddComment = (value) =>
    setState((state) => {
      const newState = state.concat(value);
      setLocalStorage(localStorageKey, newState);
      return newState;
    });

  return (
    <div className="wrapper">
      <User />
      <Services />
      <Comments comments={state} />
      <CommentForm onAddComment={onAddComment} />
    </div>
  );
}

export default App;
