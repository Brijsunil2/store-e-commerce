import "../styles/FiltersSection.css";
import capaitalizeTitle from "../util/capitalizeTitle";
import { v4 as uuidv4 } from "uuid";

const FiltersSection = ({ mainCategories, filters, setFilters }) => {
  const handleFilterCheckboxes = (e) => {
    console.log(e.target);

    if (e.target.checked) {
      setFilters({
        ...filters,
        categories: [...filters.categories, e.target.name],
      });
    } else {
      const i = filters.categories.indexOf(e.target.name);

      filters.categories.splice(i, 1);
      setFilters({
        ...filters,
        categories: filters.categories,
      });
    }
  };

  return (
    <div className="filterssection-container">
      <h3>Filter By:</h3>
      <h4>
        Categories:{" "}
        <button
          className="filter-reset"
          onClick={() => setFilters({ ...filters, categories: [] })}
        >
          Reset
        </button>
      </h4>
      <form>
        {mainCategories.map((category) => (
          <div key={uuidv4()} className="filter-checkbox">
            <input
              type="checkbox"
              name={category}
              value={category}
              onChange={(e) => handleFilterCheckboxes(e)}
              checked={
                mainCategories.length == filters.categories.length ||
                filters.categories.includes(category)
              }
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
