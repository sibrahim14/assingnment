import React from "react";

const Menubar = ({ setCategory, setSortPrice }) => {
  return (
    <div className="filter-bar">
      {/* Category Filter */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select>

      {/* Price Filter */}
      <select onChange={(e) => setSortPrice(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>
    </div>
  );
};

export default Menubar;
