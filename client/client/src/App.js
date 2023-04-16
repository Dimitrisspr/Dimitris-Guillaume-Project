import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DropdownMenu from "./components/Dropdown";
import Header from "./components/Header";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Header />
      <Signup />
      <Login />
      <DropdownMenu />
      <Logout />
    </div>
  );
}

export default App;
