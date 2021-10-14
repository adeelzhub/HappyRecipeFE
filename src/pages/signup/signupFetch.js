export const SignupRequest = async (username, email, password, setter) => {
  try {
    console.log("fetch invoked");
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    setter(data.username);
    console.log(data.username);
  } catch (error) {
    console.log(error);
  }
};
