import React from "react";

const FilterBox = ({ filter, setFilter }) => (
  <input
    type="text"
    className="form-control mb-3"
    placeholder="Filter by name"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  />
);

export default FilterBox;
