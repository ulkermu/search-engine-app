import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const MoreSearchBar = () => {
  const { search, setSearch } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(e.target['search'].value)
    console.log('submitted');
  }

  const focusHandler = () => {
    console.log('onFocus');
  }

  const changeHandler = (e) => {
    console.log('onInput', e.target.value);
  }

  const clickHandler = (e) => {
    //e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler} className="search-more-bar">
      <input
        className="search-more-input"
        placeholder="Search"
        name="search"
        type="text"
        onFocus={focusHandler}
        onInput={(e) => changeHandler(e)}
      />
      <button
        onClick={clickHandler}
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
