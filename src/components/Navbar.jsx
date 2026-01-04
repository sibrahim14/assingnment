import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="logo">Innerwear Store</h2>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(product.name)}
          
        />
        <button className="cart" onClick={handleSearch}>🔍</button>
      </div>

      {/* Cart */}
      <Link to="/Cart">
        <button className="cart">🛒 Cart</button>
      </Link>
    </nav>
  );
};

export default Navbar;
