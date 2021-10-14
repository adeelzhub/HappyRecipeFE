import React from "react";
import { useState, useEffect } from "react";

import "./App.css";
import Tittle from "./components/title/index";
import GuestHome from "./pages/guestHome/index";
import Signup from "./pages/signup/index";
import Login from "./pages/login/index";
import PostRecipe from "./pages/postRecipe";
import Profile from "./pages/profile/index";
import Recipes from "./pages/recipes/index";
import Aboutus from "./pages/Aboutus/index";
import Navbar from "./components/navbar/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [recipe, setRecipe] = useState("");
  const [desc, setDesc] = useState();
  // useEffect(() => {
  //   const currentUser = localStorage.getItem("user");
  //   if (currentUser) {
  //     const foundUser = JSON.parse(currentUser);
  //     setUser(foundUser);
  //   }
  // }, []);
  return (
    <Router>
      <Tittle />
      <Navbar />
      <Switch>
        <Route path="/GuestHome">
          <GuestHome />
        </Route>
        <Route path="/Signup">
          <Signup
            username={username}
            email={email}
            password={password}
            user={user}
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            setUser={setUser}
          />
        </Route>
        <Route path="/Login">
          <Login
            email={email}
            password={password}
            user={user}
            setEmail={setEmail}
            setPassword={setPassword}
            setUser={setUser}
          />
        </Route>
        <Route path="/PostRecipe">
          <PostRecipe
            user={user}
            recipe={recipe}
            setRecipe={setRecipe}
            // desc={desc}
            // setDesc={setDesc}
          />
        </Route>
        <Route path="/Profile">
          <Profile user={user} />
        </Route>
        <Route path="/Recipes">
          <Recipes user={user} />
        </Route>
        <Route path="/Aboutus">
          <Aboutus />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
