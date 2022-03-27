import SearchBar from "./SearchBar";
import User from "./User";
import tesodevLogo from "../img/tesodev.png";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  const { search } = useContext(UserContext);
  
  const [hide, setHide] = useState(true)
  const [currentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState();
  

  useEffect(() => {
    if(search === "") {
      return setUserPerPage(0);
    } else {
        setUserPerPage(3)
        setHide(false)
    }
  })

  //* Finding Last User;
  const indexOfLastUser = currentPage * userPerPage;
  //* Finding First User;
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
          <div className="user-lists" hidden={hide}>
            <User
              user={user}
              indexOfFirstUser={indexOfFirstUser}
              indexOfLastUser={indexOfLastUser}
            />
            <Link to="/showmore" className="show-more-button">
              Show more...
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;