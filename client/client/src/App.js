import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DropdownMenu from "./components/Dropdown";
import Header from "./components/Header";
import Logout from "./components/Logout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<DropdownMenu />} />

      </Routes>

      {/* <DropdownMenu /> */}
    </div>
  );
}

export default App;
