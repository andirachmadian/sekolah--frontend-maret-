import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

// css
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header name={'Book Store'} />
      <Main />
    </div>
  );
}

export default App;
