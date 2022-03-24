import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";


const SearchBar = () => {

  const {setSearch} = useContext(UserContext)

    return (
      <div className="search-bar">
        <input
          onChange={e => setSearch(e.target.value)}
          className="search-input"
          type="search"
          placeholder="Search"
        />
        <Link to="/showmore"><button className="search-button">Search</button></Link>
      </div>
    );
}

export default SearchBar;
