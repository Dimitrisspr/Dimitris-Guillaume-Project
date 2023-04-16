import { useState } from "react";
import React from "react";
import { useEffect } from "react";

function Logout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function logout(e) {
    e.preventDefault();
    window.location.reload();
    setIsLoggedIn(false);
    localStorage.removeItem("foodToken");
  }
  const token = localStorage.getItem("foodToken");
  if (token) {
    return (
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
}

export default Logout;
