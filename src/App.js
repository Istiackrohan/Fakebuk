import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
import Friends from './components/Friends/Friends';
import Users from './components/Data/data.json';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <div className="sidebar"><Sidebar /></div>
      <div className="body"> {Users.map(user => <Body userData={user}></Body>)}
      </div>
      <div className="friends"><Friends /></div>
    </div>
  );
}

export default App;
