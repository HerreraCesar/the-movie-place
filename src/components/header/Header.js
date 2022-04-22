import { FiMenu, FiSearch, FiUser, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="sections">
            <button onClick={() => setOpen(!open)}>
              Sections {open === true ? <FiX /> : <FiMenu />}
            </button>
          </div>
          <div className="logo">
            <Link to="">THE MOVIE PLACE</Link>
          </div>
          <div className="icons">
            <Link to="">
              <FiSearch />
            </Link>
            <Link to="">
              <FiUser />
            </Link>
          </div>
        </div>
      </div>

      <div className={open === true ? "modal active" : "modal"}>
        <div className="links">
          <NavLink
            to=""
            onMouseEnter={() =>
              setImage(
                "https://raw.githubusercontent.com/HerreraCesar/movies-website/master/media/backgrounds/background_2.jpg"
              )
            }
            onMouseLeave={() => setImage("")}
          >
            Tell me a movie
          </NavLink>
          <NavLink
            to=""
            onMouseEnter={() =>
              setImage(
                "https://raw.githubusercontent.com/HerreraCesar/movies-website/master/media/backgrounds/background_3.jpg"
              )
            }
            onMouseLeave={() => setImage("")}
          >
            Let's watch films
          </NavLink>
          <NavLink
            to=""
            onMouseEnter={() =>
              setImage(
                "https://raw.githubusercontent.com/HerreraCesar/movies-website/master/media/backgrounds/background_4.jpg"
              )
            }
            onMouseLeave={() => setImage("")}
          >
            Our lists
          </NavLink>
          <NavLink
            to=""
            onMouseEnter={() =>
              setImage(
                "https://raw.githubusercontent.com/HerreraCesar/movies-website/master/media/backgrounds/background_5.jpg"
              )
            }
            onMouseLeave={() => setImage("")}
          >
            Contributions
          </NavLink>
          <NavLink
            to=""
            onMouseEnter={() =>
              setImage(
                "https://raw.githubusercontent.com/HerreraCesar/movies-website/master/media/backgrounds/background_6.jpg"
              )
            }
            onMouseLeave={() => setImage("")}
          >
            Stay in touch
          </NavLink>
        </div>
        <div className="linkPicture">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
