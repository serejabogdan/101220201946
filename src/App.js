import React from 'react';
import './App.scss';
import User from './components/User/User';
import Services from './components/Services/Services';
import Comments from './components/Comments/Comments';
import CommentForm from './components/CommentForm/CommentForm';

function App() {
  return (
    <div className="wrapper">
      <User />
      <Services />
      <Comments />
      <CommentForm />
    </div>
  );
}

export default App;
