import { FiGlobe, FiMoon, FiSearch, FiSun, FiUser } from 'react-icons/fi';
import { Link, NavLink } from "react-router-dom";

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="">THE MOVIE PLACE</Link>
      </div>
      <nav>
        <ul className='links'>
          <li>
            <NavLink to="">Tell me a movie</NavLink>
          </li>
          <li>
            <NavLink to="">Let's watch films</NavLink>
          </li>
          <li>
            <NavLink to="">Our lists</NavLink>
          </li>
          <li>
            <NavLink to="">Contributions</NavLink>
          </li>
          <li>
            <NavLink to="">Stay in touch</NavLink>
          </li>
          <li>
            <NavLink to=""><FiSearch/></NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Link to=""><FiUser/></Link>
      </div>
    </div>
  );
};

export default Header;
