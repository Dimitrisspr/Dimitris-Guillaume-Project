import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect called");
    const token = localStorage.getItem("foodToken");
    console.log("token", token);
    if (token) {
      setIsLoggedIn(true);
      // Decode the JWT token to get the username
      const { username } = JSON.parse(atob(token.split(".")[1]));
      console.log("username", username);
      setUsername(username);
    } else {
      setIsLoggedIn(false);
      setUsername("");
    }
  }, []);

  function logout() {
    localStorage.removeItem("foodToken");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/login");
  }

  console.log("isLoggedIn", isLoggedIn);
  console.log("username", username);

  return (
    <div>
      {isLoggedIn && (
        <>
          <h2>Welcome to the FoodHub app, {username}!</h2>
          <button id="btnLogout" onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Logout;
