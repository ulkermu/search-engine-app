import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const MoreSearchBar = () => {
  const { setSearch } = useContext(UserContext);

  const submitHandler = (e) => {  
    e.preventDefault();
    setSearch(e.target['search'].value)
  }

  return (
    <form onSubmit={submitHandler} className="search-more-bar">
      <input
        className="search-input"
        placeholder="Search"
        name="search"
        type="text"
        autoComplete="off"
        required
      />
      <button
        type="submit"
        name="searchBtn"
        className="search-button"
      >
        Search
      </button>
    </form>
  );
};

export default MoreSearchBar;