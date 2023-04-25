import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();

    try {
      const loggedIn = { username, password };
      const response = await axios.post(
        "http://localhost:8000/user/login",
        loggedIn
      );

      if (response.status === 200) {
        localStorage.setItem("foodToken", response.data);
        alert("Logged in successfully");
        navigate("/");
      } else {
        console.log("incorrect username or password");
      }
    } catch (error) {
      console.log(error);
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
          <button id= 'login1' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
