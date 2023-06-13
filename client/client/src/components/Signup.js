import { useState } from "react";
//import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function createNewAcount(e) {
    e.preventDefault();
    let newUser = { username: username, password: password };

    let response = await axios.post(
      "http://localhost:8000/user/signup",
      newUser
    );
    if(response.status === 200){
      alert(response.data.msg)
      navigate("/login")
    } else {
      alert("try again")
    }
    console.log(response);
  }
  const token = localStorage.getItem("foodToken");
  if (!token){
    return (
      <div className="container">
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={createNewAcount}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={createNewAcount}>Sign up</button>
      </form>
    </div>
  </div>
);
  }
  
}

export default Signup;
