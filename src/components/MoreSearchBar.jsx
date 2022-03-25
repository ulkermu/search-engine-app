import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const MoreSearchBar = ({ handleSelect }) => {
  const { setSearch } = useContext(UserContext);

  return (
    <div className="search-more-bar">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="search-more-input"
        type="search"
        placeholder="Search"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default MoreSearchBar;
