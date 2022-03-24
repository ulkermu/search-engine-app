import SearchBar from "./SearchBar";
import User from "./User";
import tesodevLogo from "../img/tesodev.png";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
    const { user } = useContext(UserContext);
    const [currentPage] = useState(1);
    const [userPerPage] = useState(3);
  
    // En son kullanıcıyı bulmak için;
    const indexOfLastUser = currentPage * userPerPage;
    // İlk kullanıcıyı bulmak için;
    const indexOfFirstUser = indexOfLastUser - userPerPage;

  return (
    <div className="app">
      <header className="app-logo">
        <img className="app-img" src={tesodevLogo} alt="Company Logo" />
        <p className="app-p">Search web app</p>
      </header>
      <main className="app-main">
        <div className="app-search">
          <SearchBar />
        </div>
        <div className="app-user-list">
          <div className="user-lists">
            <User
              user={user}
              indexOfFirstUser={indexOfFirstUser}
              indexOfLastUser={indexOfLastUser}
            />
            <Link to="/showmore" className="show-more-button">Show more...</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;