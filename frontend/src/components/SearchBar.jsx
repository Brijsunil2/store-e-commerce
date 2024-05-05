import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = ({placeholder}) => {
  const [searchText, setSearchText] = useState("")

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(searchText)
  }

  return (
    <div className="search-bar">
      <form onSubmit={submitHandle}>
        <input
          className="search-bar-input"
          type="search"
          placeholder={placeholder}
          name="search"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button className="search-bar-btn" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
