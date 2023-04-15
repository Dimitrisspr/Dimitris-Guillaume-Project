import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import DropdownMenu from './components/Dropdown';

function App() {
  return (
    <div className="App">
     <Signup/>
     <Login/>
     <DropdownMenu />
    </div>
  );
}

export default App;
