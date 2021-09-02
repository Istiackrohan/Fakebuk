import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Body from './components/Body/Body';
import Friends from './components/Friends/Friends';

function App() {
  return (
    <div className="App"> 
      <div className="sidebar"><Sidebar /></div>
      <div className="body"><Body /></div>
      <div className="friends"><Friends /></div>
    </div>
  );
}

export default App;
