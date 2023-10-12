import React from "react";
import { CartState } from "../context/Context";
import "./styles/filterForm.css";
import Rating from "./Ratings";

const FilterForm = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();

  return (
    <div className='FilterForm'>
      <div>
        <label>
          <input
            type='radio'
            name='sortOrder'
            value='ascending'
            checked={sort === "lowToHigh" ? true : false}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
          />
          Ascending
        </label>
      </div>
      <div>
        <label>
          <input
            type='radio'
            name='sortOrder'
            value='descending'
            checked={sort === "highToLow" ? true : false}
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
          />
          Descending
        </label>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            name='includeOutOfStock'
            checked={byStock}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
          />
          Include out of stock
        </label>
      </div>
      <Rating
        rating={byRating}
        onClick={(i) =>
          productDispatch({
            type: "FILTER_BY_RATING",
            payload: i + 1,
          })
        }
        style={{ cursor: "pointer", display: "inline-block" }}
      />
      <button
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </button>
      {/* <div className='dropdown-select'>
        <label htmlFor='dropdown-select'>Select an option: </label>
        <select
          id='dropdown-select'
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value=''>Select an option</option>
          <option value='Option 1'>Option 1</option>
          <option value='Option 2'>Option 2</option>
          <option value='Option 3'>Option 3</option>
        </select>
        <p>You selected: {selectedOption}</p>
      </div> */}
    </div>
  );
};

export default FilterForm;
