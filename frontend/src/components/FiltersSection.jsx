import "../styles/FiltersSection.css";
import capaitalizeTitle from "../util/capitalizeTitle";
import { v4 as uuidv4 } from 'uuid';

const FiltersSection = ({ categories }) => {
  return (
    <div className="filterssection-container">
      <h4>Filter By:</h4>
      <form>
        {categories.map((category) => (
            <div key={uuidv4()} className="filter-checkbox">
              <input
                type="checkbox"
                name={category}
                value={category}
              />
              <label htmlFor={category} > {capaitalizeTitle(category)}</label>
              <br/>
            </div>
          ))}
      </form>
    </div>
  );
};

export default FiltersSection;
