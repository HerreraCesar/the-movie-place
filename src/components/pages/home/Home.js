import Contact from "../../sections/contact/Contact";
import CoverPage from "../../sections/cover-page/CoverPage";
import Footer from "../../sections/footer/Footer";
import React from "react";
import Watch from "../../sections/watch/Watch";

const Home = () => {
  return (
    <div id="landing">
      <CoverPage />
      <Watch />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
