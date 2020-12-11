import React from 'react';
import './App.scss';
import User from './components/User/User';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="wrapper">
      <User />
      <Services />
    </div>
  );
}

export default App;
