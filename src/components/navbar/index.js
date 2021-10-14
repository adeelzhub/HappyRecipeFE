import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <Link to="/GuestHome">Home</Link>
      <Link to="/Signup">Signup</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Posts">Recipes</Link>
      <Link to="/Aboutus">About Us</Link>
      <Link to="/Profile">Profile</Link>
    </div>
  );
};

export default Navbar;
