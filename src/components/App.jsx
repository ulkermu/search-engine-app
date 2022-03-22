import tesodevLogo from "../img/tesodev.png";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import MoreList from "./MoreList";

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
          <div className="user-list">
            <UserList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
