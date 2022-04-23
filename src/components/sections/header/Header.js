import { FiMenu, FiSearch, FiUser, FiX } from "react-icons/fi";
import React, { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";
import Menu from "../menu/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="header">
      <div className="navbar">
        <div className="sections">
          <button onClick={handleMenu}>
            Sections {open === true ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className="logo">
          <Link to="/#cover">THE MOVIE PLACE</Link>
        </div>
        <div className="icons">
          <Link to="/search">
            <FiSearch />
          </Link>
          <Link to="/account">
            <FiUser />
          </Link>
        </div>
      </div>
      <Menu open={open} handleMenu={handleMenu} />
    </div>
  );
};

export default Header;
