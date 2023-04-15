import axios from "axios";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    let loggedIn = { username, password };
    let response = await axios.post(
      "http://localhost:8000/user/login",
      loggedIn
    );
   console.log(response);
  }

  return (
    <div>
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
  );
}

export default Login;
