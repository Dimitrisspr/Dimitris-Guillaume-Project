import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  try {
    function logout() {
      setIsLoggedIn(false);
     // console.log("any message");
      localStorage.removeItem("foodToken");
      window.location.reload();

      navigate("/login");
    }

    //const token = localStorage.getItem("foodToken");

    return (
      <div onSubmit={logout}>
        <button id="btnLogout" onClick={logout}>Logout</button>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default Logout;