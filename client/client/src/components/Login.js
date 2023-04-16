import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Logout from "./Logout";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    window.location.reload();

    let loggedIn = { username, password };

    let response = await axios.post(
      "http://localhost:8000/user/login",
      loggedIn
    );

    if (response) {
      localStorage.setItem("foodToken", response.data);
      console.log(response);

      // navigate("./Dropdown");
    } else {
      alert("incorrect username or password");
    }
  }
  const token = localStorage.getItem("foodToken");
  if (!token) {
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
                type="text"
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
}

export default Login;
