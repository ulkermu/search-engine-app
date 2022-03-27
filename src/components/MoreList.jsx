import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import User from "./User";
import Pagination from "./Pagination";
import tesodevSmallLogo from "../img/tesodev-small.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import OrderBy from "./OrderBy";

const MoreList = () => {
  const { user } = useContext(UserContext);
  const { search } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(6);

  //* Finding Last User;
  const indexOfLastUser = currentPage * userPerPage;
  //* Finding First User;
  const indexOfFirstUser = indexOfLastUser - userPerPage;

  const pageCount = Math.ceil(
    user.filter((user) => {
      if (search === "") {
        return user;
      } else if (
        user[0].toLowerCase().includes(search.toLowerCase()) ||
        user[4].toLowerCase().includes(search.toLowerCase()) ||
        user[3].toLowerCase().includes(search.toLowerCase())
      ) {
        return user;
      }
      return false;
    }).length / userPerPage
  );

  const handlePage = () => {
    if (search !== "" && pageCount <= 17) {
      setCurrentPage(1)
    }
  }

  useEffect(() => {
    handlePage();
  })
  
  
  //* Pagination Number Select
  const handleSelect = (data) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <div className="app">
      <header className="app-s-logo">
        <Link to="/">
          <img className="app-img" src={tesodevSmallLogo} alt="Company Logo" />
        </Link>
        <div className="app-more-search">
          <SearchBar handleSelect={handleSelect} />
        </div>
      </header>
      <main className="app-main">
        <div className="app-more-list">
          <div className="more-list">
            <div className="order">
              <OrderBy />
            </div>
            <User
              indexOfFirstUser={indexOfFirstUser}
              indexOfLastUser={indexOfLastUser}
            />
          </div>
          <div className="app-pagination">
            <Pagination handleSelect={handleSelect} pageCount={pageCount} handlePage={handlePage} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoreList;
