import { useContext } from "react";
import { UserContext } from "../context/UserContext";


const SearchBar = () => {

  const {setSearch} = useContext(UserContext)

    return (
      <div className="search-bar">
        <input
          onChange={e => setSearch(e.target.value)}
          className="search-input"
          type="search"
          placeholder="Type it down bagger"
        />
        <button className="search-button">Search</button>
      </div>
    );
}

export default SearchBar;
