import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const MoreSearchBar = ({ handleSelect }) => {
  const { search, setSearch } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Search , ${search}`);

    if (search === "") {
      setSearch({ required:true });
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <form className="search-more-bar">
      <input
        onChange={handleChange}
        className="search-more-input"
        placeholder="Search"
      />
      <button
        disabled={!search}
        onClick={handleSubmit}
        type="submit"
        value="Search"
        className="search-button"
      >
        Search
      </button>
    </form>
  );
};

export default MoreSearchBar;
