import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Signin</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/store">Store</Link>
      <Link to="/user">User</Link>
    </nav>
  );
}

export default Navbar;
