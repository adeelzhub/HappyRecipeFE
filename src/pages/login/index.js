import React from "react";
// import Navbar from "../../components/navbar/index";
import "./index.css";

import { LoginRequest } from "./loginFetch";

const Login = ({ email, password, user, setEmail, setPassword, setUser }) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    await LoginRequest(email, password, setUser);

    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={submitHandler} className="inputBlock">
      <input
        placeholder="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <h1>{user ? `Logged in as ${user}` : "Guest mode"}</h1>
    </form>
  );
};

export default Login;
