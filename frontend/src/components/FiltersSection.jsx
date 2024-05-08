import "../styles/FiltersSection.css";
import capaitalizeTitle from "../util/capitalizeTitle";
import { v4 as uuidv4 } from "uuid";

const FiltersSection = ({ mainCategories, filters, setFilters }) => {
  const handleFilterCheckboxes = (e) => {
    const i = filters.categories.indexOf(e.target.name);
    if (i > -1) {
      filters.categories.splice(i, 1);
      setFilters({
        ...filters,
        categories: filters.categories,
      });
    } else {
      setFilters({
        ...filters,
        categories: [...filters.categories, e.target.name],
      });
    }
  };

  return (
    <div className="filterssection-container">
      <h3>Filter By:</h3>
      <h4>Categories:</h4>
      <form>
        {mainCategories.map((category) => (
          <div key={uuidv4()} className="filter-checkbox">
            <input
              type="checkbox"
              name={category}
              value={category}
              onChange={(e) => handleFilterCheckboxes(e)}
              checked={filters.categories.includes(category)}
            />
            <label htmlFor={category}> {capaitalizeTitle(category)}</label>
            <br />
          </div>
        ))}
      </form>
    </div>
  );
};

export default FiltersSection;
