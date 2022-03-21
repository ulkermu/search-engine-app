import tesodevLogo from "../img/tesodev.png";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import Pagination from "./Pagination";

const App = () => {


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
          <UserList />
        </div>
        <div className="app-pagination">
          <Pagination />
        </div>
      </main>
    </div>
  );
};

export default App;
