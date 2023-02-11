import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <span><Link to="/">Home</Link></span>
        | 
        <span><Link to="/blogs">Blogs</Link></span>
      </ul>
    </nav>
  );
}

export default Navbar;