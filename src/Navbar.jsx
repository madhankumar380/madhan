import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        gap: "20px",
        backgroundColor: "black",
        padding: "10px",
        position: "fixed",
        top:"0",
        right:"0",
        width:"100%",
        zIndex:"1000",
      }}
    >
      <div>
        <Link to="/Home" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/todo" style={{ color: "white", textDecoration: "none" }}>
          Todo
        </Link>
      </div>
      <div>
        <Link
          to="/profilecard"
          style={{ color: "white", textDecoration: "none" }}
        >
          Profile Card
        </Link>
      </div>
      <div>
        <Link to="/gridview" style={{ color: "white", textDecoration: "none" }}>
          Grid App
        </Link>
      </div>
     
    </nav>
  );
};

export default Navbar;