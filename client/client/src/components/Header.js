import { Link } from "react-router-dom";
import Logout from "./Logout";

function Header() {
  const token = localStorage.getItem("foodToken");
  return (
    <div className="header">
      <h1>FoodHub App</h1>
      {token ? (
        <Logout/>
      ) : (
        <div>
          <Link to="/login" id="loginBtn">Login</Link>
          <Link to="/signup" id="signupBtn">Sign up</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
