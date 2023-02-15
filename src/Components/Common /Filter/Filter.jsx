import React from "react";
import "./Filter.css";

function Filter({ filterList }) {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return (
            <div className="filter-item">
              {filter.icon && filter.icon}
              <div className="filter-name">{filter.title}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Filter;
