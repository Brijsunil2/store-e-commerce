import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({placeholder}) => {
  return (
    <div className="search-bar">
      <form>
        <input
          className="search-bar-input"
          type="search"
          placeholder={placeholder}
          name="search"
        />
        <button className="search-bar-btn" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
