import { React } from "react";
import './FilterProducts.css';

function FilterProducts(props) {
  const options = ["SHUTTERS", "BLINDS"];

  return (
    <div className='filter-wrapper'>
      <h3 className='filter-head'>Filters:</h3>
      <input
        className="product-name-search"
        value={props.filterName}
        placeholder={props.isInstallations ? 'Search for an installation' : 'Search for a product'}
        onChange={(e) => props.handleProductSearch(e.target.value)}
      />
      <select
        className="filter-type"
        value={props.filterType}
        onChange={(e) => props.updateProduct(e.target.value)}
      >
        <option selected='selected' value={false}>
          Select a product type
        </option>
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FilterProducts;
