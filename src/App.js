import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
import Friends from './components/Friends/Friends';
import Users from './components/Data/data.json';
import { useState } from 'react';

function App() {
  const [friends, setFriends] = useState([]);

  const handleFriendList = (users) =>{
    const newList = [...friends, users];
    setFriends(newList);
  }

  return (
    <div className="App">
      <div className="sidebar"><Sidebar /></div>
      <div className="body"> {Users.map(user => <Body key={user.id} handleFriendList={handleFriendList} userData={user} />)}
      </div>
      <div className="friends"><Friends friendList={friends}/></div>
    </div>
  );
}

export default App;
