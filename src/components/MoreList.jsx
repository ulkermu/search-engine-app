import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import User from "./User";
import Pagination from "./Pagination";
import tesodevSmallLogo from "../img/tesodev-small.png";
import orderIcon from "../img/iconfinder.png";
import MoreSearchBar from "./MoreSearchBar";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const MoreList = () => {
  const { user, setUser } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(6);
  const [order, setOrder] = useState("ascending");
  const [dateOrder, setDateOrder] = useState("ASC");

  // En son kullanıcıyı bulmak için;
  const indexOfLastUser = currentPage * userPerPage;
  // İlk kullanıcıyı bulmak için;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  // Toplam sayfa sayısı;
  const totalPagesNum = Math.ceil(user.length / userPerPage);

  const sortingAsc = () => {
    if (order === "ascending") {
      const sorted = [...user].sort((a, b) => (a > b ? 1 : -1));
      setUser(sorted);
      setOrder("descending");
    }
  };

  const sortingDsc = () => {
    if (order === "descending") {
      const sorted = [...user].sort((a, b) => (a > b ? -1 : 1));
      setUser(sorted);
      setOrder("ascending");
    }
  };

  const sortingDateAsc = () => {
    if (dateOrder === "ASC") {
      const sortedDate = [...user].sort((a, b) => new Date(...a[3].split('/').reverse()) - new Date(...b[3].split('/').reverse()));
      setUser(sortedDate);
      setDateOrder("DSC")
    }
  };

  const sortingDateDsc = () => {
    if (dateOrder === "DSC") {
      const sortedDate = [...user].sort((a, b) => new Date(...b[3].split('/').reverse()) - new Date(...a[3].split('/').reverse()));
      setUser(sortedDate);
      setDateOrder("ASC")
    }
  };

  return (
    <div className="app">
      <header className="app-s-logo">
        <Link to="/">
          <img className="app-img" src={tesodevSmallLogo} alt="Company Logo" />
        </Link>
        <div className="app-more-search">
          <MoreSearchBar />
        </div>
      </header>
      <main className="app-main">
        <div className="app-more-list">
          <div className="more-list">
            <div className="order">
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <img src={orderIcon} alt="Finder" />
                  Order By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => sortingAsc(user[0])}
                  >
                    Name ascending
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => sortingDsc(user[0])}
                  >
                    Name descending
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => sortingDateAsc(user[3])}
                  >
                    Year ascending
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-4"
                    onClick={() => sortingDateDsc(user[3])}
                  >
                    Year descending
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <User
              user={user}
              indexOfFirstUser={indexOfFirstUser}
              indexOfLastUser={indexOfLastUser}
            />
          </div>
          <div className="app-pagination">
            <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoreList;
