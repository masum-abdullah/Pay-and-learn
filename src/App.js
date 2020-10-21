import React from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import Barnav from './components/navbar/Barnav';

function App(props) {
  return (
    <div className="App">
      <Barnav></Barnav>
      <Courses></Courses>
    </div>
  );
}

export default App;
