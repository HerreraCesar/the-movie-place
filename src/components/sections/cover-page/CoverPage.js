import { HashLink as Link } from "react-router-hash-link";
import React from "react";

const CoverPage = () => {
  return (
    <section id="coverPage">
      <div className="trailerContainer">
        <video
          className="trailer"
          src="https://herreracesar.github.io/movies-website/media/trailers/2.mp4"
          muted
          autoPlay
          loop
        ></video>
      </div>
      <p className="backgroundTitle">THE MOVIE PLACE</p>
      <div className="bottomContainer">
        <div className="sloganContainer">
          <h1 className="slogan">
            Welcome. We are a space dedicated to cinema. Enjoy it!
          </h1>
          <button className="button">
            <Link to="/account">Join now!</Link>
          </button>
        </div>
        <p className="initials"></p>
      </div>
    </section>
  );
};

export default CoverPage;
