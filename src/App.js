import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Account from "./components/pages/account/Account";
import Contributions from "./components/pages/contributions/Contributions";
import Header from "./components/sections/header/Header";
import Home from "./components/pages/home/Home";
import Lists from "./components/pages/lists/Lists";
import NotFound from "./components/pages/not-found/NotFound";
import Recommender from "./components/pages/recommender/Recommender";
import Search from "./components/pages/search/Search";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/recommender" element={<Recommender />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
