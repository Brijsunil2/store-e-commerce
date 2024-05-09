import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = ({ placeholder, searchFunc }) => {
  const [searchText, setSearchText] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    await searchFunc(searchText);
  };

  return (
    <div className="search-bar">
      <form onSubmit={submitHandle}>
        <input
          className="search-bar-input"
          type="search"
          name="search"
          placeholder={placeholder}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-bar-btn" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
