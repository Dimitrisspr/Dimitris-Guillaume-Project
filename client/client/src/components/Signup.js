import { useState } from "react";
//import { useEffect } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function createNewAccount(e) {
    e.preventDefault();
    let newUser = { username: username, password: password };

    let response = await axios.post(
      "http://localhost:8000/user/signup",
      newUser
    );
    console.log(response);
  }

  return (
    <div>
      <form onSubmit={createNewAccount}>
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
        <button onClick={createNewAccount}>Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
