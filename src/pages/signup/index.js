import React from "react";
// import Navbar from "../../components/navbar/index";
import "./index.css";

import { SignupRequest } from "./signupFetch";

const Signup = ({
  username,
  email,
  password,
  user,
  setUsername,
  setEmail,
  setPassword,
  setUser,
}) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    await SignupRequest(username, email, password, setUser);

    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="main">
      <form onSubmit={submitHandler} className="inputBlock">
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button type="submit">Signup</button>
        <h1>{user ? `You have signed up ${user}` : "No User"}</h1>
      </form>
    </div>
  );
};

export default Signup;
