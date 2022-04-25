import { HashLink as Link } from "react-router-hash-link";
import React from "react";

const Menu = ({ open, handleMenu }) => {
  return (
    <div className={open === true ? "modal active" : "modal"}>
      <div className="links">
        <Link onClick={handleMenu} to="/recommender">
          Tell me a movie
        </Link>
        <Link onClick={handleMenu} to="/#watch">
          Let's watch films
        </Link>
        <Link onClick={handleMenu} to="/lists">
          Our lists
        </Link>
        <Link onClick={handleMenu} to="/contributions">
          Contributions
        </Link>
        <Link onClick={handleMenu} to="/#contact">
          Stay in touch
        </Link>
      </div>
    </div>
  );
};

export default Menu;
