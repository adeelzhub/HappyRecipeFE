export const LoginRequest = async (email, password, setter) => {
  try {
    console.log("fetch invoked");
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    setter(data);
    localStorage.setItem("user", response);
    const currentUser = localStorage.getItem("user");
    console.log(currentUser);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
