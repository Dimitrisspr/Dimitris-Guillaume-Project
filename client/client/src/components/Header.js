import { Link } from "react-router-dom";
import Logout from "./Logout";

function Header() {
  const token = localStorage.getItem("foodToken");
  return (
    <div>
      <div className="header">
      <a href="/"><h1 className="logoName">FoodHub App</h1></a>
      {token ? (
        <Logout/>
      ) : (
        <div>
          <Link to="/login" id="loginBtn">Login</Link>
          <Link to="/signup" id="signupBtn">Sign up</Link>
        </div>
      )}
     </div>
     <div className="container1">
        <h1>
          This web site is used for simply looking for a drink that can go with the type of food you choose.
          Additionally you can find high quality pictures of any type of foods.

        </h1>
        <div className="img">
         
        </div>
      
      
      </div>
    </div>
    
  );
}

export default Header;
