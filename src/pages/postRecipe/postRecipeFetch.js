export const PostRecipeRequest = async (user, recipe, setter) => {
  try {
    const userID = user._id;
    console.log("fetch invoked");
    const response = await fetch("http://localhost:8800/api/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userID,
        recipe: recipe,
      }),
    });

    const data = await response.json();
    setter(data.username);
    console.log(data.username);
  } catch (error) {
    console.log(error);
  }
};

<p></p>;
