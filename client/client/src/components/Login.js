import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();

    let loggedIn = { username, password };

    let response = await axios.post(
      "http://localhost:8000/user/login",
      loggedIn
    );
    if (response) {
      alert("Logged in successfully");
    }

    if (response.status === 200) {
      localStorage.setItem("foodToken", response.data);
      navigate("/");
      // navigate("./Dropdown");
    } else {
      console.log("incorrect username or password");
    }
  }

  return (
    <div className="container">
      <div className="login">
        <h2>Login</h2>

        <form onSubmit={loginUser}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={loginUser}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
