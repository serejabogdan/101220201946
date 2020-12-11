import React from 'react';
import './App.scss';
import User from './components/User/User';
import Services from './components/Services/Services';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className="wrapper">
      <User />
      <Services />
      <Comments />
    </div>
  );
}

export default App;
