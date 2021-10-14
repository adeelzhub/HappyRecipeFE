import React from "react";
// import Navbar from "../../components/navbar/index";
import "./index.css";

// import { LoginRequest } from "./loginFetch";
import { PostRecipeRequest } from "./postRecipeFetch";

const PostRecipe = ({ user, recipe, setRecipe }) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    await PostRecipeRequest(user, recipe, setRecipe);
    setRecipe("");
  };
  return (
    <form onSubmit={submitHandler} className="inputBlock">
      {/* <input
        placeholder="Description"
        type="text"
        value={""}
        onChange={(e) => setDesc(e.target.value)}
      /> */}
      <input
        className="recipeInput"
        placeholder="Recipe"
        type="text"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
      />
      <button type="submit">Post</button>
      <h1>{user ? `Posted a recipe as ${user}` : "Something is not right!"}</h1>
    </form>
  );
};

export default PostRecipe;
