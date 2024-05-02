import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button className="search-btn" type="button">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
